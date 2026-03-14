import { createContext, useState, useEffect, useContext } from 'react';
import AuthContext from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user) {
      try {
        const item = window.localStorage.getItem(`cartItems_${user._id}`);
        setCartItems(item ? JSON.parse(item) : []);
      } catch (error) {
        console.log(error);
        setCartItems([]);
      }
    } else {
      setCartItems([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(`cartItems_${user._id}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (product, qty = 1) => {
    const existItem = cartItems.find((x) => x._id === product._id);

    if (existItem) {
      setCartItems(
        cartItems.map((x) =>
          x._id === existItem._id ? { ...existItem, qty: existItem.qty + qty } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((x) => x._id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCartItems(
      cartItems.map((x) =>
        x._id === id ? { ...x, qty: newQty } : x
      )
    );
  };

  const currentTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, currentTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
