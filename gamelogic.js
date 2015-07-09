var currentPlayer;
var userPlayer;
var computerPlayer;
var gameCount = 0;
var moveCount = 0;
var userWins = 0;
var computerWins = 0;
var ties = 0;


var board = ['', '', '', '', '', '', '', '', ''];

var winsDiagonal = function(){
  var won;
  if ((board[0] === currentPlayer &&
       board[4] === currentPlayer &&
       board[8] === currentPlayer) ||
      (board[2] === currentPlayer &&
       board[4] === currentPlayer &&
       board[6] === currentPlayer)) {
    won = true;
  } else {
    won = false;
  }
  return won;
};


var winsHorizontal = function(){
  var won;
  if ((board[0] === currentPlayer &&
       board[1] === currentPlayer &&
       board[2] === currentPlayer) ||
      (board[3] === currentPlayer &&
       board[4] === currentPlayer &&
       board[5] === currentPlayer) ||
      (board[6] === currentPlayer &&
       board[7] === currentPlayer &&
       board[8] === currentPlayer )){
    won = true;
  } else {
    won = false;
  }
  return won;
};


var winsVertical = function(){
  var won;
  if ((board[1] === currentPlayer &&
       board[4] === currentPlayer &&
       board[7] === currentPlayer) ||
      (board[2] === currentPlayer &&
       board[5] === currentPlayer &&
       board[8] === currentPlayer) ||
      (board[3] === currentPlayer &&
       board[6] === currentPlayer &&
       board[9] === currentPlayer )) {
    won = true;
  } else {
    won = false;
  }
  return won;
};


var checkIfWinner = function(){
  if ((winsDiagonal() === true) || (
       winsHorizontal() === true) || (
       winsVertical() === true)) {
    var winner = currentPlayer;
    console.log(winner);
  }
  return winner;
};


var checkIfTie = function(){
  if ((moveCount === 9) && (!checkIfWinner())) {
    return true;
  } else {
    return false;
  }
};


var gameOver = function(){
  $cell.off('click');
  $('#new-game-button').show();
  gameCount++;
  console.log('gameCount: ' + gameCount);
}

var setRandomBeginner = function(){
  var randomNumber = Math.random();
  if (randomNumber < 0.5) {
    currentPlayer = userPlayer;
  } else {
    currentPlayer = computerPlayer;
  }
  return currentPlayer;
};
