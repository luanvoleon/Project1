var numOfWin = 0;
var numOfLoss = 0;
var currentMode = `Please input your name.`;
var userName = ``;
var gameMode = `normal`;

//Using the dice roll function from previous exercises with the names intact because I'm too lazy to change them
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return 1;
};

var main = function (input) {
  if (currentMode == `Please input your name.`) {
    userName = input;
    currentMode = `stone paper scissors`;
    return `Hello ${userName}! You can play stone paper scissors by typing in any one of them.`;
  } else if (currentMode == `stone paper scissors`) {
    return stonePaperScissors(userName, input);
  }
};

var stonePaperScissors = function (userName, userGuess) {
  var myOutputValue = ``;
  var diceNumbers = diceRoll();
  //Assigning numbers to stone, paper and scissors. I'm using diceNumbers (with an s) because I'm too lazy to think of another name and replace them all
  var stone = diceNumbers == 1;
  var paper = diceNumbers == 2;
  var scissors = diceNumbers == 3;
  var computerHand = ``;
  if (diceNumbers == 1) {
    computerHand = `stone`;
  }
  if (diceNumbers == 2) {
    computerHand = `paper`;
  }
  if (diceNumbers == 3) {
    computerHand = `scissors`;
  }

  //Reversed mode activator
  if (userGuess == `reversed`) {
    gameMode = `reversed mode`;
    console.log(`reversed mode`);
    return `Now entering reversed mode. Please type "reversed" before stone, paper or scissors to play.`;
  } else if (gameMode == `reversed mode`) {
    return reversedGame(userName, userGuess);
  }

  //Main game
  if (isNaN(Number(userGuess)) == false) {
    console.log(`Wrong type`);
    myOutputValue = `Typed in a number! Please type in stone, paper or scissors!`;
    return myOutputValue;
  }
  if (isNaN(Number(userGuess)) == true) {
    if (
      userGuess != `stone` &&
      userGuess != `paper` &&
      userGuess != `scissors`
    ) {
      console.log(`wrong word`);
      myOutputValue = `Please enter stone, paper or scissors!`;
      return myOutputValue;
    } else if (userGuess == `stone` && diceNumbers == 1) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, draw`);
      myOutputValue = `The computer chose ${computerHand}! 🗿 <br> You chose ${userGuess}! 🗿<br><br> Draw!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `stone` && diceNumbers == 2) {
      console.log(
        `rolled ${computerHand}, user typed in ${userGuess}, user loses`
      );
      numOfLoss += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗒 <br> You chose ${userGuess}! 🗿<br><br> You lose! Bummer.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `stone` && diceNumbers == 3) {
      console.log(
        `rolled ${computerHand}, user typed in ${userGuess}, user wins`
      );
      numOfWin += 1;
      myOutputValue = `The computer chose ${computerHand}! ✂️ <br> You chose ${userGuess}! 🗿<br><br> You win!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `paper` && diceNumbers == 1) {
      console.log(
        `rolled ${computerHand}, user typed in ${userGuess}, user wins`
      );
      numOfWin += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗿 <br> You chose ${userGuess}! 🗒<br><br> You win!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `paper` && diceNumbers == 2) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, draw`);
      myOutputValue = `The computer chose ${computerHand}! 🗒 <br> You chose ${userGuess}! 🗒<br><br> Draw!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `paper` && diceNumbers == 3) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, lose`);
      numOfLoss += 1;
      myOutputValue = `The computer chose ${computerHand}! ✂️ <br> You chose ${userGuess}! 🗒<br><br> You lose! Bummer.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `scissors` && diceNumbers == 1) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, lose`);
      numOfLoss += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗿 <br> You chose ${userGuess}! ✂️<br><br> You lose! Bummer.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `scissors` && diceNumbers == 2) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, win`);
      numOfWin += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗒 <br> You chose ${userGuess}! ✂️<br><br> You win!.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `scissors` && diceNumbers == 3) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, draw`);
      myOutputValue = `The computer chose ${computerHand}! ✂️ <br> You chose ${userGuess}! ✂️<br><br> Draw!.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
  }
};

//The reversed game
var reversedGame = function (userName, userGuess) {
  var myOutputValue = ``;
  var diceNumbers = diceRoll();
  //Assigning numbers to stone, paper and scissors. I'm using diceNumbers (with an s) because I'm too lazy to think of another name and replace them all
  var stone = diceNumbers == 1;
  var paper = diceNumbers == 2;
  var scissors = diceNumbers == 3;
  var computerHand = ``;
  if (diceNumbers == 1) {
    computerHand = `stone`;
  }
  if (diceNumbers == 2) {
    computerHand = `paper`;
  }
  if (diceNumbers == 3) {
    computerHand = `scissors`;
  }
  //Return game mode to normal if the user chooses so
  if (userGuess == `normal`) {
    gameMode = `normal`;
    console.log(`normal mode`);
    return `Now entering normal mode. Please type stone, paper or scissors to play.`;
  } else if (gameMode == `normal`) {
    return stonePaperScissors(userName, userGuess);
  }

  //The game (reversed)
  if (isNaN(Number(userGuess)) == false) {
    console.log(`Wrong type`);
    myOutputValue = `Typed in a number! Please type in stone, paper or scissors!`;
    return myOutputValue;
  }
  if (isNaN(Number(userGuess)) == true) {
    if (
      userGuess != `reversed stone` &&
      userGuess != `reversed paper` &&
      userGuess != `reversed scissors`
    ) {
      console.log(`wrong word`);
      myOutputValue = `Please enter reversed stone, reversed paper or reversed scissors!`;
      return myOutputValue;
    } else if (userGuess == `reversed stone` && diceNumbers == 1) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, draw`);
      myOutputValue = `The computer chose ${computerHand}! 🗿 <br> You chose ${userGuess}! 🗿<br><br> Draw!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed stone` && diceNumbers == 2) {
      console.log(
        `rolled ${computerHand}, user typed in ${userGuess}, user wins`
      );
      numOfWin += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗒 <br> You chose ${userGuess}! 🗿<br><br> You win!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed stone` && diceNumbers == 3) {
      console.log(
        `rolled ${computerHand}, user typed in ${userGuess}, user loses`
      );
      numOfLoss += 1;
      myOutputValue = `The computer chose ${computerHand}! ✂️ <br> You chose ${userGuess}! 🗿<br><br> You lose! Bummer.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed paper` && diceNumbers == 1) {
      console.log(
        `rolled ${computerHand}, user typed in ${userGuess}, user loses`
      );
      numOfLoss += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗿 <br> You chose ${userGuess}! 🗒<br><br> You lose! Bummer<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed paper` && diceNumbers == 2) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, draw`);
      myOutputValue = `The computer chose ${computerHand}! 🗒 <br> You chose ${userGuess}! 🗒<br><br> Draw!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed paper` && diceNumbers == 3) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, win`);
      numOfWin += 1;
      myOutputValue = `The computer chose ${computerHand}! ✂️ <br> You chose ${userGuess}! 🗒<br><br> You win!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed scissors` && diceNumbers == 1) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, win`);
      numOfWin += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗿 <br> You chose ${userGuess}! ✂️<br><br> You win!<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed scissors` && diceNumbers == 2) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, lose`);
      numOfLoss += 1;
      myOutputValue = `The computer chose ${computerHand}! 🗒 <br> You chose ${userGuess}! ✂️<br><br> You lose! Bummer.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
    if (userGuess == `reversed scissors` && diceNumbers == 3) {
      console.log(`rolled ${computerHand}, user typed in ${userGuess}, draw`);
      myOutputValue = `The computer chose ${computerHand}! ✂️ <br> You chose ${userGuess}! ✂️<br><br> Draw!.<br><br> So far, ${userName}, you've won ${numOfWin} rounds, and lost ${numOfLoss} rounds.<br><br> Now you can type "reversed" before "scissors, "paper" or "stone" to play another round!`;
      return myOutputValue;
    }
  }
};
