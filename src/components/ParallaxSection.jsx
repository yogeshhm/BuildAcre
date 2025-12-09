import React from 'react';
import './ParallaxSection.css';

const ParallaxSection = ({ 
  bgImage, 
  title, 
  subtitle, 
  height = "400px" // Default height, can be customized
}) => {
  return (
    <div 
      className="parallax-container" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        minHeight: height 
      }}
    >
      {/* Dark Overlay to make text pop */}
      <div className="parallax-overlay">
        <div className="parallax-content">
          <h2 className="parallax-title">{title}</h2>
          {subtitle && <p className="parallax-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;