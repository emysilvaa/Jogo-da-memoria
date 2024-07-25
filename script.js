// isso aqui é um  array de objetos q vai simulas nossas cartas, coloquei esse símbolo pra fazer graça
const cartasArray = [
    { name: 'A', symbol: '🂡' },
    { name: 'A', symbol: '🂡' },
    { name: 'B', symbol: '🂢' },
    { name: 'B', symbol: '🂢' },
    { name: 'C', symbol: '🂣' },
    { name: 'C', symbol: '🂣' },
    { name: 'D', symbol: '🂤' },
    { name: 'D', symbol: '🂤' },
    { name: 'E', symbol: '🂥' },
    { name: 'E', symbol: '🂥' },
    { name: 'F', symbol: '🂦' },
    { name: 'F', symbol: '🂦' },
    { name: 'G', symbol: '🂧' },
    { name: 'G', symbol: '🂧' },
    { name: 'H', symbol: '🂨' },
    { name: 'H', symbol: '🂨' }
];

// isso aq é pra embaralha as cartas
function shuffle(cartasArray) {
    for (let i = cartasArray.length - 1; i > 0; i--) { // eu pesquisei sobre essa função, não sei se está certa | mas ela vai percorrer aquele array de tras pra frente
        const j = Math.floor(Math.random() * (i + 1)); // mas aqui é pra gerar um número aleatório pra embaralhar, aí esse for eu coloquei começando do último indíce e decremnetar até o 1, que é pra garantir que ele vai considerar todas as posições possíveis na hora q for mudar as cartas de lugar
        [cartasArray[i], cartasArray[j]] = [cartasArray[j], cartasArray[i]]; // aq épra criar um array temporário e atribuir ele nas posições q forem trocadas
        // a ideia é que esselaço fique repetindo até que as cartas fiquem embaralhadas
    }
    return cartasArray;
}

shuffle(cartasArray); // p que elas se embaralhem no início do jogo

function createBoard() { //aqui é pra gente criar o tabuleiro
    const gameBoard = document.getElementById('game-board');
    cartasArray.forEach((carta, index) => { //vai percorrer os negócio do cartasArray
        const cartaElement = document.createElement('div'); //pra criar uma div pras carta
        cartaElement.classList.add('cartas'); //adicionar as cartinhas
        cartaElement.dataset.name = carta.name; //é pra colocar nome na carta
        cartaElement.dataset.index = index; // aqui eu tô atmazenando o índice da carta no atributo 
        cartaElement.addEventListener('click', flipCartas);  //pra chamar a função flip
        gameBoard.appendChild(cartaElement); //colocar carta no tabuleiro
    });
}

function flipCartas() { //p virar a crtinha
    this.classList.add('flipped');

}

createBoard(); //pra que o tabuleiro apareça/seja criado quando carregar a pagina

