import './Sustainability.css';

const Sustainability = () => {
  return (
    <div className="sustainability-page fade-in">
      <div className="sustainability-hero">
        <h1 className="static-title">Our Sustainability Mission</h1>
        <p className="static-subtitle">Crafting the future with conscience and care.</p>
      </div>
      
      <div className="container static-content">
        <section className="static-section">
          <h2>Commitment to the Earth</h2>
          <p>
            At LUXE, we believe that true luxury is sustainable. Our mission is to provide 
            unparalleled elegance while minimizing our environmental footprint. We are dedicated 
            to sourcing materials responsibly, reducing waste in our packaging, and supporting 
            artisans who employ eco-friendly practices.
          </p>
        </section>

        <section className="static-section">
          <h2>Ethical Sourcing</h2>
          <p>
            Every diamond, every ounce of gold, and every piece of leather we use is tracked 
            through a rigorous supply chain. We partner exclusively with suppliers who adhere to 
            strict environmental and labor standards, ensuring that our products are as green 
            as they are gold.
          </p>
        </section>

        <section className="static-section">
          <h2>Zero-Waste Packaging</h2>
          <p>
            Our signature packaging is now 100% recyclable and made from post-consumer materials. 
            We have eliminated single-use plastics from our shipping process, replacing them with 
            innovative, biodegradable alternatives that look and feel just as premium.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Sustainability;
