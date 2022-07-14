import { render, screen } from "@testing-library/react";
import { Main } from "./Main";

test("renders Main.js", () => {
  render(<Main />);
  const titleText = screen.getByText(/Simple Menu/i);
  expect(titleText).toBeInTheDocument();
});
