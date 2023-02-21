import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Order from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Order />
    </MemoryRouter>
  );

describe("Order", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading Order", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: /Order/ })).toBeInTheDocument();
  });
});
