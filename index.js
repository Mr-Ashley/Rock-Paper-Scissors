function playRound(playerSelection,computerSelection){

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection){
      return "It's a tie!";
  }
  else if (playerSelection === "rock") {
    if (computerSelection === "scissors"){
      return "You win! Rock beats Scissors";
  }
  else{
    return "You lose! Paper beats Rock";
  }
  }
  else if (playerSelection === "paper"){
    if (computerSelection === "rock"){
      return "You win! Paper beats Rock";
  }
  else{
    return "You lose! Scissors beats Paper";
  }
  }else if (playerSelection === "scissors"){
    if (computerSelection === "paper"){
      return "You win! Scissors beats Paper";
  }
  else{
    return "You lose! Rock beats Scissors";
  }
  }
  else{
    return "Invalid input. Please enter Rock, Paper, or Scissors.";
  }
  }

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let playerChoice = prompt('Enter your choice (rock, paper, or scissors):');
      let result = playRound(playerChoice, getComputerChoice());
      console.log(result);
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You won! Your score: ${playerScore}, Computer score: ${computerScore}`);
    } else if (playerScore < computerScore) {
      console.log(`You lost. Your score: ${playerScore}, Computer score: ${computerScore}`);
    } else {
      console.log(`It's a tie! Your score: ${playerScore}, Computer score: ${computerScore}`);
    }
  }
  