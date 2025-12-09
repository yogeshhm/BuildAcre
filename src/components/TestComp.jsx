import React, { useEffect, useRef, useState } from "react";
import "./TestComp.css";

export default function TestComp() {
  // 1. REMOVE THE useRef FOR SCROLL CALCULATION (no longer needed)
  // const wrapperRef = useRef(null); 
  
  // 2. SET scale TO A FIXED VALUE (e.g., 1 or the starting 0.9)
  // We can just use a constant or set the initial state
  const scale = 1; // Fixed scale: no zoom/scroll effect

  // Sketchfab embed URL with slow spin & UI hidden
  const embedUrl =
    "https://sketchfab.com/models/50300550fbcb47edbd26f000e3d6c288/embed" +
    "?autostart=1" +
    "&autospin=0.15" +    // slow spin
    "&preload=1" +
    "&transparent=1" +
    "&dnt=1" +
    "&scrollwheel=0" +    // disable zoom on scroll
    "&ui_infos=0" +
    "&ui_controls=0" +
    "&ui_help=0" +
    "&ui_settings=0" +
    "&ui_fullscreen=0" +
    "&ui_annotations=0" +
    "&ui_vr=0" +
    "&ui_hint=0" +
    "&ui_theme=dark";

  // 3. REMOVE THE ENTIRE useEffect BLOCK
  // This hook is responsible for the scroll-to-scale effect.
  /*
  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const center = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = Math.abs(center - viewportCenter);

      const maxDistance = windowHeight;
      const t = 1 - Math.min(distance / maxDistance, 1);

      // scale between 0.9 and 1.12
      const newScale = 0.9 + t * 0.22;
      setScale(newScale);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  */

  return (
    <>
    <h2 style={{textAlign: 'center', 
  fontSize: '2.5rem',
  color: '#333',
  paddingTop: '35px'}}>
        3 Dimension Plans
      </h2>
    <section className="model-section">
      
      {/* 4. KEEP THE wrapperRef IF YOU WANT TO KEEP THE CSS TRANSITION */}
      {/* We can remove the ref since it's no longer used */}
      <div
        className="model-wrapper"
        // 5. Apply the fixed scale
        style={{ transform: `scale(${scale})` }} 
      >
        <div className="model-clip">
          <iframe
            title="Modern House"
            className="model-iframe"
            frameBorder="0"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src={embedUrl}
          />
        </div>
      </div>
    </section>
    </>
  );
}