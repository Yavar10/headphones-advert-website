import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, Battery, Bluetooth, Activity, Headset } from 'lucide-react';

const App = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          AURORA<span>.</span>
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-item">Features</a>
          <a href="#specs" className="nav-item">Specs</a>
          <a href="#about" className="nav-item">About</a>
        </div>
        <button className="cta-button">Pre-order now</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Sound, <br/>
            <span>Redefined.</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            Experience pure audio bliss with the all-new Aurora active noise-cancelling wireless headphones. Dive deep into the silence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <button className="cta-button" style={{ padding: '1.1rem 2.2rem', fontSize: '1.05rem' }}>
              Discover Aurora
            </button>
          </motion.div>
        </div>
        
        <div className="hero-image-container">
          <div className="glow"></div>
          <motion.img 
            src="/headphones.png" 
            alt="Aurora Headphones" 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1.5, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ y }}
          />
        </div>
      </section>

      <section id="features" className="features">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Engineered for <span>Excellence</span>
        </motion.h2>
        
        <div className="features-grid">
          {[
            { icon: <Volume2 size={36} />, title: "Active Noise Cancellation", desc: "Block out the world and immerse yourself in your music with industry-leading ANC." },
            { icon: <Battery size={36} />, title: "40 Hours Battery Life", desc: "Keep the music playing for days on a single charge. Quick charging gets you 5 hours in 10 minutes." },
            { icon: <Bluetooth size={36} />, title: "Seamless Connection", desc: "Bluetooth 5.3 ensures a stable, high-quality audio stream with zero latency." },
            { icon: <Activity size={36} />, title: "Studio Quality Sound", desc: "Custom 40mm drivers deliver deep bass, clear mids, and crisp highs." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="specs" className="specs">
        <motion.div 
          className="specs-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '3rem'}}>Technical <br/><span>Specifications</span></h2>
          
          <div className="spec-list">
            <div className="spec-item"><span className="spec-label">Driver</span> <span className="spec-value">40mm Dynamic</span></div>
            <div className="spec-item"><span className="spec-label">Frequency Response</span> <span className="spec-value">4Hz - 40kHz</span></div>
            <div className="spec-item"><span className="spec-label">Weight</span> <span className="spec-value">254g</span></div>
            <div className="spec-item"><span className="spec-label">Charging</span> <span className="spec-value">USB-C Fast Charge</span></div>
            <div className="spec-item"><span className="spec-label">Microphones</span> <span className="spec-value">8x Beamforming</span></div>
          </div>
        </motion.div>

        <motion.div 
          className="specs-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1.5 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
           <div className="glow" style={{ width: '400px', height: '400px', right: '0', top: '10%' }}></div>
           <img src="/headphones.png" alt="Headphones Side View" style={{ maxWidth: '100%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', transform: 'scaleX(-1)' }} />
        </motion.div>
      </section>

      <section className="cta-section">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <Headset size={64} strokeWidth={1.5} style={{ margin: '0 auto 2rem', color: 'var(--accent-color)' }} />
          <h2 className="cta-title">Ready to upgrade your sound?</h2>
          <p style={{ color: 'var(--secondary-text)', marginBottom: '3rem', fontSize: '1.25rem' }}>Join the audio revolution and experience music like never before.</p>
          <button className="cta-button" style={{ padding: '1.2rem 3.5rem', fontSize: '1.2rem' }}>Buy Aurora Now</button>
        </motion.div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Aurora Audio Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
