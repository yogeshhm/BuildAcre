import React from 'react';
import './SiteFooter.css';

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* 1. Brand & Motto (The widest column on desktop) */}
        <div className="footer-column brand-column">
          <div className="footer-logo">BUILDACRE</div>
          <p className="footer-motto">
            Building Visions, Not Just Structures.
          </p>
          <p className="footer-contact-summary">
            Ready to start your project? Let's connect.
          </p>
          <a href="#contact" className="cta-link">
            Get Your Free Quote
          </a>
        </div>

        {/* 2. Quick Links/Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#planning">Architectural Planning</a></li>
            <li><a href="#execution">Civil Execution & Quality Control</a></li>
            <li><a href="#interiors">Interior Design & Finishings</a></li>
            <li><a href="#consult">Consultation & Estimates</a></li>
          </ul>
        </div>

        {/* 3. Contact & Location */}
        <div className="footer-column">
          <h4>Reach Us</h4>
          <ul>
            <li>
              <span className="icon-marker">📍</span>
              123 Construction Blvd, Bangalore, IN 560001
            </li>
            <li>
              <span className="icon-marker">📞</span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <span className="icon-marker">✉️</span>
              <a href="mailto:info@buildacre.com">info@buildacre.com</a>
            </li>
            <li>Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>

        {/* 4. Social Media & Legal */}
        <div className="footer-column social-column">
          <h4>Connect</h4>
          <div className="social-icons">
            {/* Using basic icons for now; replace with SVG components if needed */}
            <a href="https://www.instagram.com/buildacre" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i> {/* Requires FontAwesome or custom SVG */}
              <span className="icon-label">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/buildacre" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
              <span className="icon-label">LinkedIn</span>
            </a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BuildAcre. All rights reserved.</p>
        <div className="legal-links">
            <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;