const CareInstructions = () => {
  return (
    <div className="care-page fade-in" style={{ paddingBottom: '100px' }}>
      <div className="about-hero" style={{ background: `linear-gradient(rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 0.9)), url('https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80') center/cover` }}>
        <h1 className="static-title">Care Instructions</h1>
        <p className="static-subtitle">Preserving the legacy of your luxury pieces over generations.</p>
      </div>
      
      <div className="container static-content">
        <section className="static-section">
          <h2>Fine Leather Goods</h2>
          <p>
            Our full-grain leathers are selected for their unparalleled quality and natural aging process. 
            To maintain their luster, avoid prolonged exposure to direct sunlight and moisture. 
            If your leather piece becomes wet, dab it gently with a soft, dry cloth and let it 
            air-dry. Use our complimentary leather conditioning cream every six months to preserve 
            its suppleness and rich patina.
          </p>
        </section>

        <section className="static-section">
          <h2>Writing Instruments & Metals</h2>
          <p>
            Precious metals and signature resins require periodic gentle care. Wipe the exterior 
            with the provided microfiber cloth after use to remove natural oils. For fountain pens, 
            we recommend flushing the nib and feed system with lukewarm water every three months 
            or when changing ink colors. Store instruments upright when not in use.
          </p>
        </section>

        <section className="static-section">
          <h2>Precious Gemstones & Jewelry</h2>
          <p>
            Clean your jewelry periodically using a gentle, non-abrasive solution and a soft brush 
            to maintain its brilliant sparkle. Always apply cosmetics, perfumes, and hairsprays 
            prior to wearing your fine pieces to prevent chemical dulling. When not being worn, 
            store individual pieces within their protective LUXE velvet pouches to prevent scratching.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CareInstructions;
