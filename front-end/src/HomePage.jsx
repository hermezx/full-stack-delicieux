import Navbar from "./Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-amber-800">
      <Navbar />
      <h1>Welcome to Delicieux</h1>
      <p>
        Your taste, our passion. Explore our menu or make a reservation now.
      </p>
    </div>
  );
};

export default HomePage;
