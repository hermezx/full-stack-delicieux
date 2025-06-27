// components/MenuItem.jsx
import { useContext } from 'react';
import { CartContext } from '../CartContext.jsx';

const MenuItem = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-card">
      <h3>{item.name}</h3>
      <p>{item.price} PHP</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;