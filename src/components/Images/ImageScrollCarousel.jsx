import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ImageScroll.css';

const ImageScrollCarousel = () => {
  const [progress, setProgress] = useState(50);
  const itemsRef = useRef([]);
  const totalItems = 10;
  // Use a ref to store startX for use across functional updates without re-renders
  const startXRef = useRef(0); 

  const speedWheel = 0.02;
  const speedDrag = -0.1;

const itemsData = [
  {
    title: 'Construction',
    num: '01',
    src: 'https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g='
  },
  {
    title: 'Interior',
    num: '02',
    src: 'https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY='
  },
  {
    title: 'Facade',
    num: '03',
    src: 'https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I='
  },
  {
    title: 'Urban',
    num: '04',
    src: 'https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs='
  },
  {
    title: 'Outdoor',
    num: '05',
    src: 'https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0='
  },
  {
    title: 'Modern',
    num: '06',
    src: 'https://media.istockphoto.com/id/1299954175/it/foto/villa-cubica-moderna.jpg?s=612x612&w=0&k=20&c=DhGhb3c1E3DW_fbrWJ_R_Zh0Lbwu6syFeRLsKlZ9no8='
  },
  {
    title: 'Commercial',
    num: '07',
    src: 'https://media.istockphoto.com/id/926689776/it/foto/vista-ad-angolo-basso-dei-grattacieli-di-new-york.jpg?s=612x612&w=0&k=20&c=DmEB0Ty7ZwDnBoU5SuA8FNevOp4G1UcECw5aS4vA9A8='
  },
  {
    title: 'Villa',
    num: '08',
    src: 'https://media.istockphoto.com/id/1191376167/it/foto/villa-dellisola.jpg?s=612x612&w=0&k=20&c=PKslWo4FdbjinohKQlK_oWL34jqAsnzMTdy2bxEAf-I='
  },
  {
    title: 'Office',
    num: '09',
    src: 'https://media.istockphoto.com/id/184316397/it/foto/londra-edifici-aziendali.jpg?s=612x612&w=0&k=20&c=XqrRxEPzFnwRFk7PQrCiu9-FPfCTPyMe5BKKaxYXCs8='
  },
  {
    title: 'Finance',
    num: '10',
    src: 'https://media.istockphoto.com/id/184619832/it/foto/distretto-finanziario-al-crepuscolo-londra.jpg?s=612x612&w=0&k=20&c=RAThrJOBY6vhlT6-kQpu9-9jLEzWToYfdw46S8B0Mu0='
  },
];



  const getZindex = useCallback((index, activeIndex) => {
    return (index === activeIndex) ? totalItems : totalItems - Math.abs(index - activeIndex);
  }, []);

  // Main animation logic synchronized with the progress state
  useEffect(() => {
    const boundedProgress = Math.max(0, Math.min(progress, 100));
    const activeIndex = Math.floor(boundedProgress / 100 * (totalItems - 1));

    itemsRef.current.forEach((item, index) => {
      if (item) {
        const zIndex = getZindex(index, activeIndex);
        const activeValue = (index - activeIndex) / totalItems;
        
        // These CSS vars are used in ImageScroll.css for transform/opacity
        item.style.setProperty('--zIndex', zIndex);
        item.style.setProperty('--active', activeValue);
        item.style.setProperty('--x', `calc(${activeValue} * 800%)`);
        item.style.setProperty('--y', `calc(${activeValue} * 200%)`);
        item.style.setProperty('--rot', `calc(${activeValue} * 120deg)`);
        // Opacity logic derived from original CSS formula but applied dynamically here:
        item.style.setProperty('--opacity', `${(zIndex / totalItems * 3 - 2)}`);
      }
    });
  }, [progress, getZindex, totalItems]);

  const handleWheel = useCallback((e) => {
    const wheelProgress = e.deltaY * speedWheel;
    setProgress(p => Math.max(0, Math.min(p + wheelProgress, 100)));
  }, []);

  const handleMouseMove = useCallback((e) => {
    // Cursor visual effect (uses global document interaction)
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    if (e.buttons !== 1 && e.type !== 'touchmove') return; 

    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startXRef.current) * speedDrag;
    
    setProgress(p => Math.max(0, Math.min(p + mouseProgress, 100)));
    startXRef.current = x;
  }, []);
  
  const handleMouseDown = (e) => {
     startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  }
  const handleMouseUp = () => {}

  const handleItemClick = (index) => {
    // Progress calculation simplified for click action
    setProgress((index / totalItems) * 100 + 5); 
  };

  useEffect(() => {
    document.addEventListener('wheel', handleWheel);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleMouseMove);
    document.addEventListener('touchend', handleMouseUp);
    
    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleWheel, handleMouseMove]);


  return (
    <div className="image-scroll-container" style={{ 
        overflow: 'hidden',
        fontFamily: "'Roboto', serif",
        background: 'linear-gradient(135deg, black, #b5baa3ff)',
        height: '100vh',
        width: '100vw',
        maxWidth: '1400px',
        position: 'relative'
    }}>
      <div 
        className="carousel"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {itemsData.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            ref={el => itemsRef.current[index] = el}
            onClick={() => handleItemClick(index)}
          >
            <div className="carousel-box">
              <div className="title">{item.title}</div>
              <div className="num">{item.num}</div>
              <img src={item.src} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      

      {/* <a href="https://www.supah.it" target="_blank" rel="noopener noreferrer" className="logo">S</a> */}
      
      <div className="social">
        <a href="www.linkedin.com" target="_blank" rel="noopener noreferrer">
          {/* SVG data truncated for brevity, ensure full data from previous response is used */}
          <svg><use xlinkHref="#ico-linkedin"></use></svg>
        </a>
        <a href="www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg><use xlinkHref="#ico-instagram"></use></svg>
        </a>
      </div>

      {/* SVG Definitions (hidden but present in DOM) */}
      <svg style={{ display: 'none' }}>
        {/* Paste the full symbol definitions from the previous message here */}
        <symbol id="ico-instagram" viewBox="0 0 35 35">...</symbol>
        <symbol id="ico-linkedin" viewBox="0 0 35 35">...</symbol>
      </svg>
      
      <div className="cursor"></div>
      <div className="cursor cursor2"></div>
    </div>
  );
};

export default ImageScrollCarousel;
