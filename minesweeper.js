document.addEventListener('DOMContentLoaded', startGame);

// Define your `board` object here!

var board = {
 cells:[]
};
var boardSize = 6;


function generateBoard() {
  for (var x = 0; x < boardSize; x++) {
    for (var y = 0; y < boardSize; y++) {
      board.cells.push ({
        row: y,
        col: x,
        isMine: Math.random() >= 0.6,
        isMarked: false,
        hidden: true,
        surroundingMines: 0

      });
    }
  }
}




function startGame() {
  // Don't remove this function call: it makes the game work!
  generateBoard();

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i]);
    }

  lib.initBoard();
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
}

// Define this function to look for a win condition:


// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  for (i = 0; i < board.cells.length; i++) {

    if (!board.cells[i].isMarked && board.cells[i].isMine) {
      return;
    }
    if (!board.cells[i].isMine && board.cells[i].hidden) {
      return;
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win');
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      count++;
    }
  }
  return count;

}