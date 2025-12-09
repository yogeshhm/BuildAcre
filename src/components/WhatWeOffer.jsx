import React, { useEffect, useRef } from "react";
import "./WhatWeOffer.css";

const services = [
  {
    title: "Residential Construction",
    description:
      "Homes tailored to your lifestyle, from traditional layouts to clean, modern architecture."
  },
  {
    title: "Interior Design",
    description:
      "Thoughtful interiors that reflect your taste while making every square foot work harder."
  },
  {
    title: "Commercial Construction",
    description:
      "Efficient, durable commercial spaces that balance everyday function with strong visual impact."
  },
  {
    title: "Extension & Renovation",
    description:
      "Careful upgrades and additions that give your existing property a fresh, cohesive new life."
  }
];

const WhatWeOffer = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".offer-card");
    if (!cards || cards.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="offer-section" id="what-we-offer">
      <div className="offer-inner">
        <div className="offer-heading">
          <span className="offer-tag">Services</span>
          <h2 className="offer-title">What we offer</h2>
          <p className="offer-subtitle">
            From first sketch to final handover, we handle the full build so you
            don’t have to juggle separate teams.
          </p>
        </div>

        <div className="offer-grid" ref={gridRef}>
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`offer-card ${
                index % 2 === 0 ? "from-left" : "from-right"
              }`}
            >
              <div className="offer-card-glow" />
              <div className="offer-icon">
                <span />
              </div>
              <h3 className="offer-card-title">{service.title}</h3>
              <p className="offer-card-text">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
