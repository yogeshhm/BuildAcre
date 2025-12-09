// HeroCream.jsx
import "./HeroCream.css";

const features = [
  "Have good perspective and technical knowledge of green homes.",
  "Make energy-efficient designs to minimize environmental impact.",
  "Use eco-friendly materials to reduce long-term costs."
];

export default function HeroCream() {
  return (
    <section className="hero-cream">
      <div className="hero-cream-inner">
        <div className="hero-cream-left">
          <h1>Eco Friendly Green Home Construction</h1>
          <button className="hero-btn">Know More</button>
        </div>

        <div className="hero-cream-right">
          {features.map((text) => (
            <div key={text} className="hero-feature">
              <div className="hero-circle" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
