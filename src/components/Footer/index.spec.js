import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

describe("Footer", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the footer image", () => {
    setup();
    expect(screen.getByAltText("person serving food")).toBeInTheDocument();
  });

  it("should render the footer navigation", () => {
    setup();
    expect(screen.getByRole("heading", { name: "Doormat Navigation" })).toBeInTheDocument();
  });

  it("should render the contact section", () => {
    setup();
    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
  });

  it("should render the social media section", () => {
    setup();
    expect(screen.getByRole("heading", { name: "Social Media Links" })).toBeInTheDocument();
  });
});
