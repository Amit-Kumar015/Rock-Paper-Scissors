let userScore= 0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
let playerScore= document.querySelector("#user-score");
let computerScore= document.querySelector("#comp-score");
let resetBtn= document.querySelector("#reset-btn");

const genChoice = () =>{
    let signs= ["rock", "paper", "scissors"];
    let compIdx= Math.floor(Math.random() * 3);
    console.log(signs[compIdx]);
    return signs[compIdx];
};

const showWinner = (userWin) =>{
    if(userWin){
        console.log("user won");
        msg.innerText= "You have won!";
        msg.style.backgroundColor = "#43AF11";
        userScore++;
        playerScore.innerText= userScore;
    }
    else{
        console.log("computer won");
        msg.innerText= "You have lost!";
        msg.style.backgroundColor = "#D70040";
        compScore++;
        computerScore.innerText= compScore;
    }
};

const playGame = (userChoice) =>{
    const compChoice= genChoice();

    let userWin= true;
    if(userChoice === compChoice){
        console.log("draw");
        msg.innerText= "This is a draw!";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        if(userChoice === "rock"){
            // paper, scissors
            userWin= compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock scissors
            userWin= compChoice === "rock" ? true : false;
        }
        else{
            // rock paper
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

resetBtn.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0;
    playerScore.innerText = "0";
    computerScore.innerText = "0";
    msg.innerText= "Pick your move";
    msg.style.backgroundColor= "#081b31";
});

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});