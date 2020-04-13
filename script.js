'use strict'
let flag  = true;
const gameArray = [];
const gameBoard = (() =>{
    const board = document.querySelector("#board");
    board.addEventListener("click", (e)=>{

        const {target} = e;
        const id = target.id


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
    checkBoard();
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


function checkBoard(){
    const board = document.querySelector("#board");

    if(board.children[0].innerHTML === "X" && board.children[4].innerHTML === "X" && board.children[8].innerHTML === "X"){
        alert("You win");
        Reset();
        return
    }else if(board.children[0].innerHTML === "X" && board.children[1].innerHTML === "X" && board.children[2].innerHTML === "X"){
        alert("You Win")
        Reset();
        return
    }else if(board.children[0].innerHTML === "X" && board.children[3].innerHTML === "X" && board.children[6].innerHTML === "X"){
        alert("You Win")
        Reset();
        return
    }else if(board.children[6].innerHTML === "X" && board.children[7].innerHTML === "X" && board.children[8].innerHTML === "X"){
        alert("You Win")
        Reset();
        return
    }else if(board.children[2].innerHTML === "X" && board.children[5].innerHTML === "X" && board.children[8].innerHTML === "X" || board.children[2].innerHTML === "X" && board.children[6].innerHTML === "X" && board.children[4].innerHTML === "X"){
        alert("You Win")
        Reset();
        return
    }
    
}
console.log(gameArray.length)
