// Function to get the users input
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Invalid choice! Please choose rock, paper, or scissors.');
      return null;
    }
  }
  
  // Function to get computer choice
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }
  
  // Function to determine winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'tie';
    }
  
    if (userChoice === 'rock') {
      return computerChoice === 'scissors' ? 'user' : 'computer';
    } else if (userChoice === 'paper') {
      return computerChoice === 'rock' ? 'user' : 'computer';
    } else if (userChoice === 'scissors') {
      return computerChoice === 'paper' ? 'user' : 'computer';
    }
  }
  
  // Function to play the game
  function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let rounds = parseInt(prompt('How many rounds would you like to play?'), 10);
  
    if (isNaN(rounds) || rounds <= 0) {
      console.log('Invalid input. Exiting game.');
      return;
    }
  
    for (let i = 1; i <= rounds; i++) {
      console.log(`\nRound ${i}`);
      const userChoiceInput = prompt('Make your choice (rock, paper, or scissors):');
      const userChoice = getUserChoice(userChoiceInput);
  
      if (!userChoice) {
        console.log('Skipping this round due to invalid input.');
        continue;
      }
  
      const computerChoice = getComputerChoice();
      console.log(`You chose: ${userChoice}`);
      console.log(`The computer chose: ${computerChoice}`);
  
      const winner = determineWinner(userChoice, computerChoice);
  
      if (winner === 'user') {
        console.log('You win this round!');
        userScore++;
      } else if (winner === 'computer') {
        console.log('Computer wins this round!');
        computerScore++;
      } else {
        console.log("It's a tie!");
      }
  
      console.log(`Score -> You: ${userScore}, Computer: ${computerScore}`);
    }
  
    // Final results
    console.log('\nGame Over!');
    if (userScore > computerScore) {
      console.log('Congratulations! You won the game!');
    } else if (computerScore > userScore) {
      console.log('Better luck next time! The computer won.');
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  playGame();
  