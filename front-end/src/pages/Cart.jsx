// components/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Chicken from "../assets/chicken.webp";
import Burger from "../assets/burger.webp";
import Salad from "../assets/salad.webp";
import Pizza from "../assets/pizza.webp";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const fallbackImage = Salad;

  const imageMap = {
    chicken: Chicken,
    burger: Burger,
    pizza: Pizza,
    salad: Salad,
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-contents">
        <div className="cart-panel">
          <div className="cart-upper">
            <h2 className="cart-heading">Order Summary</h2>
            <button className="cart-button clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <ul className="cart-items">
              {cartItems.map((item) => {
                const imgKey = item.title?.trim().toLowerCase();
                const imgSrc = imageMap[imgKey] || fallbackImage;

                return (
                  <li className="cart-item" key={item.id}>
                    <img className="cart-img" src={imgSrc} alt={item.title} />
                    <div className="cart-text">
                      <div className="cart-text1">
                        {item.title} x{item.quantity}
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    <button
                      className="remove-button "
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="cart-controls">
            <div className="controls-info">
              <h3 className="cinfo-total">Total: ${total.toFixed(2)}</h3>
              <p className="cinfo-text">
                Thank you for choosing us! We appreciate your trust in Delicieux
                and can’t wait to serve you.
              </p>
            </div>

            <div className="cart-buttons">
              <Link className="cart-button checkout" to="/checkout">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
