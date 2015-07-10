$(document).ready(function() {

  var $cell = $('#board').find('div');
  var originalPrompt = $('#prompt').html();
  $('#prompt').hide();

  var newGame = function(){
    $(this).hide();
    // $('#welcome').hide();
    clearBoard();
    moveCount = 0; // Game.newGame();
    if (gameCount === 0) {
      $('#prompt').show();
      $('#prompt').html(originalPrompt);
      // $('.player-choice').on('click', choiceSelection);
      $('[name="player-choice"]').on('click', choiceSelection);
    } else if (gameCount > 0) {
      $('#prompt').show();
      // $('#prompt').css('display', 'table-cell');
      // $('#prompt').css('vertical-align', 'middle');
      setRandomBeginnerUI();
      makeMove();
    }
  };

  $('#new-game-button').on('click', newGame);

  // this stuff was originally in the isGameOver function, which is set in gamelogic.js.
  var isGameOverUI = function(){
    $cell.off('click');
    $('#new-game-button').show();
    gameCount++;
    console.log('gameCount: ' + gameCount);
    isGameOver();
  };

  var setRandomBeginnerUI = function(){
    if (setRandomBeginner() === userPlayer) {
      if (gameCount === 0) {
        $('#prompt').append(' Each game, we\'ll randomly choose either you or the computer to go first. For this round, you\'re first! Select a box to make your first move.');
      } else if (gameCount > 0) {
        $('#prompt').html('You\'re first this time! Remember, you\'re ' + userPlayer + '. Select a box to make your first move.')
      }
    } else {
      if (gameCount === 0) {
        $('#prompt').append(' Each game, we\'ll randomly choose either you or the computer to go first. For this round, the computer will go first.');
      } else if (gameCount > 0) {
        $('#prompt').html('Computer is first this time. Remember, you\'re ' + userPlayer + '. Wait for the computer to make its move.')
      }
    }
  };


  var clearBoard = function(){
    $cell.text('');
    resetBoard();
  };






// corresponds with countsPlays()
// wasn't working when I tested it in codepen but not sure if it's broken or not. Should countsPlays() return something, and updatesScoreboard should work off of it? Perhaps number of ties / wins, and then compare it against last number to see if it incremented?
  var updatesScoreboard = function(){
    countsPlays();
    $('#ties').html('Ties: ' + ties);
    $('#user-wins').html('You: ' + userWins);
    $('#computer-wins').html('Computer: ' + computerWins);
  };




  var choiceSelection = function(){
    if (this.id === 'X') {
      setPlayers('X', 'O');
      $('#prompt').html('You\'re X.');
    } else if (this.id === 'O') {
      setPlayers("O","X");
      $('#prompt').html('You\'re O.');
    }
    setRandomBeginnerUI();
    makeMove();
  };


//

  // var makeMove = function(){
  //   $cell.on('click', function() {
  //     var selectedCellID = $(this).attr('id');
  //     moveCount++;
  //     console.log(moveCount);

  // if a cell is empty, say you can't go there.

  //     if (!($(this).is(':empty'))) {
  //       $('#prompt').html('Can\'t go there!');
  //       moveCount--;
  //     } else {
  //       $(this).html(currentPlayer);
  //       pushToArray(currentPlayer, selectedCellID);
  //       if (checkIfWinner()) {
  //         $('#prompt').html(currentPlayer + ' won! Game over!');
  //         gameOver();
  //         countsPlays();
  //       } else if (!checkIfWinner() && checkIfTie()) {
  //         $('#prompt').html('Tie! Game over!');
  //         gameOver();
  //         countsPlays();
  //       } else if (!checkIfWinner() && !checkIfTie()) {
  //         switchPlayer();
  //         $('#prompt').html(currentPlayer + '\'s turn.');
  //       }
  //     }
  //   });
  // };



//

  var makeMove = function(){
    $cell.on('click', function() {
      var selectedCellID = Number($(this).attr('id'));
      if (isValidMove(selectedCellID)) {
        moveCount++;
        $(this).html(currentPlayer);
        addToBoard(currentPlayer, selectedCellID);
        if (isGameOver()) {
          if (!isTie()) {
            $('#prompt').html(currentPlayer + ' won! Game over!');
            isGameOverUI();
          } else {
            $('#prompt').html('Tie! Game over!');
            isGameOverUI();
          }
          updatesScoreboard();
        } else {
          switchPlayer();
          $('#prompt').html(currentPlayer + '\'s turn.');
        }
      } else {
        $('#prompt').html('Can\'t go there!');
      }
    });
  };
});
