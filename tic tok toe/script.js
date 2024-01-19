// JavaScript - script.js
console.log("Welcome to tic tac toe");

let turn = "X";
let gameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < wins.length; i++) {
        let [a, b, c] = wins[i];
        if (
            boxtext[a].innerText !== "" &&
            boxtext[a].innerText === boxtext[b].innerText &&
            boxtext[a].innerText === boxtext[c].innerText
        ) {
            document.querySelector(".info").innerText =
                boxtext[a].innerText + " Won";
            gameover = true;
            return true;
        }
    }
    return false;
};

// Function to check for a draw
const checkDraw = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    for (let i = 0; i < boxtext.length; i++) {
        if (boxtext[i].innerText === "") {
            // If any cell is empty, the game is not a draw
            return false;
        }
    }
    // All cells are filled, declare a draw
    document.querySelector(".info").innerText = "It's a Draw!";
    gameover = true;
    return true;
};

// Function to get available cells in the board
const getAvailableCells = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let availableCells = [];
    for (let i = 0; i < boxtext.length; i++) {
        if (boxtext[i].innerText === "") {
            availableCells.push(i);
        }
    }
    return availableCells;
};

// Function to make the computer move
const makeComputerMove = () => {
    let availableCells = getAvailableCells();
    if (availableCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableCells.length);
        let computerMove = availableCells[randomIndex];
        document.getElementsByClassName("boxtext")[computerMove].innerText = "O";
        turn = changeTurn();
        document.querySelector(".info").innerText = "Turn for " + turn;
        return checkWin() || checkDraw();
    }
    return false;
};

// Function to play the computer until win or lose
const playComputerUntilGameOver = () => {
    while (turn === "O" && !gameover) {
        gameover = makeComputerMove();
    }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerText === "" && !gameover) {
            element.innerText = turn;
            turn = changeTurn();
            document.querySelector(".info").innerText = "Turn for " + turn;
            if (!checkWin() && !checkDraw() && turn === "O") {
                // Computer's turn
                playComputerUntilGameOver();
            }
        }
    });
});

// Add onclick listener to reset button
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
});
