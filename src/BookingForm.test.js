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
    
    // 1. FILL OUT THE FORM: We must add a valid date to enable the submit button!
    const dateInput = screen.getByLabelText("Choose Date");
    fireEvent.change(dateInput, { target: { value: '2026-10-10' } });
    
    // 2. CLICK THE BUTTON
    const submitButton = screen.getByText("Confirm Reservation");
    fireEvent.click(submitButton);
    
    // 3. ASSERTION
    expect(mockSubmit).toHaveBeenCalled();
});

// Test 3: Writing to Local Storage
test('Writes reservation data to localStorage on form submission', () => {
    const availableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    render(
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submitForm={mockSubmit} />
    );

    // 1. FILL OUT THE FORM: We must add a valid date to enable the submit button!
    const dateInput = screen.getByLabelText("Choose Date");
    fireEvent.change(dateInput, { target: { value: '2026-10-10' } });

    // 2. CLICK THE BUTTON
    const submitButton = screen.getByText("Confirm Reservation");
    fireEvent.click(submitButton);

    // 3. ASSERTION
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

// Test 5: HTML5 Validation Attributes
test('Applies correct HTML5 validation attributes to input fields', () => {
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={mockDispatch} submitForm={mockSubmit} />);

    // 1. Date Input
    const dateInput = screen.getByLabelText("Choose Date");
    expect(dateInput).toHaveAttribute('required');
    const today = new Date().toISOString().split('T')[0];
    expect(dateInput).toHaveAttribute('min', today);

    // 2. Time Select
    const timeSelect = screen.getByLabelText("Choose Time");
    expect(timeSelect).toHaveAttribute('required');

    // 3. Guests Input
    const guestsInput = screen.getByLabelText("Number of Guests");
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    // 4. Occasion Select
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute('required');
});

// Test 6: React Validation - Invalid State
test('Submit button is disabled when form state is invalid (empty date)', () => {
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={mockDispatch} submitForm={mockSubmit} />);

    // Because the initial state of 'date' is an empty string, the form is invalid.
    const submitButton = screen.getByText("Confirm Reservation");
    
    // Assert the disabled attribute is present
    expect(submitButton).toBeDisabled();
});

// Test 7: React Validation - Valid State
test('Submit button is enabled when all required fields are filled correctly', () => {
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn();
    render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={mockDispatch} submitForm={mockSubmit} />);

    // Get the inputs
    const dateInput = screen.getByLabelText("Choose Date");
    const submitButton = screen.getByText("Confirm Reservation");

    // Form starts disabled
    expect(submitButton).toBeDisabled();

    // Simulate user selecting a valid date
    fireEvent.change(dateInput, { target: { value: '2026-10-10' } });

    // The other fields (time, guests, occasion) have valid default states in our component.
    // Assert the button is now enabled
    expect(submitButton).not.toBeDisabled();
});