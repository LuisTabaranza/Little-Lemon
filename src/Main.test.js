import { initializeTimes, updateTimes } from './Main';
import '@testing-library/jest-dom';

describe('Reservation Time Reducer Functions', () => {
    
    // Set up a mock for fetchAPI before the tests run
    beforeEach(() => {
        window.fetchAPI = jest.fn(() => [
            "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
        ]);
    });

    test('initializeTimes should return a non-empty array of times', () => {
        // Execute the function
        const times = initializeTimes();
        
        // Assert that the array is not empty
        expect(times.length).toBeGreaterThan(0);
        
        // Assert it returns the exact mocked expected values
        expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });

    test('updateTimes should return a new state based on the provided date action', () => {
        // Define initial state and the action with a pre-selected date
        const initialState = [];
        const action = { type: 'UPDATE_TIMES', date: '2026-07-10' };
        
        // Execute the reducer
        const newState = updateTimes(initialState, action);
        
        // Assert that it successfully fetched new times for the selected date
        expect(newState.length).toBeGreaterThan(0);
        expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });
});