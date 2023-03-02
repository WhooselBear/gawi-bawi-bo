let playerScore = 0
let computerScore = 0
//const userInput = prompt("Rock, Paper, Scissors");

function getComputerChoice(){
    const computerChoice = ['rock', 'paper', 'scissors']
    const computerRandom = Math.floor(Math.random() *3)
    const computerPick = computerChoice[computerRandom]
    return computerPick
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'You tied.'
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'You tied.'
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'You tied'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win. Rock beats scissors'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win. Scissors beats paper'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win. Paper beats rock'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose. Scissors beats paper'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose. Paper beats rock'
    }else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose. Rock beats scissors'
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Choose:' , 'Rock, Paper, Scissors').toLowerCase();
        console.log(playRound(playerSelection, computerSelection))
    }

}
console.log(game())



