import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL)
      .then(response => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading bookings...</p>;

  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.name} - {booking.no_of_guests} guests - {new Date(booking.bookingdate).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;