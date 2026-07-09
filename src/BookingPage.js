import React from 'react';
import BookingForm from './BookingForm';

// Catching the props passed down from Main.js
function BookingPage({ availableTimes, dispatch }) {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h1 style={{ color: '#495E57', fontSize: '2.5rem' }}>Reserve a Table</h1>
      <p style={{ color: '#333333' }}>Please fill out the form below to secure your booking at Little Lemon.</p>
      
      {/* Passing the props further down into the BookingForm */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;