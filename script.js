//keep track of turn and game number
let turnCount = 0;
let gameNumber = 0;

//function to run whenever box clicked
const eachTurn = box_id => {

    let values = [];
    let boxes = [];

    let player;
    player = (turnCount % 2 === 0) ? "X" : "O";

    for (let i = 0; i <= 8; i++) {
        values.push(document.getElementById(`${i}`).innerHTML);
        boxes.push(document.getElementById(`${i}`));
    };

    if (values[box_id] === "X" || values[box_id] === "O") {
        return;
    } else {
        boxes[box_id].innerHTML = player;
    };

    console.log(values);
    //increment turn count
    turnCount++;

};
