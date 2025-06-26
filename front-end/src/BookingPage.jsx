import React from "react";
import { useState } from "react";
import BookingList from "./BookingList";
import BookingForm from "./BookingForm";
import Navbar from "./Navbar";

const BookingPage = () => {
  const [refresh, setRefresh] = useState(false);

  const handleBookingCreated = () => {
    setRefresh(!refresh); // force re-render of BookingList
  };
  return (
    <div>
      <Navbar />
      <h1>Delicieux Reservation System</h1>
      <BookingForm onBookingCreated={handleBookingCreated} />
      <BookingList key={refresh} />
    </div>
  );
};

export default BookingPage;
