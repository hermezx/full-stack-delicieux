import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/delicieux/orders/", {
        name,
        address,
        items: cartItems,
        total,
      });

      clearCart(); // optional
      alert("Order placed successfully!");
      navigate("/"); // redirect home
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("There was an error placing your order.");
    }
  };

  return (
    <div className="co-page">
      <div className="co-contents">
        <div className="co-section1">
          <h2 className="co-heading">Checkout</h2>
          <p className="co-subheading">
            Please fill out the form with your details to complete your order.
          </p>
        </div>

        <form className="co-form" onSubmit={handleSubmit}>
          <input
            className="co-name"
            type="text"
            placeholder="Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <textarea
            className="co-address"
            placeholder="Address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <div className="co-section3">
            <h3 className="co-total">Total: ₱{total.toFixed(2)}</h3>
          <button className="co-placeorder" type="submit">
            Place Order
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
