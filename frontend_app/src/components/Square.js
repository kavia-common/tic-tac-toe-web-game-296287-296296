import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square
 * A single square on the Tic Tac Toe board.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - disabled: boolean
 * - index: number - for aria-label
 */
function Square({ value, onClick, disabled, index }) {
  const labelVal = value ? `Cell ${index + 1}, ${value}` : `Cell ${index + 1}, empty`;
  return (
    <button
      type="button"
      className="ttt-square"
      aria-label={labelVal}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Square;
