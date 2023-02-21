import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>
  );

describe("Error", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading Error", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: /Page Not Found/ })).toBeInTheDocument();
  });
});
