import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings(); // 🔁 invoke it
  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div className="resv-display">
      <h2 className="display-heading dm-serif-text-regular-italic ">Reservations</h2>
      <div className="display-list-container">
        <ul className="display-list dm-serif-text-regular">
          {bookings.map((booking) => (
            <li key={booking.id}>
              {booking.name} - {booking.no_of_guests} guests -{" "}
              {new Date(booking.bookingdate).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingList;
