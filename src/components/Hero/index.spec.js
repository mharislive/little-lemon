import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Hero from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

describe("Hero", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading - Little Lemon", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: "Little Lemon" })).toBeInTheDocument();
    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  });

  it("should render heading - Chicago", () => {
    setup();
    expect(screen.getByRole("heading", { level: 2, name: "Chicago" })).toBeInTheDocument();
    expect(screen.getByText("Chicago")).toBeInTheDocument();
  });

  it("should render button", () => {
    setup();
    expect(screen.getByRole("button", { name: "Reserve a Table" })).toBeInTheDocument();
    expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
  });

  it("should render the hero image", () => {
    setup();
    expect(screen.getByAltText("person serving food")).toBeInTheDocument();
  });
});
