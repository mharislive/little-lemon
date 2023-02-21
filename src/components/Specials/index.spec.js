import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Special from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Special />
    </MemoryRouter>
  );

describe("Special", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the title", () => {
    setup();
    expect(screen.getByRole("heading", { level: 2, name: "This weeks specials!" })).toBeInTheDocument();
  });

  it("should render the button", () => {
    setup();
    expect(screen.getByRole("button", { name: "Online Menu" })).toBeInTheDocument();
  });

  it("should render special item 1", () => {
    setup();
    expect(screen.getByRole("heading", { level: 2, name: /Greek salad/ })).toBeInTheDocument();
  });

  it("should render special item 2", () => {
    setup();
    expect(screen.getByRole("heading", { level: 2, name: /Bruchetta/ })).toBeInTheDocument();
  });

  it("should render special item 3", () => {
    setup();
    expect(screen.getByRole("heading", { level: 2, name: /Lemon Dessert/ })).toBeInTheDocument();
  });
});
