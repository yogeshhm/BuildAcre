import React from 'react';
import './TestimonialParallax.css';

const TESTIMONIAL_DATA = {
  quote: "They didn't just meet the deadline; they built our vision. Flawless execution from start to finish.",
  author: "Mrs. & Mr. Sharma, Homeowners",
  // Use a high-res, landscape construction image
  imageSrc: 'https://images.unsplash.com/photo-1579294576856-42d48817b189?q=80&w=2070&auto=format&fit=crop', 
};

const TestimonialParallax = () => {
  return (
    <section 
      className="testimonial-parallax-section"
      style={{ backgroundImage: `url(${TESTIMONIAL_DATA.imageSrc})` }}
    >
      <div className="parallax-overlay">
        <div className="testimonial-content">
          <blockquote className="quote">
            "{TESTIMONIAL_DATA.quote}"
          </blockquote>
          <p className="author">
            — {TESTIMONIAL_DATA.author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialParallax;