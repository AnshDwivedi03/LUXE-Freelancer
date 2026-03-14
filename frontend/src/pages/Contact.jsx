// Using shared static styles from Sustainability.css

const Contact = () => {
  return (
    <div className="contact-page fade-in" style={{ paddingBottom: '100px' }}>
      <div className="about-hero" style={{ background: `linear-gradient(rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 0.9)), url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80') center/cover` }}>
        <h1 className="static-title">Contact Us</h1>
        <p className="static-subtitle">We are here to assist with your bespoke gifting needs.</p>
      </div>
      
      <div className="container static-content">
        <section className="static-section">
          <h2>Client Advisory</h2>
          <p>
            Our dedicated Client Advisors are available to assist you with personalized recommendations, 
            bespoke requests, and inquiries regarding your orders. 
          </p>
          <br/>
          <p><strong>Email:</strong> concierge@luxegifting.com</p>
          <p><strong>Phone:</strong> +1 (800) 555-LUXE</p>
          <p><strong>Hours:</strong> Monday - Saturday, 9am - 8pm EST</p>
        </section>

        <section className="static-section" style={{ marginTop: '40px' }}>
          <h2>Send a Message</h2>
          <form className="auth-card" style={{ maxWidth: '600px', margin: '0', background: 'transparent', padding: '0', boxShadow: 'none' }}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" rows="5" required style={{ resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn btn-solid auth-btn" style={{ width: 'auto', padding: '10px 30px' }}>Send Message</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
