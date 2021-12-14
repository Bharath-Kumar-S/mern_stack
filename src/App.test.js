import { render, screen } from '@testing-library/react';
import App from './App';
import Expense from './components/Expense';

test("renders learn react link", () => {
  render(<Expense />);
  const linkElement = screen.getAllByText(/Title/i)[0];
  expect(linkElement).toBeInTheDocument();
});