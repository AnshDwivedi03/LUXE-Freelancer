import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>LUXE</h3>
          <p className="footer-description">
            The destination for premium, personalized gifting. Uncompromising quality 
            meets bespoke craftsmanship.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Discover</h4>
          <ul className="footer-links">
            <li><Link to="/">The Collection</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Client Services</h4>
          <ul className="footer-links">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/care-instructions">Care Instructions</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} LUXE Gifting. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
