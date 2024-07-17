// Function to get random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initial variables
let firstCard, secondCard, sum, hasBlackjack, isAlive, message;

// DOM elements
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

// Function to start the game
function startGame() {
  firstCard = 0;
  secondCard = 0;
  sum = 0;
  hasBlackjack = false;
  isAlive = true;
  message = "";

  // Update DOM elements
  cardsEl.textContent = "";
  sumEl.textContent = "";
  messageEl.textContent = "Press 'Draw Card' to start the game.";
}

// Function to draw a new card
function cardsDraw() {
  if (!firstCard && !secondCard) {
    firstCard = getRandomInt(1, 9); // Adjusted range based on your requirements
    secondCard = getRandomInt(1, 9); // Adjusted range based on your requirements
    sum = firstCard + secondCard;

    // Update DOM elements
    cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
    sumEl.textContent = `Sum: ${sum}`;
    messageEl.textContent = "Do you want to draw a new card?";
  } else {
    let newCard = getRandomInt(1, 9); // Adjusted range based on your requirements
    sum += newCard;
    cardsEl.textContent += ` ${newCard}`;
    winCheck();
  }
}

// Function to check win conditions
function winCheck() {
  if (sum <= 20) {
    message = `Your total is ${sum}. Do you want to draw a new card? 🙂`;
  } else if (sum === 21) {
    message = `Your total is ${sum}. You've got Blackjack! 🥳`;
    hasBlackjack = true;
  } else {
    message = `Your total is ${sum}. You're out of the game! 😭`;
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = `Sum: ${sum}`;
}

// Function to reset the game
function playAgain() {
  startGame();
}

// Initialize the game when the page loads
startGame();
