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

// Write these methods:
// * checks if the game is over
// * checks if there is a winner
// * make move
// * change turn
// * add piece to board


$(document).ready(function() {
  var $tiles = $('#board').find('div');


  //  var array = [];

  var currentPlayer;
  //$('#prompt').html('Welcome to Tic-Tac-Toe!');

  var originalPrompt = $('#prompt').html();

  var newGame = function(){
    $(this).hide();
    $('#welcome').hide();
    clearBoard();
    moveCount = 0;
    $('#prompt').show();
    $('#prompt').html(originalPrompt);
    // Reset the board! Should probably be a function.
    $('.player-choice').on('click', choiceSelection);
    // return currentPlayer;
  };

  $('#new-game-button').on('click', newGame);

  var choiceSelection = function(){
    if (this.id === 'X') {
      //alert('X was clicked');
      currentPlayer = 'X';
      $('#prompt').html('You\'re X. Select a box to make your first move.');
    } else if (this.id === 'O') {
      currentPlayer = 'O';
      $('#prompt').html('You\'re O. Select a box to make your first move.');
    }
    makeMove();
  };

  var clearBoard = function(){
    $('#board').find('div').text('');
  };

  // when should my functions take in arguments?
  var moveCount = 0;

  var checkIfTie = function(){
    if (moveCount === 9) {
      return true;
      console.log('tie');
    } else {
      return false;
    }
  };


  var makeMove = function(){
    $('#board').find('div').on('click', function() {
      moveCount++;
      console.log(moveCount);
      if (!($(this).is(':empty'))) {
        $('#prompt').html('Can\'t go there!');
      } else {
        $(this).html(currentPlayer);
        if (checkIfWinner()) {
          $('#prompt').html(currentPlayer + ' won! Game over!');
          gameOver();
        } else if (!checkIfWinner() && checkIfTie()) {
          $('#prompt').html('Tie! Game over!');
          gameOver();
        } else if (!checkIfWinner() && !checkIfTie()) {
          switchPlayer();
          $('#prompt').html(currentPlayer + '\'s turn.');
        }
      }
    });
  };


  var switchPlayer = function(){
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    return currentPlayer;
  }

  var winsDiagonal = function(){
    var won;
    if (($('#one').html() === currentPlayer && $('#five').html() === currentPlayer && $('#nine').html() === currentPlayer) || ($('#three').html() === currentPlayer && $('#five').html() === currentPlayer && $('#seven').html() === currentPlayer)) {
      //$('#prompt').html(currentPlayer + ' won!');
      won = true;
    } else {
      won = false;
    }
    return won;
  };

  var winsHorizontal = function(){
    var won;
    if (($('#one').html() === currentPlayer && $('#two').html() === currentPlayer && $('#three').html() === currentPlayer) || ($('#four').html() === currentPlayer && $('#five').html() === currentPlayer && $('#six').html() === currentPlayer) || ($('#seven').html() === currentPlayer && $('#eight').html() === currentPlayer && $('#nine').html() === currentPlayer )){
      //$('#prompt').html(currentPlayer + ' won!');
      won = true;
    } else {
      won = false;
    }
    return won;
  };

  var winsVertical = function(){
    var won;
    if (($('#one').html() === currentPlayer && $('#four').html() === currentPlayer && $('#seven').html() === currentPlayer) || ($('#two').html() === currentPlayer && $('#five').html() === currentPlayer && $('#eight').html() === currentPlayer) || ($('#three').html() === currentPlayer && $('#six').html() === currentPlayer && $('#nine').html() === currentPlayer )) {
      //$('#prompt').html(currentPlayer + ' won!');
      won = true;
    } else {
      won = false;
    }
    return won;
  };

  var checkIfWinner = function(){
    if ((winsDiagonal() === true) || (winsHorizontal() === true) || (winsVertical() === true)) {
      var winner = currentPlayer;
      console.log(winner);
    }
    return winner;
  };




  var gameOver = function(){
    // $('#prompt').html(currentPlayer + ' won! Game over!');
    $('#board').find($('div')).off('click');
    $('#new-game-button').show();
  }



// THINGS I NEED TO FIGURE OUT ON WED:

// 1. DONE: Make the new game button appear when the gameOver function fires.

// 2. DONE: Make it so the gameOver function fires when the whole board is full.

// 3. DONE: If a user clicks on a div that already has been filled, display an error message.

// 4. Make the computer randomly choose a spot on the board.

// 5. Get array coordinates to append to an array when they're filled.

// 6. Make it so a person can play to a certain number of games (5, etc.) and that is kept track of in the pink div.

// 7. DONE: Make numbers stop appearing in divs without everything getting thrown off.

// 8. DONE: Make the new New Game button work.

// 9. DONE: Create a "clear board" function that is invoked when a new game begins.

// 10. DONE: Fix bug where letters are appearing when you double-click on a div prior to choosing a letter.

// OTHER THINGS:

// AJAX stuff
// Styling: bootstrap, addClass (when you try to click on an occupied div, outline winning combos)
// Separation of concerns
// Browserify
// Create a save game button, log in / log out button, etc.
// Create a setup overlay (X or O, number of games, play against computer or someone else)
// Wait times (a couple seconds when the computer is thinking about where to go), fade-ins?
// What do my functions return?


/*    JSON.parse(grungeAlbumsJSON).albums.forEach(function(album){
    $("#albums").append(albumTemplate(album));
});

// look at the jquery docs for .off() to solve this problem
  //   $('#div').each(function(){
  //     $('#div').prop('readonly', '1')
  //   });
  // }


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


// Game Object
/// - method: new game
/// - method: add moves
/// - method: check winner
/// - game board
/// - which player is this?

// everything that's html related (jquery, things that interact with the front end) should be separated. Essentially, you should be able to play this game via the command line.
