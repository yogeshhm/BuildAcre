import React from "react";
import TestComp from "./components/TestComp";
import Home from "./components/Home";
import WhatWeOffer from "./components/WhatWeOffer";
import ProjectsReels from "./components/ProjectsReels";
import ParallaxSection from "./components/ParallaxSection";
import ImageScrollCarousel from "./components/Images/ImageScrollCarousel";
import InteractiveUI from "./components/InteractiveUI";
import CardSwap, { Card } from "./components/CardSwap";
const style = {
  jon:{
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '0 0px',
  }
}
const Display = () => {
  return (
    <div style={style.jon}>
        <Home />
      
      <WhatWeOffer />
     
      <ParallaxSection
        bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
        title="Quality You Can Build On"
        subtitle="From blueprint to reality, we ensure perfection in every inch."
        height="500px"
      />
      <TestComp />
      <ImageScrollCarousel />
      <InteractiveUI />

      {/* <div style={{ height: "600px", position: "relative", maxWidth:"1400px" }}>
        <CardSwap
          width={420}
          height={260}
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={true}
        >
          <Card>
            <h3>Residential Excellence</h3>
            <p>Premium homes with clean, modern architecture.</p>
          </Card>
          <Card>
            <h3>Interior Craft</h3>
            <p>Spaces styled for comfort, function, and light.</p>
          </Card>
          <Card>
            <h3>Commercial Vision</h3>
            <p>Durable, efficient designs for growing brands.</p>
          </Card>
        </CardSwap>
      </div> */}
    </div>
  )
}

export default Display