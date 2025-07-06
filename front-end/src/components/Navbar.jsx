import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext.jsx";
import { Menu } from "lucide-react";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="nav-container bg-black text-white">
      <h1 className="nav-logo fleur-de-leah-regular">DX</h1>
      <div className={`nav-links  ${isOpen ? "columnize" : "hidden"}`}>
        <Link className="link non-cart" to="/">
          Home
        </Link>
        <div className="deco-line"></div>
        <Link className="link non-cart" to="/menu">
          Menu
        </Link>
        <div className="deco-line"></div>
        <Link className="link non-cart" to="/reservations">
          Reservations
        </Link>
        <div className="deco-line"></div>
        <Link className="link non-cart" to="/cart">
          🛒 Cart ({cartItems.length})
        </Link>
        <div className="deco-line"></div>
        <button className="nav-x-button" onClick={closeMenu}>
          X
        </button>
      </div>
      <button className="nav-menu-button" onClick={toggleMenu}>
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
