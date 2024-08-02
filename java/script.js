const grid = document.querySelector('.game-board');

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

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('disabled-card');
    
    if (disabledCards.length === 16) {
        alert('Parabéns, você venceu!!');

    }
}

const checkCards = () => {
    const firstcharacter = firstCard.getAttribute('data-character');
    const secondcharacter = secondCard.getAttribute('data-character');
    
    if (firstcharacter === secondcharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();
        
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
    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;

    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode; 

        checkCards();
    }



}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../Jogo-da-memoria/images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
};


const createBoard = () => {
    const duplicatedeCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicatedeCharacters.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);


    });
    showAllCards();
}

const showAllCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.add('reveal-card');
    });

    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('reveal-card');
        });
    }, 2000); 
}

createBoard();








