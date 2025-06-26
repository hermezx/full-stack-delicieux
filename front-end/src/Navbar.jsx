import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <Link to="/">Home</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/menu">Menu</Link>
    </nav>
  );
};

export default Navbar;
