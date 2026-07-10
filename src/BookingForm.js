import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  
  const [bookings, setBookings] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const today = new Date().toISOString().split('T')[0];

  const isFormValid = () => {
    return (
      date !== '' &&
      time !== '' &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== ''
    );
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    
    const updatedBookings = [...bookings, formData];
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    submitForm(formData);
  };

  return (
    <div className="booking-section">
      <div className="booking-form-card">
        <h2>Reserve a Table</h2>
        <form onSubmit={handleSubmit}>
          
          {/* STEP 3: HTML htmlFor perfectly maps to input id */}
          <div className="form-group">
            <label htmlFor="res-date">Choose Date</label>
            <input 
              type="date" 
              id="res-date"
              value={date}
              min={today}
              onChange={handleDateChange}
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="res-time">Choose Time</label>
            <select 
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              aria-required="true"
            >
              {(availableTimes || []).map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input 
              type="number" 
              placeholder="1" 
              min="1" 
              max="10" 
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              required
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select 
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              aria-required="true"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Engagement">Engagement</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* STEP 2: Added exact aria-label="On Click" requested by the prompt */}
          <button 
            type="submit" 
            className="submit-btn" 
            aria-label="On Click"
            disabled={!isFormValid()}
            style={{ opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed' }}
          >
            Confirm Reservation
          </button>
        </form>
      </div>

      {bookings.length > 0 && (
        <div className="reservations-container">
          <h3>Your Upcoming Visits</h3>
          <table className="reservations-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.guests}</td>
                  <td>{booking.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BookingForm;