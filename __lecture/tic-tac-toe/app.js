// The HTML elements that we need for the game
const board = document.querySelector("#board");
const player1 = document.querySelector(".js-player-1");
const player2 = document.querySelector(".js-player-2");
const endMessageDiv = document.querySelector(".js-end-message");
const restartBtn = document.querySelector(".restart");
// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Game Settings
const PLAYER_1_ICON = "X";
const PLAYER_2_ICON = "O";
let COUNTER = 0; // track game progress
// game starts with player 1
let currentPlayer = "1";
player1.classList.add("active");
const handleRestart = () => {
  // reload the page
  // feels like cheating but it WILL reset the game
  location.reload();
};
const toggleRestartBtn = () => {
  restartBtn.disabled = false;
  restartBtn.addEventListener("click", handleRestart);
  // enable the restart btn
  // disabled = false
  //call handleRestart
};
const win = () => {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
  toggleRestartBtn();
  if (currentPlayer === "1") {
    //this sucks i will remove
    currentPlayer = "2";
    player2.classList.toggle("active");
    player1.classList.toggle("active");
  } else {
    currentPlayer = "1";
    player2.classList.toggle("active");
    player1.classList.toggle("active");
  }
  board.removeEventListener("click", handleClick);
  endMessageDiv.innerText = `Player ${currentPlayer} wins!`;
};
const verifyWin = () => {
  if (game[0] === "X" && game[1] === "X" && game[2] === "X") {
    console.log("win x");
    win();
  } else if (game[3] === "X" && game[4] === "X" && game[5] === "X") {
    console.log("win x");
    win();
  } else if (game[6] === "X" && game[7] === "X" && game[8] === "X") {
    console.log("win x");
    win();
  } else if (game[0] === "X" && game[3] === "X" && game[6] === "X") {
    console.log("win x");
    win();
  } else if (game[1] === "X" && game[4] === "X" && game[7] === "X") {
    console.log("win x");
    win();
  } else if (game[2] === "X" && game[5] === "X" && game[8] === "X") {
    console.log("win x");
    win();
  } else if (game[0] === "X" && game[4] === "X" && game[8] === "X") {
    console.log("win x");
    win();
  } else if (game[2] === "X" && game[4] === "X" && game[6] === "X") {
    console.log("win x");
    win();
  } else if (game[0] === "O" && game[1] === "O" && game[2] === "O") {
    win();
    console.log("win o");
  } else if (game[3] === "O" && game[4] === "O" && game[5] === "O") {
    win();
    console.log("win o");
  } else if (game[6] === "O" && game[7] === "O" && game[8] === "O") {
    win();
    console.log("win o");
  } else if (game[0] === "O" && game[3] === "O" && game[6] === "O") {
    win();
    console.log("win o");
  } else if (game[1] === "O" && game[4] === "O" && game[7] === "O") {
    win();
    console.log("win o");
  } else if (game[2] === "O" && game[5] === "O" && game[8] === "O") {
    win();
    console.log("win o");
  } else if (game[0] === "O" && game[4] === "O" && game[8] === "O") {
    win();
    console.log("win o");
  } else if (game[2] === "O" && game[4] === "O" && game[6] === "O") {
    win();
    console.log("win o");
  } else {
    // game.every()
    // }
    // endMessageDiv.innerText = "Draw!";
};
const togglePlayer = () => {
  if (currentPlayer === "1") {
    currentPlayer = "2";
    player2.classList.toggle("active");
    player1.classList.toggle("active");
  } else {
    currentPlayer = "1";
    player2.classList.toggle("active");
    player1.classList.toggle("active");
  }
};
const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === "1" ? PLAYER_1_ICON : PLAYER_2_ICON;
  togglePlayer();
  if (typeof game[cellId] === "number") {
    currentCellDiv.innerText = icon;
    console.log(cellId);
    game[cellId] = icon;
    console.log(game);
    // so much missing here...
  }
  verifyWin();
};
board.addEventListener("click", handleClick);