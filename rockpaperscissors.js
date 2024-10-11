//file for game

// Choices //
let choice = ['rock', 'paper', 'scissors'];
// Randomly Generate a computer choice //
function getComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)];

}

console.log(getComputerChoice(choice));

// Playing the round ; determining winners //

function round (playerSelection,computerSelection){
if (playerSelection===computerSelection){
return "It's a tie! You both picked the same choice!" ;
}
else if (playerSelection==="rock" && computerSelection==="scissors"){
return "You win! Rock beats scissors.";
}
else if (playerSelection==="paper" && computerSelection==="rock"){
    return "You win! Paper beats rock.";
}

else if (playerSelection==="scissors" && computerSelection==="paper"){
    return "You win! Scissors beats paper.";
}

else {
    return "You Lose!"
}

}

const playerSelection = prompt("Please enter value").toLowerCase;
const computerSelection = getComputerChoice(choice);
console.log(round(playerSelection,computerSelection));