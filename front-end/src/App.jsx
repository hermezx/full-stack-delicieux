import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import Cart from "./pages/Cart.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
