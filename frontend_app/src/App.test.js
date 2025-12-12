import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders title and initial status', () => {
  render(<App />);
  expect(screen.getByText(/Tic Tac Toe/i)).toBeInTheDocument();
  expect(screen.getByText(/Next player: X/i)).toBeInTheDocument();
});

test('plays a move and alternates player', async () => {
  render(<App />);
  const user = userEvent.setup();

  // Click the first empty cell button
  const cell1 = screen.getByRole('button', { name: /Cell 1, empty/i });
  await user.click(cell1);

  // After first move, should show X in cell and next player O
  expect(cell1).toHaveTextContent('X');
  expect(screen.getByText(/Next player: O/i)).toBeInTheDocument();
});
