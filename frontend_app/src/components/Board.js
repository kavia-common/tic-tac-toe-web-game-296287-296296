import React from 'react';
import Square from './Square';

/**
 * PUBLIC_INTERFACE
 * Board
 * Renders a 3x3 grid of squares.
 * Props:
 * - squares: Array<string|null>
 * - onSquareClick: (index: number) => void
 * - disabled: boolean - disables all squares (e.g., after win/draw)
 */
function Board({ squares, onSquareClick, disabled }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((val, idx) => (
        <div key={idx} role="gridcell" className="cell">
          <Square
            value={val}
            index={idx}
            onClick={() => onSquareClick(idx)}
            disabled={disabled || Boolean(val)}
          />
        </div>
      ))}
    </div>
  );
}

export default Board;
