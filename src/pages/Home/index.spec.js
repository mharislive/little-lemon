import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

describe("Home", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  describe("Hero section", () => {
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
  });

  describe("Special section", () => {
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
});
