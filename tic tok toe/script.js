console.log("Welcome to tic tac toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let audiogameover = new Audio("gameover.mp3")
let turn = "X"
let gameover = false

// Fumction to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// Function to check a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 5, 5, 0, 7, 9, 0],
        [3, 4, 5, 5, 15, 0, 7, 29, 0],
        [6, 7, 8, 5, 25, 0, 7, 49, 0],
        [0, 3, 6, -5, 15, 90, -13, 29, 90],
        [1, 4, 7, 5, 15, 90, 8, 29, 90],
        [2, 5, 8, 15, 15, 90, 28, 29, 90],
        [0, 4, 8, 5, 15, 45, 9, 30, 46],
        [2, 4, 6, 5, 15, 135, 7, 30, 134],

    ]
    wins.forEach(e => {
        let x = window.matchMedia("(max-width: 950px)")
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        gameover = true
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"; 
        document.querySelector(".line").style.width = "20vw";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        if (x.matches){
                    document.querySelector(".line").style.width = "45vw";
                    document.querySelector(".line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`;
                }
        
        
            }
           
         })
    }
    




// Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn
            }

        }


    })
})
// Add on clicklistener to reset button
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.querySelector(".line").style.width = "0vw"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0"
})

// line after media query
// let x = window.matchMedia("(max-width: 950px)")
// function line(x){
//     if (x.matches){
//         document.querySelector(".line").style.width = "45vw";
//         document.querySelector(".line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[8]}deg)`;
//     }

// }
