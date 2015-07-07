/* What I need to do:
- I need a tic-tac-toe board with 9 blocks. Eventually, these 9 blocks should line up with the 9 divs I created in my HTML file.
- When the game begins, the player should be asked whether they want to be X or O.

*/

/*var board = [
  [1, 2, 2],//.join('   '),
  [0, 1, 2],//.join('   '),
  [0, 1, 2]//.join('   ')
];

console.log('Let\'s play Tic-Tac-Toe! You\'re X, and the computer is O.');
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);
*/

$(document).ready(function() {

  var currentPlayer;
  //$('#prompt').html('Welcome to Tic-Tac-Toe!');

  var newGame = function(){
    $('button').on('click', function() {
      $(this).remove();
      $('#new-game-prompt').show();
      if (this.id === 'X') {
        //alert('X was clicked');
        currentPlayer = 'X';
        $('#new-game-prompt').html('You\'re X. Select a box to make your first move.');
      } else if (this.id === 'O') {
        currentPlayer = 'O';
        $('#new-game-prompt').html('You\'re O. Select a box to make your first move.');
      }
    });
    return currentPlayer;
  };

  newGame();

// when should my functions take in arguments?

  var makeMove = function() {
    $('#board').find('div').on('click', function() {
      $(this).html(currentPlayer);
      winsDiagonal();
  /*    if (findWinner) {
        gameOver();
      }*/
      // ask when I might want to use .html() vs .text()
      // add class here that designates that the cell has been filled - has different styling etc.
    });
    // what should this function return?
  };

  makeMove();

  var winsDiagonal = function(){
    var won;
    if (($('#one').html() === currentPlayer && $('#five').html() === currentPlayer && $('#nine').html() === currentPlayer) || ($('#three').html() === currentPlayer && $('#five').html() === currentPlayer && $('#seven').html() === currentPlayer)) {
      $('#prompt').html('You won!');
      won = true;
    } else {
      won = false;
    }
    return won;
  };



/*  var findWinner = function(){
    if (winsDiagonal === true) {
      var winner = $('#board').find('div').html();
      console.log(winner)
    }
    return winner;
  };

  findWinner();*/

/*  var gameOver = function(){
    $('#new-game-prompt').html('Game over!');
  } */

/*  var winsHorizontal = function(){

  };

  var winsVertical = function(){

  };*/

/*function xWins() {
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
    return true;
  } else if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
    return true;
  } else if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
    return true;
  } else if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    return true;
  } else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    return true;
  } else if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
    return true;
  } else if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
    return true;
  } else if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
    return true;
  } else {
    return false;
  }
}*/

/*
Try using something like this:

var albumTemplate = function(album){
    return "<li><strong>" + album.name + "</strong> by " + album.artist + "</h4></li><span>Units Sold : " + album.unitsSold + "</span></li>"
}

JSON.parse(grungeAlbumsJSON).albums.forEach(function(album){
    $("#albums").append(albumTemplate(album));
});

*** define a function that takes something in -- doesn't necessarily have to be defined yet (like album above) ***
*/


});

// If user clicks on a div, put an X there.
  // On click,
// If user clicks on a div that already has an X or an O, display error.
