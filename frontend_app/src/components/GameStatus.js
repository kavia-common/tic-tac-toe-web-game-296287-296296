import React from 'react';

/**
 * PUBLIC_INTERFACE
 * GameStatus
 * Displays the game's current status message.
 * Props:
 * - status: string
 */
function GameStatus({ status }) {
  return (
    <div className="game-status" role="status" aria-live="polite">
      {status}
    </div>
  );
}

export default GameStatus;
