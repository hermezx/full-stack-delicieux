import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/delicieux/menu/")
      .then((response) => {
        setMenu(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading menu...</p>;

  return (
    <div>
      <h2>Our Menu</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        {menu.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h3>{item.title}</h3>
            <p>₱{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;