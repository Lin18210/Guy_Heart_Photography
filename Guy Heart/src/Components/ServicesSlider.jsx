import React, { useState, useEffect } from 'react';
import gallery1 from '../assets/All/Picflow Images Dec 11/an-indian-wedding-is-nothing-short-of-an-extravaga-2025-04-05-21-38-07-utc.webp';
import gallery2 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-19-utc.webp';
import gallery3 from '../assets/All/Picflow Images Dec 11/young-couple-the-bride-and-groom-walking-along-a-2025-11-24-17-21-49-utc.webp';
import gallery4 from '../assets/All/Picflow Images Dec 11/young-caucasian-couple-39-s-wedding-day-2025-02-10-00-40-43-utc.webp';
import gallery6 from '../assets/All/Picflow Images Dec 11/white-yacht-with-sail-set-goes-along-the-island-on-2025-01-10-20-40-33-utc.webp';


const SERVICES_DATA = [
  {
    id: 1,
    image: gallery4,
    title: "Full-Day Wedding (8 hrs)",
    description: "Comprehensive coverage from getting ready to the final dance."
  },
  {
    id: 2,
    image: gallery2,
    title: "Half-Day Wedding / Elopement (4 hrs)",
    description: "Perfect for intimate ceremonies and essential moments."
  },
  {
    id: 3,
    image: gallery3,
    title: "Pre-Wedding / Engagement (2 hrs)",
    description: "Capture your love story before the big day in beautiful locations."
  },
  {
    id: 4,
    image: gallery6,
    title: "Destination Packages",
    description: "Customized travel and photography packages across Thailand."
  },
   {
    id: 5,
    image: gallery1,
    title: "Proposal Shoots",
    description: "Capturing the exact moment they say yes, discreetly."
  },
];

const ServicesSlider = () => {
  const itemWidthPercent = 25; 
  const itemsInFocus = 3;
  
  // Calculate the offset to center the group of 3
  // (100% screen - (3 items * 25% width)) / 2 = 12.5% offset
  const centeringOffset = (100 - (itemsInFocus * itemWidthPercent)) / 2;

  const totalItems = SERVICES_DATA.length;
  
  // Clone data: We need enough buffer for the peek. 
  // Since we see 3 + sides, cloning 3 items is safe.
  const extendedServices = [
    ...SERVICES_DATA.slice(-itemsInFocus), 
    ...SERVICES_DATA,                        
    ...SERVICES_DATA.slice(0, itemsInFocus) 
  ];

  // Start at index 3 (the first real item)
  const [currentSliderIndex, setCurrentSliderIndex] = useState(itemsInFocus);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    if (currentSliderIndex >= extendedServices.length - itemsInFocus) return;
    setIsTransitioning(true);
    setCurrentSliderIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentSliderIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentSliderIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, currentSliderIndex]);

  const handleTransitionEnd = () => {
    // Loop Jumps
    // If we are at the end clones (index >= total + startBuffer)
    if (currentSliderIndex >= totalItems + itemsInFocus) {
      setIsTransitioning(false);
      // Jump back to the first real item (index 3) + the offset of how far we went
      setCurrentSliderIndex(itemsInFocus); 
    } 
    // If we are at the start clones
    else if (currentSliderIndex < itemsInFocus) {
      setIsTransitioning(false);
      setCurrentSliderIndex(totalItems + itemsInFocus - 1);
    }
  };

  // Re-enable transition if it was disabled for the jump
  useEffect(() => {
    if (!isTransitioning) {
      // Use a small timeout to ensure the DOM updates without animation first
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); 
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      
      {/* Container for Text (Constrained width) */}
      <div className="max-w-[1400px] mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#7a93a5] font-medium tracking-wide uppercase">
          Our Services
        </h2>
      </div>

      {/* Slider Container (Full Width) */}
      <div 
        className="w-full relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden">
          {/* TRACK */}
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            // LOGIC: Move left by (Index * 25%) THEN move right by Offset (12.5%) to center the view
            style={{ transform: `translateX(calc(-${currentSliderIndex * itemWidthPercent}% + ${centeringOffset}%))` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedServices.map((service, index) => (
              <div 
                key={`${service.id}-${index}`} 
                className="flex-shrink-0 px-2 md:px-3" // Padding creates the gap between images
                style={{ width: `${itemWidthPercent}%` }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Image */}
                  <div className="w-full h-[300px] md:h-[500px] mb-6 overflow-hidden shadow-sm relative">
                     {/* Overlay or gradient if needed, otherwise just image */}
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 duration-700"
                    />
                  </div>
                  {/* Caption */}
                  <h3 className="font-serif text-sm md:text-base text-[#7a93a5] mb-1">{service.title}</h3>
                  <p className="font-sans text-xs text-gray-400 uppercase tracking-wider">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Adjusted position to be inside the "Peek" areas */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-[4%] -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#7a93a5] p-3 rounded-full shadow-lg transition-all duration-300 hidden md:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-[4%] -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#7a93a5] p-3 rounded-full shadow-lg transition-all duration-300 hidden md:flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Button */}
      <div className="text-center mt-12">
        <button className="bg-[#7a93a5] text-white font-sans text-xs md:text-sm tracking-widest px-8 py-3 hover:bg-[#607d8b] transition-colors duration-300 shadow-md uppercase">
          View Our Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSlider;
