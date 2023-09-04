function getComputerChoice(){
    const months = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * months.length);

    return months[random];
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLow = playerSelection.toLowerCase();

    if(playerSelectionLow == 'rock'){
        if(computerSelection == 'Rock'){
            return 1;
        } else if(computerSelection == 'Paper'){
            return 0;
        } else{
            return 2;
        }
    }else if(playerSelectionLow == 'paper'){
        if(computerSelection == 'Paper'){
            return 1;
        } else if(computerSelection == 'Scissors'){
            return 0;
        } else{
            return 2;
        }
    }else if(playerSelectionLow == 'scissors'){
        if(computerSelection == 'Scissors'){
            return 1;
        } else if(computerSelection == 'Rock'){
            return 0;
        } else{
            return 2;
        }
    }else{
        return -1;
    }
  }

let userPoints = 0;
let computerPoints = 0;

const container = document.querySelector('#main-container');

//round-message container
const roundContent = document.createElement('div');
roundContent.classList.add('roundContent');
container.appendChild(roundContent);

//result container
const resultContent = document.createElement('div');
resultContent.classList.add('resultContent');
resultContent.textContent = userPoints.toString() + '-' + computerPoints.toString();
container.appendChild(resultContent);

//end-game message-container
const endMessage = document.createElement('div');
endMessage.classList.add('endMessage');
endMessage.textContent ='Who is going to be the winner?';
container.appendChild(endMessage);

function winRound(){
roundContent.textContent = 'You win!';
    userPoints++;
    resultContent.textContent = userPoints.toString() + '-' + computerPoints.toString();
}

function loseRound(){
    roundContent.textContent = 'You lost';
    computerPoints++;
    resultContent.textContent = userPoints.toString() + '-' + computerPoints.toString();
}

function endGame(){
    if(userPoints == 5 ){
        endMessage.textContent = "You won madafaka";
    }
    else if(computerPoints == 5){
        endMessage.textContent = "You lost madafaka"
    }else{
        //endMessage.textContent ='Who is going to be the winner?';
    }

    userPoints = 0;
    computerPoints = 0;
    resultContent.textContent = userPoints.toString() + '-' + computerPoints.toString(); 
}

function checkEndGame(){
    if(userPoints == 5 || computerPoints == 5){
        endGame();
    }
    else if(userPoints == 0 || computerPoints == 0){
        endMessage.textContent ='Who is going to be the winner?';
    }
}

const rockButton = document.querySelector('#rock-button');
rockButton.addEventListener('click', () => {
    //endMessage.textContent ='Who is going to be the winner?';
    const roundResult = playRound("rock", getComputerChoice());
    if(roundResult == 2){
        winRound();
    }else if(roundResult == 0){
        loseRound();
    }else{
        roundContent.textContent = "It's a draw!";
    }

    checkEndGame();
});

const paperButton = document.querySelector('#paper-button');
paperButton.addEventListener('click', () => {
    //endMessage.textContent ='Who is going to be the winner?';
    const roundResult = playRound("paper", getComputerChoice());
    if(roundResult == 2){
        winRound();
    }else if(roundResult == 0){
        loseRound();
    }else{
        roundContent.textContent = "It's a draw!";
    }

    checkEndGame();
});

const scissorsButton = document.querySelector('#scissors-button');
scissorsButton.addEventListener('click', () => {
    //endMessage.textContent ='Who is going to be the winner?';
    const roundResult = playRound("scissors", getComputerChoice());
    if(roundResult == 2){
        winRound();
    }else if(roundResult == 0){
        loseRound();
    }else{
        roundContent.textContent = "It's a draw!";
    }

    checkEndGame();
});



  