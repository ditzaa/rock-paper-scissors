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
  let numberOfGames = 0 ;

  function game(){
        let playerChoice = prompt('Make your choice: ', 'rock');
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
        if(result == 0){
            computerPoints++;
            return userPoints + " - " + computerPoints;
        }
        else if(result == 2){
            userPoints++;
            return userPoints + " - " + computerPoints;

        }else if(result == 1){
            return userPoints + " - " + computerPoints;
        }else{
            console.log("Wrong input! Please, try again!");
        }

  }

  while(numberOfGames < 5){
    numberOfGames++;
    console.log(game());
  }

  