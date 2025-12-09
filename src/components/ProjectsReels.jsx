import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import './ProjectsReels.css';

const ProjectsReels = () => {
  // --- CONFIGURATION ---
  // Set this to true or false to control the logic in the code
  const enableAutoPlay = true; 

  // Extracted Links
  const reelUrls = [
    "https://www.instagram.com/p/DRyu3y0D8Lk/",
    "https://www.instagram.com/p/DQleyEwD22d/",
    "https://www.instagram.com/p/DOxs3zcj1kp/",
    "https://www.instagram.com/p/DJWERLShH9O/",
    "https://www.instagram.com/p/DJT5j-dI1bv/",
    "https://www.instagram.com/p/DFXgOzlvRgP/"
  ];

  return (
    <section className="reels-section">
      <h2 className="reels-heading">On-Site Action</h2>
      
      <div className="reels-carousel">
        {reelUrls.map((url, index) => (
          <div key={index} className="reel-card">
            {/* The 'crop-container' hides the top header and bottom footer 
               by acting as a mask.
            */}
            <div className="crop-container">
              <div className="iframe-shifter">
                <InstagramEmbed 
                  url={url} 
                  width={328}
                  // We try to pass captioned=false to reduce height, 
                  // but the CSS crop is the real fix.
                  captioned={false} 
                  retryDisabled={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsReels;