var Game = (function(){

  var _currentPlayer;
  var _playerOne;
  var _playerTwo;
  var _gameCount = 0;
  var _moveCount = 0;
  var _playerOneWins = 0;
  var _playerTwoWins = 0;
  var _ties = 0;

  //

  var _board = ['', '', '', '', '', '', '', '', ''];


  var _addToBoard = function(player, cell){
    _board[cell] = player;
  //  console.log(_board);
  };

  //

  var _winsDiagonal = function(player){
    var _won;
    if ((_board[0] === player &&
         _board[4] === player &&
         _board[8] === player) ||
        (_board[2] === player &&
         _board[4] === player &&
         _board[6] === player)) {
      _won = true;
    } else {
      _won = false;
    }
    return _won;
  };


  var _winsHorizontal = function(player){
    var _won;
    if ((_board[0] === player &&
         _board[1] === player &&
         _board[2] === player) ||
        (_board[3] === player &&
         _board[4] === player &&
         _board[5] === player) ||
        (_board[6] === player &&
         _board[7] === player &&
         _board[8] === player )){
      _won = true;
    } else {
      _won = false;
    }
    return _won;
  };


  var _winsVertical = function(player){
    var _won;
    if ((_board[0] === player &&
         _board[3] === player &&
         _board[6] === player) ||
        (_board[1] === player &&
         _board[4] === player &&
         _board[7] === player) ||
        (_board[2] === player &&
         _board[5] === player &&
         _board[8] === player )) {
      _won = true;
    } else {
      _won = false;
    }
    return _won;
  };


  //


  var _isWinner = function(player){
    return (_winsDiagonal(player) === true) || (
          _winsHorizontal(player) === true) || (
          _winsVertical(player) === true);
  };


  // make sure to test this - this function depends on _moveCount
  var _isTie = function(){
    return _moveCount === 9 && !_isWinner('X') && !_isWinner('O');
  };


  //


  var _isGameOver = function(){
    return _isWinner('X') || _isWinner('O') || _isTie();
  }


  //


  var _isValidMove = function(index){
    return _board[index] === '';
  }


  var _setRandomBeginner = function(){
    var _randomNumber = Math.random();
    if (_randomNumber < 0.5) {
      _currentPlayer = _playerOne;
    } else {
      _currentPlayer = _playerTwo;
    }
    return _currentPlayer;
  };


  //
  var _setPlayers = function(playerOne, playerTwo) {
    _playerOne = playerOne;
    _playerTwo = playerTwo;
  }


  var _switchPlayer = function(){
    if (_currentPlayer === 'X') {
      _currentPlayer = 'O';
    } else {
      _currentPlayer = 'X';
    }
    return _currentPlayer;
  }

  var _countsPlays = function(){
    if (_isTie()) {
      _ties++;
    } else if (_currentPlayer === _playerOne) {
      _playerOneWins++;
    } else if (_currentPlayer === _playerTwo) {
      _playerTwoWins++;
    }
  }

  var _resetBoard = function(){
    _board = ['', '', '', '', '', '', '', '', ''];
  };



  return {
    currentPlayer: function(){return _currentPlayer},
    playerOne: function(){return _playerOne;},
    playerTwo: function(){return _playerTwo;},
    gameCount: function(){return _gameCount;},
    moveCount: function(){return _moveCount;},
    playerOneWins: function(){return _playerOneWins;},
    playerTwoWins: function(){return _playerTwoWins;},
    ties: function(){return _ties;},

    resetBoard: _resetBoard,
    setPlayers: _setPlayers,
    setRandomBeginner: _setRandomBeginner,
    isValidMove: _isValidMove,
    addToBoard: _addToBoard,
    isGameOver: _isGameOver,
    isTie: _isTie,
    countsPlays: _countsPlays,
    switchPlayer: _switchPlayer,
    incrementGameCount: function(){
      _gameCount += 1;
    },
    incrementMoveCount: function(){
      _moveCount += 1;
    },
    resetMoveCount: function(){
      _moveCount = 0;
    }

  };

})();





  // If TWO out of three cells in 1-3, 4-6, 7-9, 1-4-7, 2-5-8, 3-6-9, 1-5-9, 3-5-7 are occupied by two of the same player (either by player or by computer), computer should go in that third cell. If two of any of those cell combos AREN'T occupied (i.e. if only one of them is), the computer should go into the middle cell. If the middle cell is already occupied, and any of the cell combos just have the __computerPlayer in one of the cells, go into a corresponding corner cell.

  // call the game logic stuff from the UI stuff. Don't make game logic depend on UI
  // call the game logic file first in the HTML file
  // define an object, give it all of the methods that we want to be public
