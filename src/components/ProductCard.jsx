import { useState } from "react";

export function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-description">
        <div className="title-wrapper">
          <h2>{product.title}</h2>
          <p>{product.price}</p>
        </div>

        <p>{product.description}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={decrementQuantity}>-</button>
        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value || 1)))} />
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
