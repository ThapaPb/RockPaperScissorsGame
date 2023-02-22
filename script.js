let choices = ["Rock", "Paper", "Scissors"];
let compChoice = 0;
let playerSelection = "";
let computerSelection = "";
let message = "";
let playerScore = 0;
let compScore = 0;

function getComputerChoice(compChoice){
let randomChoice = Math.floor(Math.random()*choices.length);
compChoice = choices[randomChoice];
return compChoice;
}
console.log(getComputerChoice(compChoice));



function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Enter your choice: Rock, Paper or Scissors?");
    computerSelection = getComputerChoice();
    alert ("You picked " + playerSelection + " while the computer picked "+ computerSelection);
    
    //player selects rock
    if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "Rock"){
            message = "It's a tie!";
        }
        else if (computerSelection === "Paper"){
            message = "You lose. Paper beats Rock.";
            compScore++;

        }
        else if (computerSelection === "Scissors"){
            message = "You win! Rock beats Scissors.";
            playerScore++;
        }
    }

    //player selects paper
    else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "Paper"){
            message = "It's a tie!";
        }
        else if (computerSelection === "Rock"){
            message = "You win. Paper beats Rock.";
            playerScore++;
        }
        else if(computerSelection === "Scissors"){
            message = "You lose! Scissors beat Paper.";
            compScore++;
        }
    }

    //player selects scissors
    else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "Scissors"){
            message = "It's a tie!";
        }
        else if (computerSelection === "Paper"){
            message = "You win. Scissors beat Paper.";
            playerScore++;
        }
        else if(computerSelection === "Scissors"){
            message = "You lose! Rock beats Scissors.";
            compScore++;
        }
    }
    else{
        message = "Error. Please enter from the choices: Rock, Paper or Scissors";
    }
    alert (message);
    return message;
}
//console.log(playRound(playerSelection, computerSelection));

function game(){
    playerScore = 0;
    compScore = 0;
    for (let i = 1; i <= 5; i++){
        alert ("This is round "+ i);
        playRound();
    }

    if (playerScore > compScore){
        alert ("You win this game. You won "+playerScore+ " rounds while Computer won "+compScore+ " rounds out of 5.");
    }
    else if (playerScore = compScore){
        alert("It's a tie. You won "+playerScore+ " rounds while Computer won "+compScore+ " rounds and tied on the rest of the rounds.");
        playRound();
    }
    else{
        alert ("You lose this game. Computer won "+compScore+ " rounds while you won "+playerScore+ " rounds out of 5.");
    }
}
console.log(game());
