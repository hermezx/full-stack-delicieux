import React from "react";
import { useState } from "react";
import BookingList from "../components/BookingList";
import BookingForm from "../components/BookingForm";
import Navbar from "../components/Navbar";

const BookingPage = () => {
  const [refresh, setRefresh] = useState(false);

  const handleBookingCreated = () => {
    setRefresh(!refresh); // force re-render of BookingList
  };
  return (
    <div className="resv-page">
      <Navbar />
      <div className="resv-contents">
        <h1 className="resv-heading">Book your reservations today!</h1>
        <div className="resv-lower">
          <BookingForm onBookingCreated={handleBookingCreated} />
          <BookingList key={refresh} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
