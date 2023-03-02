let playScore = 0
let computerScore = 0

function getComputerChoice(){
    const computerChoice = ['rock', 'paper', 'scissors']
    const computerRandom = Math.floor(Math.random() *computerChoice.length)
    const computerPick = computerChoice[computerRandom]
    return computerPick
}
console.log(getComputerChoice() )

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied.'
    }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            return 'You win. Rock beats Scissors'
    }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
            return 'You lose. Paper beats Rock'
    }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
            return 'You tied'
    }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
            return 'You win. Paper beats Rock'
    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            return 'You lose. Scissors beats Paper'
    }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return 'You tied.'
    }
        else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            return 'You win. Scissors beats Paper'
    }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'You lose. Rock beats scissors'
    }
    return results
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()
const results = playRound(playerSelection, computerSelection)
console.log(playerSelection, results)



function game(){
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
    console.log(playRound(results, playerSelection, computerSelection))
    }

}
console.log(playRound(results, playerSelection, computerSelection))