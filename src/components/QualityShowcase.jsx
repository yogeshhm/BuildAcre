import React from 'react';
import './QualityShowcase.css';
// Assuming 'cns2.jpeg' is located correctly relative to your component file structure
import cns2Image from '../assets/cns2.jpeg'; 

const QualityShowcase = () => {
  return (
    <section className="quality-showcase-section" 
             style={{ backgroundImage: `url(${cns2Image})` }}>
      
      <div className="showcase-overlay">
        <div className="showcase-content">
          
          {/* Main Headline */}
          <h2 className="showcase-headline">
            Materials That Define Excellence.
          </h2>
          
          {/* Subtext reinforcing the message */}
          <p className="showcase-subtext">
            Every BuildAcre project starts with sourcing the finest materials—from high-grade structural steel to premium interior finishes.
          </p>
          
          {/* Subtle Call-to-Action */}
          <a href="#materials" className="showcase-link">
            Explore Our Material Sourcing Process
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default QualityShowcase;