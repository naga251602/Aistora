import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders Aistora status", () => {
  render(<App />);
  expect(screen.getByText(/Aistora status/i)).toBeInTheDocument();
});
