//keep track of turn and game number
let turnCount = 0;
let gameNumber = 0;

//function to run whenever box clicked
const eachTurn = box_id => {

    //arrays for values and HTML elements of each box
    let values = [];
    let boxes = [];

    //check if current player is X or O
    let player;
    player = (turnCount % 2 === 0) ? "X" : "O";

    //get values and HTML elements for each box
    for (let i = 0; i <= 8; i++) {
        values.push(document.getElementById(`${i}`).innerHTML);
        boxes.push(document.getElementById(`${i}`));
    };

    //if box empty, fill in with players symbol
    if (values[box_id] === "X" || values[box_id] === "O") {
        return;
    } else {
        boxes[box_id].innerHTML = player;
    };
    
    //all winning combinations
    const winCombos = ["012", "345", "678", "036", "147", "258", "246", "048"];

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
    };



    //increment turn count
    turnCount++;

};


