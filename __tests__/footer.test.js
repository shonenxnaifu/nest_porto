import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

test("should render Footer component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});