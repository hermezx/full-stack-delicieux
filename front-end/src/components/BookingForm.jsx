import { useState } from "react";
import axios from "axios";

const BookingForm = ({ onBookingCreated }) => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [bookingDateTime, setBookingDateTime] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        name: name,
        no_of_guests: guests,
        bookingdate: bookingDateTime,
      });

      onBookingCreated && onBookingCreated();

      setName("");
      setGuests("1");
      setBookingDateTime("");
    } catch (error) {
      console.error("Error creating booking:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="resv-form-container">
      <form className="resv-form" onSubmit={handleSubmit}>
        <h2 className="resv-form-heading">Fill in your details:</h2>
        <div className="resv-name">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="resv-guests">
          <label>Guests: </label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>
        <div className="resv-timeslot">
          <label>Time Slot: </label>
          <input
            type="datetime-local"
            value={bookingDateTime}
            onChange={(e) => setBookingDateTime(e.target.value)}
            placeholder="e.g. 6:00 PM"
            required
          />
        </div>
        <button className="book-button" type="submit" disabled={submitting}>
          {submitting ? "Booking..." : "Reserve a Table"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
