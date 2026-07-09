import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

// Test 1: Static Text
test('Renders the Choose date label in the BookingForm', () => {
    const availableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();

    render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />);
    
    const labelElement = screen.getByText("Choose Date");
    expect(labelElement).toBeInTheDocument();
});

// Test 2: Form Submission
test('Allows the user to submit the BookingForm', () => {
    const availableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();

    render(
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />
    );
    
    // Find the button directly by its text string to trigger the submit sequence
    const submitButton = screen.getByText("Confirm Reservation");
    fireEvent.click(submitButton);
    
    // Assert that the submitForm prop handler execution path was called successfully
    expect(mockSubmit).toHaveBeenCalled();
});

// Test 3: Writing to Local Storage
test('Writes reservation data to localStorage on form submission', () => {
    const availableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();

    // Spy on localStorage.setItem
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    render(
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />
    );

    const submitButton = screen.getByText("Confirm Reservation");
    fireEvent.click(submitButton);

    // Verify localStorage.setItem was triggered with the bookings key
    expect(setItemSpy).toHaveBeenCalledWith('bookings', expect.any(String));
    
    setItemSpy.mockRestore();
});

// Test 4: Reading from Local Storage
test('Reads initial booking data from localStorage on initialization', () => {
    const availableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();

    // Mock initial data in localStorage
    const mockBookings = [{ date: '2026-07-10', time: '18:00', guests: 2, occasion: 'Birthday' }];
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockBookings));

    render(
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />
    );

    // Verify that the table rendered the mock data retrieved from localStorage
    const tableCell = screen.getByText("2026-07-10");
    expect(tableCell).toBeInTheDocument();

    getItemSpy.mockRestore();
});