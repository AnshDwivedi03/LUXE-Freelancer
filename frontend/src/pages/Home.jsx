import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home fade-in">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Gifting</h1>
          <p className="hero-subtitle">Discover our curated collection of personalized luxury pieces.</p>
          <a href="#collection" className="btn btn-solid hero-btn">Explore Collection</a>
        </div>
      </section>

      <section id="collection" className="collection">
        <div className="container">
          <h2 className="section-title">The Collection</h2>
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            <div className="product-grid">
              {products.map((product) => (
                <div key={product._id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-overlay">
                      <Link to={`/product/${product._id}`} className="btn btn-solid overlay-btn">View Details</Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <p className="product-brand">{product.brand}</p>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
