'use strict'
let flag  = true;
const gameArray = [];
const gameBoard = (() =>{
    const board = document.querySelector("#board");
    board.addEventListener("click", (e)=>{

        const {target} = e;



        if(target.id !== "board" && flag === true && target.innerHTML === ""){
        let text = document.createElement("h1");
        target.classList.add("mark")      
        target.innerHTML = text.textContent = player1.mark
        flag = false;
        gameArray[`${target.id}`] = {player1};
        console.log(target)

    }

    else if(target.id !== "board" && flag === false && target.innerHTML === ""){
        let text = document.createElement("h1");
        target.classList.add("mark")      
        target.innerHTML = text.textContent = player2.mark

        flag = true;
        gameArray[`${target.id}`] = {player2};
        console.log(target)
    }
    })
})();

console.log(gameArray)


const Player = function(name, mark){
    this.name = name;
    this.mark = mark;
}

const player1 = new Player("Player One", "X");
const player2 = new Player("Player One", "0");


function Reset(){
    for(let i = 0; i < 9;i++){
        const board = document.querySelector("#board");
        board.children[i].innerHTML = "";

        gameArray.pop();
    }
    flag = true;
    
}

console.log(gameArray.length)