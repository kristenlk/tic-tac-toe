$(document).ready(function() {

  var $cell = $('#board').find('div');
  var $prompt = $('#prompt');;
  var originalPrompt = $prompt.html();
  $prompt.hide();

  var clearBoard = function(){
    $cell.text('');
    Game.resetBoard();
  };

  var setRandomBeginnerUI = function(){
    var firstPlayer = Game.setRandomBeginner();
    if (firstPlayer === Game.playerOne()) {
      if (Game.gameCount() === 0) {
        $prompt.append(' Player 1 has been randomly chosen to go first this round. Player 1, select a box to make your first move.');
      } else if (Game.gameCount() > 0) {
        $prompt.html(' Player 1 has been randomly chosen to go first this round. Player 1, select a box to make your first move.')
      }
    } else {
      if (Game.gameCount() === 0) {
        $prompt.append(' Player 2 has been randomly chosen to go first this round. Player 2, select a box to make your first move.');
      } else if (Game.gameCount() > 0) {
        $prompt.html(' Player 2 has been randomly chosen to go first this round. Player 2, select a box to make your first move.')
      }
    }
  };

  var updatesScoreboard = function(){
    Game.countsPlays();
    $('#ties').html('<strong>Ties: </strong><br>' + Game.ties());
    $('#player1-wins').html('<strong>Player 1: </strong><br>' + Game.playerOneWins());
    $('#player2-wins').html('<strong>Player 2: </strong><br>' + Game.playerTwoWins());
  };

  var makeMove = function(){
    $cell.on('click', function() {
      var selectedCellID = Number($(this).attr('id'));
      console.log('selectedCellID: ' + selectedCellID)
      if (Game.isValidMove(selectedCellID)) {
        Game.incrementMoveCount();
        console.log('moveCount: ' + Game.moveCount());
        $(this).html(Game.currentPlayer());
        // console.log('currentPlayer: ' + Game.currentPlayer);
        Game.addToBoard(Game.currentPlayer(), selectedCellID);
        if (Game.isGameOver()) {
          if (!Game.isTie()) {
            $prompt.html(Game.currentPlayer() + ' won! Game over!');
            gameOverUI();
          } else {
            $prompt.html('Tie! Game over!');
            gameOverUI();
          }
          updatesScoreboard();
        } else {
          Game.switchPlayer();
          $prompt.html(Game.currentPlayer() + '\'s turn.');
        }
      } else {
        $prompt.html('Can\'t go there!');
      }
    });
  };


  var choiceSelection = function(){
    if (this.id === 'X') {
      Game.setPlayers('X', 'O');
      $prompt.html('Player 1, you\'re X. Player 2, you\'re O.<br><br>');
    } else if (this.id === 'O') {
      Game.setPlayers('O','X');
      $prompt.html('Player 1, you\'re O. Player 2, you\'re X.<br><br>');
    }
    setRandomBeginnerUI();
    // console.log('Game.setRandomBeginner: ' + Game.setRandomBeginner())
    makeMove();
  };

  var newGame = function(){
    // console.log('currentPlayer: ' + Game.currentPlayer);
    $(this).hide();
    clearBoard();
    Game.resetMoveCount();
    if (Game.gameCount() === 0) {
      $prompt.show();
      $prompt.html(originalPrompt);
      $('[name="player-choice"]').on('click', choiceSelection);
    } else if (Game.gameCount() > 0) {
      $prompt.show();
      setRandomBeginnerUI();
      // console.log('Game.setRandomBeginner: ' + Game.setRandomBeginner())
      makeMove();
    }
  };

  $('#new-game-button').on('click', newGame);

  var gameOverUI = function(){
    $cell.off('click');
    $('#new-game-button').show();
    Game.incrementGameCount();
    Game.isGameOver();
  };



// Login / game controls

  $('#log-out').hide();
  $('#login-fields').hide();
  $('#game-controls').hide();
  $('[name="login-buttons-interior"]').hide();
  $('#open-games').hide();
  $('#show-games').hide();

  $('#login-buttons').find('button').on('click', function(){
    $('#login-buttons').hide();
    $('#login-fields').show();
    if (this.id === 'login1') {
      $('#login').show();
    } else {
      $('#register').show();
    }
  });

  $('#login-fields').find('button').on('click', function(){
    $('#login-buttons').hide();
    $('#login-fields').hide();
    $('#game-controls').show();
  });

  $('#list').on('click', function(){
    $('#open-games').show();
    $('#game-controls').hide();
  });

  $('#join').on('click', function(){
    $('#show-games').show();
    $('#game-controls').hide();
  });

});
