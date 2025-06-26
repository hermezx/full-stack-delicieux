import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ onBookingCreated }) => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [bookingDateTime, setBookingDateTime] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        name: name,
        no_of_guests: guests,
        bookingdate: bookingDateTime
      });

      // Notify parent component to refresh the list
      onBookingCreated && onBookingCreated();

      // Reset form
      setName('');
      setGuests('1');
      setBookingDateTime('');
    } catch (error) {
      console.error("Error creating booking:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Reservation</h2>
      <div>
        <label>First Name: </label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Guests: </label>
        <input 
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Time Slot: </label>
        <input 
          type="datetime-local"
          value={bookingDateTime}
          onChange={(e) => setBookingDateTime(e.target.value)}
          placeholder="e.g. 6:00 PM"
          required
        />
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? "Booking..." : "Book Table"}
      </button>
    </form>
  );
};

export default BookingForm;