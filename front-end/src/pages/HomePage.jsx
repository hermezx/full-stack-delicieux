import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-container">
        <div className="home-contents">
          <h1 className="home-title fleur-de-leah-regular">Delicieux</h1>
        <p className="home-description dm-serif-text-regular">
          Welcome to Delicieux, where dining is more than just a meal—it’s an
          experience crafted to delight every sense. <i>At Delicieux, we believe
          that exceptional food tells a story, one of passion, tradition, and
          creativity. Our carefully curated menu showcases a harmonious blend of
          timeless classics and innovative creations, each dish prepared with
          the freshest ingredients and a deep respect for culinary craft.</i>
        </p>
        <div className="home-buttons">
          <Link className="home-button" to="/menu">
            Explore Menu
          </Link>
          <Link className="home-button" to="/reservations">
            Reserve a Table
          </Link>

        </div>
        
        </div>
      </div>
    </div>
  );
};

export default HomePage;
