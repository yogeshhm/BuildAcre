import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import entyVideo from "../assets/enty.mp4";

const Home = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [duration, setDuration] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  // Get video duration
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      if (video.duration && !Number.isNaN(video.duration)) {
        setDuration(video.duration);
      }
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    return () => video.removeEventListener("loadedmetadata", handleLoaded);
  }, []);

  // Smooth scroll → video scrub (using requestAnimationFrame)
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    let frameId = null;

    const updateVideo = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const totalScrollable = rect.height + windowHeight;
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / totalScrollable)
      );

      video.currentTime = progress * duration;
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId == null) {
        frameId = window.requestAnimationFrame(updateVideo);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateVideo();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId != null) window.cancelAnimationFrame(frameId);
    };
  }, [duration]);

  // Close mobile menu when resizing back to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <div className={`home ${menuOpen ? "nav-open" : ""}`}>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <span className="nav-logo">BUILDACRE</span>
          </div>

          {/* Desktop links */}
          <nav className="nav-center">
            <button onClick={() => handleNavClick("about")}>About</button>
            <button onClick={() => handleNavClick("features")}>Services</button>
            <button onClick={() => handleNavClick("contact")}>Contact</button>
          </nav>

          <div className="nav-right">
            <button
              className="nav-cta"
              onClick={() => handleNavClick("contact")}
            >
              Get Quote
            </button>

            {/* Burger button (mobile) */}
            <button
              className="nav-toggle"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className={`burger ${menuOpen ? "burger-open" : ""}`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}>
          <button
            className="mobile-link"
            onClick={() => handleNavClick("about")}
          >
            About
          </button>
          <button
            className="mobile-link"
            onClick={() => handleNavClick("features")}
          >
            Features
          </button>
          <button
            className="mobile-link"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>
          <button
            className="mobile-cta"
            onClick={() => handleNavClick("contact")}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* SCROLL / VIDEO SECTION */}
      <main>
        <section className="scroll-section" ref={sectionRef}>
          <div className="scroll-video-wrapper">
            <video
              ref={videoRef}
              src={entyVideo}
              muted
              preload="metadata"
              playsInline
            />
            <div className="hero-overlay">
              <h1>Solid Construction</h1>
              <p>We build Strong and Modern Homes on Earth</p>
            </div>
          </div>
        </section>

        {/* Page content */}
        {/* <section id="about" className="content-section">
          <h2>About</h2>
          <p>Put your about content here.</p>
        </section>

        <section id="features" className="content-section">
          <h2>Features</h2>
          <p>Features content…</p>
        </section>

        <section id="contact" className="content-section">
          <h2>Contact</h2>
          <p>Contact content…</p>
        </section> */}
      </main>
    </div>
  );
};

export default Home;
