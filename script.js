//keep track of turn and game number
let turnCount = 0;
let gameNumber = 0;

//function to run whenever box clicked
const eachTurn = () => {

    let values = [];
    let boxes = [];

    for (let i = 0; i <= 8; i++) {
        values.push(document.getElementById(`${i}`).value);
        boxes.push(document.getElementById(`${i}`));
    };

}

eachTurn();