import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

describe("Nav", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render the Header navigation", () => {
    setup();
  });
});
