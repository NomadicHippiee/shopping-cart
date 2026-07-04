export function OrderModal({isOpen, onClose}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Order Confirmation</h2>
                <p>🎭 This is a FAKE SHOP!</p>
                <p>Your order will never be fulfilled.</p>
                <p>Thank you for testing our imaginary store! 😂</p>
                
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}