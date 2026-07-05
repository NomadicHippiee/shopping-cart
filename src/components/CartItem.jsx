import { useState } from "react";
import PropTypes from "prop-types";

export function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQty) => {
    if (newQty < 1) {
      onRemoveItem(item.id);
      return;
    }
    setQuantity(newQty);
    onUpdateQuantity(item.id, newQty);
  };

  const decrementQuantity = () => {
    handleQuantityChange(quantity - 1);
  };

  const incrementQuantity = () => {
    handleQuantityChange(quantity + 1);
  };

  const subtotal = item.price * quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div>
        <div className="cart-item-details">
          <h3>{item.title}</h3>
          <div className="cart-item-quantity quantity-controls">
            <button className="quantity-btn" onClick={decrementQuantity}>
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                handleQuantityChange(Math.max(1, parseInt(e.target.value) || 1))
              }
            />
            <button className="quantity-btn" onClick={incrementQuantity}>
              +
            </button>
          </div>
        </div>

        <div className="cart-item-subtotal">
          <p><strong>Total:</strong> ${subtotal.toFixed(2)}</p>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>
        Remove
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};
