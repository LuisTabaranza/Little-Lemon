import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';
import HomePage from './HomePage';

export const initializeTimes = () => {
    const today = new Date();
    if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(today);
    }
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            if (typeof window.fetchAPI === 'function') {
                const dateObj = new Date(action.date);
                return window.fetchAPI(dateObj);
            }
            return state;
        default:
            return state;
    }
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate(); // Hook for programmatic routing redirects

    // Submits the form data to the external script API
    const submitForm = (formData) => {
        if (typeof window.submitAPI === 'function') {
            const isSuccess = window.submitAPI(formData);
            if (isSuccess) {
                navigate('/confirmed'); // Navigate to confirmation page if true
            }
        } else {
            // Fallback strategy for development/testing environments
            navigate('/confirmed');
        }
    };

    return (
        <main>
            <Routes>
    {/* 1. Put your actual Homepage component back on the root path */}
    <Route path="/" element={<HomePage />} /> 
    
    {/* 2. Move the booking form to its own dedicated path layout */}
    <Route 
        path="/booking" 
        element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} 
    />
    
    {/* 3. The confirmation success route */}
    <Route path="/confirmed" element={<ConfirmedBooking />} />
</Routes>
        </main>
    );
}

export default Main;