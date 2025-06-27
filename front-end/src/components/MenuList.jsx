import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_MENU_URL);
        setMenu(response.data);
      } catch (error) {
        console.log("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) return <p>Loading menu...</p>;

  return (
    <div className="menu-container">
      <div className="menu-contents">
        <h2 className="menu-heading dm-serif-text-regular">Our Menu</h2>
        <p className="menu-subheading dm-serif-text-regular-italic">Please select what tempts you and enjoy!</p>
        <div className="menu-list-container">
          {menu.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.title} className="menu-img" />
              <div className="menu-info">
                <h3 className="menu-title">{item.title}</h3>
                <p className="menu-price">₱{item.price}</p>
                <p className="menu-description">{item.description}</p>
                <button className="menu-button" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
