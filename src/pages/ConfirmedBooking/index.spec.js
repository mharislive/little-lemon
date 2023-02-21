import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ConfirmedBooking from ".";

const setup = () =>
  render(
    <MemoryRouter>
      <ConfirmedBooking />
    </MemoryRouter>
  );

describe("ConfirmedBooking", () => {
  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });

  it("should render heading ConfirmedBooking", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1, name: /Confirmed Booking/ })).toBeInTheDocument();
  });
});
