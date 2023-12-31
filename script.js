let newGameHTML = `
<div class="new-game">
    <p>Click the button below to start a new game!</p>
    <button id="start-game" onclick="startGame()">Start</button>
<div>
`

let gameHTML = `
<div class="tic-tac-toe">
    <div class="cell" id="0"></div>
    <div class="cell" id="1"></div>
    <div class="cell" id="2"></div>
    <div class="cell" id="3"></div>
    <div class="cell" id="4"></div>
    <div class="cell" id="5"></div>
    <div class="cell" id="6"></div>
    <div class="cell" id="7"></div>
    <div class="cell" id="8"></div>
</div>
`;

//keep track of turn, game number and scores
let turnCount = 0;
let gameCount = 0;
let playerOneScore = 0;
let playerTwoScore = 0;

//function to start new game
function startGame() {
    document.getElementById('game-area').innerHTML = gameHTML;
    //add event listeners to each box
    for (let i = 0; i <= 8; i++) {
        document.getElementById(`${i}`).addEventListener('click', eachTurn);
    };
};

//run this when game is won by either player
function gameWin(player, playerOneScore, playerTwoScore) {
    for (let i = 0; i <= 8; i++) {
        document.getElementById(`${i}`).removeEventListener('click', eachTurn);
    };
    if (player === "X") {
        playerOneScore++;
        document.getElementById('winner').innerHTML = `<h2 style="color: red;">Player 1 wins!</h2>`;
        document.getElementById('player-one').innerHTML = `<h2>${playerOneScore}</h2>`;
    };
    if (player === "O") {
        playerTwoScore++;
        document.getElementById('winner').innerHTML = `<h2 style="color: blue;">Player 2 wins!</h2>`
        document.getElementById('player-two').innerHTML = `<h2>${playerTwoScore}</h2>`;
    };
    setTimeout(() => {
        document.getElementById('game-area').innerHTML = newGameHTML;
        document.getElementById('winner').innerHTML = "";
    }, 2500);
    return [playerOneScore, playerTwoScore];
};

//run this when game is drawn
function gameDraw() {
    for (let i = 0; i <= 8; i++) {
        document.getElementById(`${i}`).removeEventListener('click', eachTurn);
    };
    document.getElementById('winner').innerHTML = `<h2>It's a draw!</h2>`;
    setTimeout(() => {
        document.getElementById('game-area').innerHTML = newGameHTML;
        document.getElementById('winner').innerHTML = "";
    }, 2500);
};

//function to run whenever box clicked
function eachTurn() {

    console.log(turnCount);
    //add in case game ends in draw
    if (turnCount === 8) {
        gameDraw();
    };

    //arrays for values and HTML elements of each box
    let values = [];
    let boxes = [];

    //check if current player is X or O
    let player;
    player = ( (turnCount + gameCount) % 2 === 0) ? 'X' : 'O';

    //get values and HTML elements for each box
    for (let i = 0; i <= 8; i++) {
        values.push(document.getElementById(`${i}`).innerHTML);
        boxes.push(document.getElementById(`${i}`));
    };

    //if box empty, fill in with players symbol
    if (values[this.id] === 'X' || values[this.id] === 'O') {
        return;
    } else {
        values[this.id] = player;
        boxes[this.id].innerHTML = player;
        turnCount++;
    };
    
    //all winning combinations
    const winCombos = ['012', '345', '678', '036', '147', '258', '246', '048'];

    //array to get players cells marked
    let playerCells = [];

    //output array of indexes where player has marked
    for (let i = 0; i <= 8; i++) {
        if (values[i] === player) {
            playerCells.push(i);
        };
    };

    //check players cells vs winning combos
    for (let i = 0; i < winCombos.length; i++) {
        let counter = 0;
        let combo = winCombos[i];
        for (let j = 0; j < 3; j++) {
            if (playerCells.includes(Number(combo[j]))) {
                counter++;
            };
        };
        //below happens if game has been won
        if (counter === 3) {
            for (let k = 0; k < 3; k++) {
                let cellToHighlight = Number(winCombos[i][k]);
                let playerColor = player === 'X' ? 'red' : 'blue';
                boxes[cellToHighlight].style.color = playerColor;
            };
            
            scores= gameWin(player, playerOneScore, playerTwoScore);
            playerOneScore = scores[0];
            playerTwoScore = scores[1]; 
            gameCount++;
            turnCount = 0;
        };
    };
};




