import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import ResetButton from './components/ResetButton';
import { calculateWinner, getCurrentPlayer, isDraw } from './utils/gameLogic';

// PUBLIC_INTERFACE
function App() {
  // Theme handling preserved, default to light
  const [theme, setTheme] = useState('light');

  // Game state
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  const draw = isDraw(squares);
  const currentPlayer = getCurrentPlayer(squares);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSquareClick = (index) => {
    if (winner || draw || squares[index]) return; // prevent invalid moves
    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
  };

  let status = '';
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (draw) {
    status = 'Draw!';
  } else {
    status = `Next player: ${currentPlayer}`;
  }

  return (
    <div className="App app-shell">
      <header className="header">
        <h1 className="title" aria-label="Tic Tac Toe title">Tic Tac Toe</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </header>

      <main className="main">
        <div className="game-card">
          <GameStatus status={status} />
          <Board
            squares={squares}
            onSquareClick={handleSquareClick}
            disabled={Boolean(winner) || draw}
          />
          <ResetButton onReset={handleReset} />
        </div>
      </main>

      <footer className="footer" aria-hidden="true" />
    </div>
  );
}

export default App;
