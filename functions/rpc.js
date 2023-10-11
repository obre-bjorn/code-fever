// #1
const getUserChoice = (userInput) => {
  // #2
  userInput = userInput.toLowerCase();

  // #3
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid choice! Please choose rock, paper, or scissors.');
  }
};

// #5
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// #7
const determineWinner = (userChoice, computerChoice) => {
  // #8 - Check for tie
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  // #9 - Check for user winning
  if (userChoice === 'rock') {
    return computerChoice === 'paper' ? 'Computer wins!' : 'You win!';
  } else if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? 'Computer wins!' : 'You win!';
  } else if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? 'Computer wins!' : 'You win!';
  }

  // #14 - Secret "bomb" cheat code
  if (userChoice === 'bomb') {
    return 'You win with a bomb!';
  }
};

// #12
const playGame = () => {
  const userChoice = getUserChoice('rock'); // Replace 'rock' with user input
  const computerChoice = getComputerChoice();
  console.log(`User's choice: ${userChoice}`);
  console.log(`Computer's choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

// #13
playGame();
