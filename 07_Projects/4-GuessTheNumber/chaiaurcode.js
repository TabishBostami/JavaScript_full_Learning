let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const reamaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validate the guess number here it is corrtect or not
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter number greater than 0");
  } else if (guess > 100) {
    alert("enter number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game over Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check guess is higher or lower or equal
  if (guess === randomNumber) {
    displayMessage(`you guess is right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`you guess is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`you guess is too high`);
  }
}

function displayGuess(guess) {
  //display last guesses list and clean the text field
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  reamaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //print message according to guess
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  //to start a new game
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    reamaining.innerHTML = `${(11 - numGuess)}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  //to finish the game
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;

  newGame();
}
