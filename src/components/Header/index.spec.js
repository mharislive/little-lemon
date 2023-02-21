import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

describe("Header", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the Header logo", () => {
    setup();
    expect(screen.getByAltText("Little Lemon Logo")).toBeInTheDocument();
  });

  it("should render the Header navigation", () => {
    setup();
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Menu" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Reservations" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Order Online" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Login" })).toBeInTheDocument();
  });
});
