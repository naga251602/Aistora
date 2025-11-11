import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App UI Rendering", () => {
  it("renders the TableTalk header, welcome section, and login form", () => {
    render(<App />);

    // At least one TableTalk text (appears in header and hero)
    const titles = screen.getAllByText(/tabletalk/i);
    expect(titles.length).toBeGreaterThan(0);

    // Welcome section present
    expect(screen.getByText(/welcome to tabletalk/i)).toBeInTheDocument();

  });
});
