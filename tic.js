function Game() {
  var boxes = document.querySelectorAll('cell');
  var game = document.getElementById('container');
  var resetGame = document.getElementById('reset-game');

    var context = { 'player1' : 'x', 'player2' : 'o' };
    var board = [];
    var playerOneScore = 0;
    var playerTwoScore = 0;
    var turns;
    var currentContext;


    var setBoard = function() {
        turns = 0;

      currentContext = computeContext();

      board[0] = new Array(3);
        board[1] = new Array(3);
        board[2] = new Array(3);


      for(var i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click', clickHandler, false);
    }

        resetGame.addEventListener('click', resetGameHandler, false);
    }

   var whosTurn = function() {
        return (turns % 2 == 0) ? context.player1 : context.player2;
    }
   var clickBind = function() {
        this.removeEventListener('click', clickBind);
        this.className = currentContext;
        this.innerHTML = currentContext;
  }

    var checkStatus = function() {
        var full_boxes = 0;

        for(var rows = 0; rows < board.length; rows++ ) {
            var row_filled = 0;
            var column_filled = 0;

            for(var columns = 0; columns < board[rows].length; columns++) {
     row_filled += board[rows][columns];
     column_filled += board[columns][rows];

     if(typeof board[rows][columns] !== "undefined") {
     used_boxes++;
                }
  var winsDiaganolLeft = board[0][0] + board[1][1] + board[2][2];
  var winsDiagnolRight = board[0][2] + board[1][1] + board[2][0];
   }
   }
    }}
