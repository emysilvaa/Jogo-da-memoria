const grid = document.querySelector('.grid');

const characters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkCards = () => {
    const firstcharacter = firstCard.getAttribute('data-character');
    const secondcharacter = secondCard.getAttribute('data-character');
    
    if (firstcharacter === secondcharacter) {
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChildclassList.add('disable-card');

        firstCard = '';
        secondCard = '';
        
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }  
}

const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard === ''){
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parantNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parantNode; 

        checkCards();
    }



}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    
    front.style.backgroundImage = `url('../images${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card;
};

const createBoard = () => {

    const duplicatedeCharacters = [ ...characters, ...characters ];
    const shuffle = duplicatedeCharacters.sort(() => Math.random() - 0.5);


    duplicatedeCharacters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);


    });

}
createBoard();




