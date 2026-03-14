import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="navbar fade-in">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">LUXE</Link>
        <div className="nav-links">
          <Link to="/about" className="nav-link">Our Story</Link>
          <Link to="/sustainability" className="nav-link">Sustainability</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart ({cartCount})
          </Link>
          {user ? (
            <div className="user-menu">
              <span className="welcome-text">Welcome, {user.name}</span>
              <button onClick={handleLogout} className="btn nav-btn">Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="btn btn-solid nav-btn">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
