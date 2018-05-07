document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board
var board = {cells:[]}
var size = 3;


function makeBoard () { 
 
for (width = 0; width < size; width++) {
  for (hight = 0; hight < size; hight++) {
    board.cells.push ( {
      row: width,
      col: hight,
      isMine:  Math.random()<0.5,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    
    }
  )
  }
}
}



function startGame() {
  // Don't remove this function call: it makes the game work!
makeBoard()

  for (i = 0; i < board.cells.length; i++) {
  board.cells[i].surroundingMines = countSurroundingMines (board.cells[i]);
  }

  lib.initBoard();
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);

}

// Define this function to look for a win condition:
//
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
  lib.displayMessage('You win')
}


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells (cell.row, cell.col);
  var count = 0
  for (i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine == true) {
      count++;
    }
  else count = count
  }
  return count;

}