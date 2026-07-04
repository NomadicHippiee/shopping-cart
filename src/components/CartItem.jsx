import { useState } from "react";

export function CartItem({ item, onUpdateQuantity, onRemoveItem}) {
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
            <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-quantity">
                <button onClick={decrementQuantity}>-</button>
                <input type="number" min="1" value={quantity} onChange={(e) => handleQuantityChange(Math.max(1, parseInt(e.target.value) || 1))} />
                <button onClick={incrementQuantity}>+</button>
            </div>
            <div className="cart-item-subtotal">
                <p>${subtotal.toFixed(2)}</p>
            </div>
            <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>Remove</button>
        </div>
    )
}