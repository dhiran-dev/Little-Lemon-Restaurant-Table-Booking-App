import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

describe("Booking Form", () => {
test('Check if number of guests doesnt exceed the limit', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  const rangeInput = screen.getByLabelText("Number of guests:");
  fireEvent.change(rangeInput, { target: { value: "11" } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).not.toHaveBeenCalled();
});
});