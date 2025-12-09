import React from "react";
import "./InteractiveUI.css"; // create this CSS file as below

const InteractiveUI = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Left: house image / mockup */}
          <div className="hero-left">
            {/* Replace this div’s background-image in CSS or use an <img> */}
            <div className="hero-house-card" />
          </div>

          {/* Right: text content */}
          <div className="hero-right">
            <h1 className="hero-title">Designs for a Stylish Living</h1>

            <p className="hero-text">
              Our skilled architects, designers, and planners bring vast experience
              and updated innovations to every project. From floor plans and
              elevations to the design of doors, windows, grills, and lighting,
              every detail reflects our expertise in diverse architectural styles
              and specialties.
            </p>

            <p className="hero-text">
              We&apos;re committed to bringing your dream home to life,
              incorporating sustainability features to match your vision. From
              concept to completion, we take pride in creating personalized spaces
              that blend your preferences with fresh ideas and modern-day
              practices, ensuring a home that&apos;s both unique and future-ready.
            </p>

            <button className="hero-button">
              View Our Designs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveUI;
