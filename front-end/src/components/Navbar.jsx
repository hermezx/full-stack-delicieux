import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext.jsx";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="nav-container bg-black text-white">
      <h1 className="nav-logo fleur-de-leah-regular">DX</h1>
      <div className="nav-links">
        <Link className="link non-cart" to="/">Home</Link>
        <Link className="link non-cart" to="/menu">Menu</Link>
        <Link className="link non-cart" to="/reservations">Reservations</Link>
        <Link className="link non-cart" to="/cart">🛒 Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
