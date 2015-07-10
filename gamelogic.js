//var Game = (function(){

  // var _currentPlayer; etc.

var currentPlayer;
var userPlayer;
var computerPlayer;
var gameCount = 0;
var moveCount = 0;
var userWins = 0;
var computerWins = 0;
var ties = 0;

//

var board = ['', '', '', '', '', '', '', '', ''];


var addToBoard = function(player, cell){
  board[cell] = player;
  console.log(board);
};

//

var winsDiagonal = function(player){
  var won;
  if ((board[0] === player &&
       board[4] === player &&
       board[8] === player) ||
      (board[2] === player &&
       board[4] === player &&
       board[6] === player)) {
    won = true;
  } else {
    won = false;
  }
  return won;
};


var winsHorizontal = function(player){
  var won;
  if ((board[0] === player &&
       board[1] === player &&
       board[2] === player) ||
      (board[3] === player &&
       board[4] === player &&
       board[5] === player) ||
      (board[6] === player &&
       board[7] === player &&
       board[8] === player )){
    won = true;
  } else {
    won = false;
  }
  return won;
};


var winsVertical = function(player){
  var won;
  if ((board[0] === player &&
       board[3] === player &&
       board[6] === player) ||
      (board[1] === player &&
       board[4] === player &&
       board[7] === player) ||
      (board[2] === player &&
       board[5] === player &&
       board[8] === player )) {
    won = true;
  } else {
    won = false;
  }
  return won;
};


//


var isWinner = function(player){
  return (winsDiagonal(player) === true) || (
       winsHorizontal(player) === true) || (
       winsVertical(player) === true);
};


// make sure to test this - this function depends on moveCount
var isTie = function(){
  return moveCount === 9 && !isWinner('X') && !isWinner('O');
};


//


var isGameOver = function(){
  return isWinner('X') || isWinner('O') || isTie();
}


//


var isValidMove = function(index){
  return board[index] === '';
}


var setRandomBeginner = function(){
  var randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber < 0.5) {
    currentPlayer = userPlayer;
  } else {
    currentPlayer = computerPlayer;
  }
  return currentPlayer;
};


// var setRandomBeginner = function(){
//   var randomNumber = Math.random();
//   console.log(randomNumber);
//   if (randomNumber < 0.5) {
//     _currentPlayer = _userPlayer;
//   } else {
//     _currentPlayer = _computerPlayer;
//   }
//   return _currentPlayer;
// };
// etc...


//
var setPlayers = function(playerOne, playerTwo) {
  userPlayer = playerOne;
  computerPlayer = playerTwo;
}


var switchPlayer = function(){
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
  return currentPlayer;
}

// var _countsPlays()

var countsPlays = function(){
  if (isTie()) {
    ties++;
  } else if (currentPlayer === userPlayer) {
    userWins++;
  } else if (currentPlayer === computerPlayer) {
    computerWins++;
  }
}

var resetBoard = function(){
  board = ['', '', '', '', '', '', '', '', ''];
};

//   return {
//     resetBoard: _resetBoard,
//   };

// })();





  // If TWO out of three cells in 1-3, 4-6, 7-9, 1-4-7, 2-5-8, 3-6-9, 1-5-9, 3-5-7 are occupied by two of the same player (either by player or by computer), computer should go in that third cell. If two of any of those cell combos AREN'T occupied (i.e. if only one of them is), the computer should go into the middle cell. If the middle cell is already occupied, and any of the cell combos just have the _computerPlayer in one of the cells, go into a corresponding corner cell.

  // call the game logic stuff from the UI stuff. Don't make game logic depend on UI
  // call the game logic file first in the HTML file
  // define an object, give it all of the methods that we want to be public
