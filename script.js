function getComputerChoice()
{
  let randomComputerChoice = Math.floor(Math.random() * 3) + 1;
  if(randomComputerChoice === 1)
  {
    return "Rock";
  }
  else if(randomComputerChoice === 2)
  {
    return "Paper";
  }
  else if(randomComputerChoice === 3)
  {
    return "Scissors";
  }
}

//Using arrow fucntion
let playSingleRound = (playerSelection, computerSelection) => {
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
  {
    console.log("Tied Game!");
    return -1;
  }
  else if(playerSelection.toLowerCase() === "rock")
  {
    if(computerSelection.toLowerCase() === "paper")
    {
      console.log("You Lose! Paper beats Rock");
      return 0;
    }
    else if(computerSelection.toLowerCase() === "scissors")
    {
      console.log("You Win! Rock beats Scissors");
      return 1;
    }
  }
  else if(playerSelection.toLowerCase() === "paper")
  {
    if(computerSelection.toLowerCase() === "rock")
    {
      console.log("You Win! Paper beats Rock");
      return 1;
    }
    else if(computerSelection.toLowerCase() === "scissors")
    {
      console.log("You Lose! Scissors beats Paper");
      return 0;
    }
  }
  else if(playerSelection.toLowerCase() === "scissors")
  {
    if(computerSelection.toLowerCase() === "rock")
    {
      console.log("You Lose! Rock beats Scissors");
      return 0;
    }
    else if(computerSelection.toLowerCase() === "paper")
    {
      console.log("You Win! Scissors beats Paper");
      return 1;
    }
  }
};

function game()
{
  let playerScore = 0;
  let computerScore = 0;
  
  for(let i = 0; i < 5; i++)
  {
   const playerSelection = prompt("Rock, Paper, Scissors?");
   const computerSelection = getComputerChoice();
   let winner = playSingleRound(playerSelection, computerSelection);
   if(winner === 1)
   {
     playerScore++;
   }
   else if(winner === 0)
   {
     computerScore++;
   }
   
  }
  console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

  if(playerScore === computerScore)
  {
    console.log("Tied Game!")
  }
  else if(playerScore > computerScore)
  {
    console.log("Player Wins!");
  }
  else
  {
    console.log("Computer Wins!")
  }
}
game()



//Only problem I am having is that the prompt executes the text box back to back. I would like to see if the player won/lost then be ask for their next choice. Not sure if I can do that at this moment. 