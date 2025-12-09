import React from 'react';
import './ImpactBanner.css'; // Note: We'll create ImpactBanner.css

const ImpactBanner = () => {
  return (
    <header className="impact-banner-section">
      <div className="impact-overlay">
        <div className="impact-content">
          
          {/* Main Headline */}
          <h1 className="impact-headline">
            Quality You Can Build On.
          </h1>
          
          {/* Subtext (The Value Proposition) */}
          <p className="impact-subtext">
            BuildAcre delivers innovative architectural planning and flawless construction execution across Bangalore.
          </p>
          
          {/* Call-to-Action */}
          <a href="#contact" className="impact-cta-button">
            Start Your Project Now
          </a>
          
        </div>
      </div>
      
    </header>
  );
};

export default ImpactBanner;