const Shipping = () => {
  return (
    <div className="shipping-page fade-in" style={{ paddingBottom: '100px' }}>
      <div className="about-hero" style={{ background: `linear-gradient(rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 0.9)), url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80') center/cover` }}>
        <h1 className="static-title">Shipping & Returns</h1>
        <p className="static-subtitle">Complimentary global delivery on all bespoke orders.</p>
      </div>
      
      <div className="container static-content">
        <section className="static-section">
          <h2>Complimentary Shipping</h2>
          <p>
            LUXE is pleased to offer complimentary secure shipping globally for all orders. 
            Each piece is meticulously packaged in our signature unboxing experience, 
            ensuring your heirloom arrives safely and beautifully presented.
          </p>
        </section>

        <section className="static-section">
          <h2>Delivery Timelines</h2>
          <p>
            As each luxury item may include custom engraving or bespoke personalization, please 
            allow 5-7 business days for crafting before your order is dispatched. Once shipped, 
            estimated delivery times are:
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: '15px 0 0 20px' }}>
            <li><strong>Domestic (US/UK/EU):</strong> 1-2 business days via Express Courier.</li>
            <li><strong>International:</strong> 3-5 business days via Secure Global Freight.</li>
          </ul>
        </section>

        <section className="static-section">
          <h2>Returns & Exchanges</h2>
          <p>
            Purchases made online may be returned or exchanged within 30 days of delivery. 
            Please note that items that have been personalized, engraved, or altered to your 
            bespoke specifications are final sale and cannot be returned. All returned items 
            must be in flawless, pristine condition with all original packaging.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Shipping;
