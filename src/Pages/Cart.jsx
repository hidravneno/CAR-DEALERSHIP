import "../Pages/Cart.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

function Cart() {
    const { cart, removeFromCart, getCartCount, getCartTotal, clearCart } = useContext(StoreContext);
    const [checkoutMessage, setCheckoutMessage] = useState("");

    const handleCheckout = () => {
        setCheckoutMessage("Purchase completed. Thank you for your purchase!");
        clearCart();
    };

    return (
        <div className="cart page">
            <h1>🛒 Ready to Complete Your Order?</h1>
            <p className="cart-description">
                Review your items and proceed to checkout when you're ready.
            </p>
            <p className="cart-count">🛒 You have {getCartCount()} items in your cart.</p>
            <p className="cart-total">💵 Total: ${getCartTotal().toFixed(2)}</p>

            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className="cart-item-info">
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                                <button className="btn-remove" onClick={() => removeFromCart(index)}>❌ Remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty. 🛒</p>
                )}
            </div>

            <div className="cart-actions">
                <Link to="/catalog" className="btn-back">⬅ Continue Shopping</Link>
                <button className="btn-checkout" onClick={handleCheckout}>Proceed to Checkout ✅</button>
            </div>

            {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
        </div>
    );
}

export default Cart;