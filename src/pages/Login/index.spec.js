import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

describe("Login", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading Login", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: /Login/ })).toBeInTheDocument();
  });
});
