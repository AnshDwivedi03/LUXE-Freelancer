import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, currentTotal } = useContext(CartContext);

  return (
    <div className="cart-page fade-in">
      <div className="container">
        <h1 className="cart-title">Your Shopping Bag</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your bag is currently empty.</p>
            <Link to="/" className="btn btn-solid return-btn">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item._id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <Link to={`/product/${item._id}`} className="cart-item-name">{item.name}</Link>
                    <p className="cart-item-brand">{item.brand}</p>
                    <p className="cart-item-price">${item.price.toLocaleString()}</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button 
                        onClick={() => updateQuantity(item._id, item.qty - 1)}
                        disabled={item.qty <= 1}
                      >-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQuantity(item._id, item.qty + 1)}>+</button>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="cart-item-total">
                    ${(item.price * item.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${currentTotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Estimated Total</span>
                <span>${currentTotal.toLocaleString()}</span>
              </div>
              <button className="btn btn-solid checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
