export const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // cols
  [0, 4, 8],
  [2, 4, 6], // diagonals
];

/**
 * PUBLIC_INTERFACE
 * calculateWinner
 * Determines the winner of a tic tac toe board.
 * @param {Array<string|null>} squares - Array of 9 squares with 'X', 'O', or null
 * @returns {'X'|'O'|null} - Winner symbol or null if no winner
 */
export function calculateWinner(squares) {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * PUBLIC_INTERFACE
 * isDraw
 * Determines if the board state is a draw (no empty squares, no winner).
 * @param {Array<string|null>} squares
 * @returns {boolean}
 */
export function isDraw(squares) {
  return squares.every((s) => s) && !calculateWinner(squares);
}

/**
 * PUBLIC_INTERFACE
 * getCurrentPlayer
 * Derives the current player from move count.
 * @param {Array<string|null>} squares
 * @returns {'X'|'O'}
 */
export function getCurrentPlayer(squares) {
  const moves = squares.filter(Boolean).length;
  return moves % 2 === 0 ? 'X' : 'O';
}
