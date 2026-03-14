import './Sustainability.css'; // Reusing static styles

const About = () => {
  return (
    <div className="about-page fade-in">
      <div className="about-hero">
        <h1 className="static-title">The LUXE Story</h1>
        <p className="static-subtitle">A heritage of excellence, a future of innovation.</p>
      </div>
      
      <div className="container static-content">
        <section className="static-section">
          <h2>Our Origins</h2>
          <p>
            Founded in 2026, LUXE was born from a simple yet profound desire: to create 
            gifts that resonate on a deeply personal level while maintaining the highest 
            standards of world-class craftsmanship. What started as a bespoke atelier has 
            grown into a global destination for fine personalization.
          </p>
        </section>

        <section className="static-section">
          <h2>The Art of Personalization</h2>
          <p>
            We believe a gift should be as unique as the person receiving it. Our master 
            engravers and artisans spend hours perfecting every monogram, every embossed detail, 
            and every custom fitting. We do not just sell products; we create heirlooms 
            designed to be passed down through generations.
          </p>
        </section>

        <section className="static-section">
          <h2>Uncompromising Quality</h2>
          <p>
            Our curators travel the globe to source only the finest materials—from full-grain 
            Italian leathers to conflict-free diamonds and precious metals. When you choose 
            LUXE, you are choosing a promise of enduring quality and timeless design.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
