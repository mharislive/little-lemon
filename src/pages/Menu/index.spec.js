import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Menu from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Menu />
    </MemoryRouter>
  );

describe("Menu", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading Menu", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: /Menu/ })).toBeInTheDocument();
  });
});
