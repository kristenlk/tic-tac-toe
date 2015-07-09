// Write these methods:
// * checks if the game is over
// * checks if there is a winner
// * make move
// * change turn
// * add piece to board


$(document).ready(function() {

  var currentPlayer;
  var userPlayer;
  var computerPlayer;
  var gameCount = 0;
  var originalPrompt = $('#prompt').html();
  var moveCount = 0;
  var userWins = 0;
  var computerWins = 0;
  var ties = 0;
  var $cell = $('#board').find('div')


  var randomBeginner = function(){
    var randomNumber = Math.random();
    if (randomNumber < 0.5) {
      currentPlayer = userPlayer;
      console.log("Current player: " + currentPlayer + ", userPlayer : " + userPlayer + ", computerPlayer: " + computerPlayer + ", randomNumber: " + randomNumber);
      if (gameCount === 0) {
        $('#prompt').append(' Each game, we\'ll randomly choose either you or the computer to go first. For this round, you\'re first! Select a box to make your first move.');
      } else if (gameCount > 0) {
        $('#prompt').html('You\'re first this time! Remember, you\'re ' + userPlayer + '. Select a box to make your first move.')
      }
    } else {
      currentPlayer = computerPlayer;
      console.log("Current player: " + currentPlayer + ", userPlayer : " + userPlayer + ", computerPlayer: " + computerPlayer + ", randomNumber: " + randomNumber);
      if (gameCount === 0) {
        $('#prompt').append(' Each game, we\'ll randomly choose either you or the computer to go first. For this round, the computer will go first.');
      } else if (gameCount > 0) {
        $('#prompt').html('Computer is first this time. Remember, you\'re ' + userPlayer + '. Wait for the computer to make its move.')
      }
    }
  };


  var winsDiagonal = function(){
    var won;
    if (($('#0').html() === currentPlayer &&
         $('#4').html() === currentPlayer &&
         $('#8').html() === currentPlayer) || (
         $('#2').html() === currentPlayer &&
         $('#4').html() === currentPlayer &&
         $('#6').html() === currentPlayer)) {
      won = true;
    } else {
      won = false;
    }
    return won;
  };


  var winsHorizontal = function(){
    var won;
    if (($('#0').html() === currentPlayer &&
         $('#1').html() === currentPlayer &&
         $('#2').html() === currentPlayer) || (
         $('#3').html() === currentPlayer &&
         $('#4').html() === currentPlayer &&
         $('#5').html() === currentPlayer) || (
         $('#6').html() === currentPlayer &&
         $('#7').html() === currentPlayer &&
         $('#8').html() === currentPlayer )){
      won = true;
    } else {
      won = false;
    }
    return won;
  };


  var winsVertical = function(){
    var won;
    if (($('#0').html() === currentPlayer &&
         $('#3').html() === currentPlayer &&
         $('#6').html() === currentPlayer) || (
         $('#1').html() === currentPlayer &&
         $('#4').html() === currentPlayer &&
         $('#7').html() === currentPlayer) || (
         $('#2').html() === currentPlayer &&
         $('#5').html() === currentPlayer &&
         $('#8').html() === currentPlayer )) {
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


  var countsPlays = function(){
    if (checkIfTie()) {
      ties++;
      $('#ties').html('Ties: ' + ties);
    } else if (currentPlayer === userPlayer) {
      userWins++;
      $('#user-wins').html('You: ' + userWins);
    } else if (currentPlayer === computerPlayer) {
      computerWins++;
      $('#computer-wins').html('Computer: ' + computerWins);
    }
  };


  var switchPlayer = function(){
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    return currentPlayer;
  }


  var clearBoard = function(){
    $cell.text('');
  };


  var choiceSelection = function(){
    if (this.id === 'X') {
      userPlayer = 'X';
      computerPlayer = 'O';
      $('#prompt').html('You\'re X.');
    } else if (this.id === 'O') {
      userPlayer = 'O';
      computerPlayer = 'X';
      $('#prompt').html('You\'re O.');
    }
    randomBeginner();
    makeMove();
  };


  var newGame = function(){
    $(this).hide();
    $('#welcome').hide();
    clearBoard();
    moveCount = 0;
    if (gameCount === 0) {
      $('#prompt').show();
      $('#prompt').html(originalPrompt);
      $('.player-choice').on('click', choiceSelection);
    } else if (gameCount > 0) {
      $('#prompt').show();
      randomBeginner();
      makeMove();
    }
  };

  $('#new-game-button').on('click', newGame);

  var makeMove = function(){
    $cell.on('click', function() {
      var selectedCellID = $(this).attr('id');
      moveCount++;
      console.log(moveCount);
      if (!($(this).is(':empty'))) {
        $('#prompt').html('Can\'t go there!');
        moveCount--;
      } else {
        $(this).html(currentPlayer);
        pushToArray(currentPlayer, selectedCellID);
        if (checkIfWinner()) {
          $('#prompt').html(currentPlayer + ' won! Game over!');
          gameOver();
          countsPlays();
        } else if (!checkIfWinner() && checkIfTie()) {
          $('#prompt').html('Tie! Game over!');
          gameOver();
          countsPlays();
        } else if (!checkIfWinner() && !checkIfTie()) {
          switchPlayer();
          $('#prompt').html(currentPlayer + '\'s turn.');
        }
      }
    });
  };

  var boardArray = ['', '', '', '', '', '', '', '', ''];

  var pushToArray = function(player, cell){
    boardArray.splice((cell - 1), 0, player);
    console.log(boardArray);
  };

  // If TWO out of three cells in 1-3, 4-6, 7-9, 1-4-7, 2-5-8, 3-6-9, 1-5-9, 3-5-7 are occupied by two of the same player (either by player or by computer), computer should go in that third cell. If two of any of those cell combos AREN'T occupied (i.e. if only one of them is), the computer should go into the middle cell. If the middle cell is already occupied, and any of the cell combos just have the computerPlayer in one of the cells, go into a corresponding corner cell.

  // call the game logic stuff from the UI stuff. Don't make game logic depend on UI
  // call the game logic file first in the HTML file
  // define an object, give it all of the methods that we want to be public

});




// THINGS I NEED TO FIGURE OUT ON WED:

// 1. DONE: Make the new game button appear when the gameOver function fires.

// 2. DONE: Make it so the gameOver function fires when the whole board is full.

// 3. DONE: If a user clicks on a div that already has been filled, display an error message.

// 4. Make the computer intelligently choose a spot on the board.

// 5. DONE: Get array coordinates to append to an array when they're filled.

// 6. DONE: Keep track of games won / tied in the pink div.

// 7. DONE: Make numbers stop appearing in divs without everything getting thrown off.

// 8. DONE: Make the new New Game button work.

// 9. DONE: Create a "clear board" function that is invoked when a new game begins.

// 10. DONE: Fix bug where letters are appearing when you double-click on a div prior to choosing a letter.

// 11. DONE: Don't ask if the user wants to be X or O EVERY time they play a new game - only the first time.

// 12. DONE: Make it so user 1 doesn't automatically go first - add random function


// OTHER THINGS:

// AJAX stuff
// Styling: Bootstrap, addClass (when you try to click on an occupied div, outline winning combos)
// Separation of concerns
// Browserify
// Create a save game button, log in / log out button, etc.
// Create a setup overlay (X or O, number of games, play against computer or someone else)
// Wait times (a couple seconds when the computer is thinking about where to go), fade-ins?
// What do my functions return?
// Create readme file
// Deploy to GitHub / GitHub Pages
// Create wireframes / user stories


// THURSDAY:

// 1. Make the computer intelligently choose a spot on the board.
// 2. Code cleanup / separation of concerns / Browserify / what do my functions return?
// 3. Get array coordinates to append to an array when they're filled / AJAX stuff
// 4. Styling: Bootstrap, addClass


// Game Object
/// - method: new game
/// - method: add moves
/// - method: check winner
/// - game board
/// - which player is this?

// everything that's html related (jquery, things that interact with the front end) should be separated. Essentially, you should be able to play this game via the command line.



// game logic: (none of these depend on the browser)
// keep track of board, make player moves, check for a winner, reset the game, keep a scoreboard

// UI:
// responding to clicks, updating the browser, sharing information with the user, overall look and feel of the page
