import { useState } from "react";
import { useCart } from "../context/useCart";
import { CartItem } from "../components/CartItem";
import { OrderModal } from "../components/OrderModal";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, newQuantity },
    });
  };

  const handleRemoveItem = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId
    });
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return <div className="cart-page">
        <p>Your cart is empty. Go shopping!</p>
    </div>
  }

  return (
    <div className="cart-page">
        <h1>Your Order</h1>
        <div className="cart-items">
            {cart.map(item =>(
                <CartItem key={item.id} item={item} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem}/>
            ))}
        </div>
        <div className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
        <button className="complete-order-btn" onClick={() => setShowModal(true)}>Complete Order</button>
        <OrderModal isOpen={showModal} onClose={() => setShowModal(false)}/>
    </div>
  )
}
