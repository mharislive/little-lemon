import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

describe("About", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading About", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: /About/ })).toBeInTheDocument();
  });
});
