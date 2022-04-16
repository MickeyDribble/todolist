import { render, screen } from '@testing-library/react';
import App from './App';


test("Renders Example Task to the screen", () => {
  render(<App/>);
  const Element = screen.getByText("Example Task");
  expect(Element).toBeInTheDocument();
})

test("Checking if header renders to the screen", () => {
  render(<App/>);
  const Element = screen.getByText("Todo List");
  expect(Element).toBeInTheDocument();
})

test("Renders the Complete Button", () => {
  render(<App/>);
  const Button1 = screen.getByText("Complete");
  expect(Button1).toBeInTheDocument();
})

test("Renders the the Clear Button", () => {
  render(<App/>);
  const Button2 = screen.getByText("X");
  expect(Button2).toBeInTheDocument();
})



