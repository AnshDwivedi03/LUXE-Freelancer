import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || 'Error fetching product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error-message container" style={{marginTop: '40px'}}>{error}</div>;

  return (
    <div className="product-details-page fade-in">
      <div className="container">
        <Link to="/" className="btn back-btn">&larr; Back to Collection</Link>
        <div className="details-grid">
          <div className="details-image-container">
            <img src={product.image} alt={product.name} className="details-image" />
          </div>
          <div className="details-info">
            <h4 className="details-brand">{product.brand}</h4>
            <h1 className="details-title">{product.name}</h1>
            <p className="details-price">${product?.price?.toLocaleString()}</p>
            <div className="details-divider"></div>
            <p className="details-description">{product.description}</p>
            
            <div className="purchase-section">
              <button 
                className="btn btn-solid purchase-btn"
                onClick={() => {
                  if (!user) {
                    navigate('/login');
                    return;
                  }
                  addToCart(product, 1);
                  navigate('/cart');
                }}
              >
                Add to Cart
              </button>
              <button className="btn wishlist-btn">Add to Wishlist</button>
            </div>
            
            <div className="product-guarantee">
              <p>✓ 100% Authentic Luxury Guarantee</p>
              <p>✓ Complimentary Personalized Engraving</p>
              <p>✓ Premium Signature Packaging</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
