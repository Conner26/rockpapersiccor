//file for game

function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput; 
    }else{
        console.log('Invalid choice Please choose rock paper or scissors.');
    }
}
/// Determining Choice and Outcome
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const randomChoice =
Math.floor(Math.random()*3);
    return choices[randomChoice];
}

function determineWinner(userChoice,computerChocie){
    if (userChoice === computerChocie){
        return "It's a tie"
    }
    if(userChoice === 'rock'){
        if(computerChocie === 'scissors'){
            return 'You win';
        }else{
            return 'You lose';
        }
    }
    if(userChoice === 'paper'){
        if(computerChocie === 'rock'){
            return 'You win';
        }else{
            return 'You lose';
        }
    }
    if(userChoice === 'scissors'){
        if(computerChocie === 'paper'){
            return 'You win';
        }else{
            return 'You lose';
        }
    }
}

function playGame(){
    const userChoice = getUserChoice(prompt('Make your choice'));
    const computerChocie = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChocie}`);
    console.log(determineWinner(userChoice,computerChocie));
}

playGame();
