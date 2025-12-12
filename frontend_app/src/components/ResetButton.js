import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ResetButton
 * Button to reset the game.
 * Props:
 * - onReset: () => void
 */
function ResetButton({ onReset }) {
  return (
    <button
      type="button"
      className="btn-reset"
      onClick={onReset}
      aria-label="Restart game"
    >
      Restart
    </button>
  );
}

export default ResetButton;
