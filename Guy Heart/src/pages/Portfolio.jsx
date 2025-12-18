import React, { useState, useEffect } from 'react'
import Masonry from '../Components/Masonry'

// --- Importing Images via Glob ---
const imagesGlob = import.meta.glob('../assets/Images/Compressed GH/GH/*.{webp,png,jpg,jpeg}', { eager: true });
const rawItems = Object.values(imagesGlob).map(module => module.default);

// --- Helper to assign random heights ---
// Returns one of standard heights: 250, 400, 600
const getRandomHeight = () => {
    const heights = [250, 400, 600];
    return heights[Math.floor(Math.random() * heights.length)];
};

const Portfolio = () => {
    
  // --- Define Shuffled Items State ---
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 1. Map images to item objects
    const initialItems = rawItems.map((img, index) => ({
      id: String(index + 1),
      img: img,
      height: getRandomHeight()
    }));

    // 2. Shuffle using Fisher-Yates algorithm
    const shuffled = [...initialItems];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setItems(shuffled);
  }, []);

  // Pick a random image for the banner or use a specific one if available
  const bannerImage = rawItems.length > 5 ? rawItems[5] : (rawItems[0] || '');

  return (
    <div className="w-full bg-white">
      
      {/* --- START BANNER SECTION --- */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Blur & Dark Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src={bannerImage} // Using dynamic image for hero background
                alt="Background" 
                className="w-full h-full object-cover object-center brightness-50 blur-[2px] scale-105"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-[#D4AF37] mb-6 drop-shadow-xl font-serif">
                Masterpiece Wedding Gallery
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                “Welcome to our gallery, a visual journey celebrating couples who chose Thailand for their unforgettable weddings. From traditional elegance to modern romance, these images capture the essence of their love amidst Thailand's iconic landscapes and hidden gems.”
            </p>
        </div>
      </div>
      {/* --- END BANNER SECTION --- */}

      {/* --- MASONRY GRID SECTION --- */}
      <div className="container mx-auto px-4 py-16">
          {items.length > 0 ? (
              <Masonry
                items={items}
                ease="power3.out"
                duration={0.6}
                stagger={0.20}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
          ) : (
            <div className="h-96 flex items-center justify-center">
                <p className="text-gray-400">Loading Gallery...</p>
            </div>
          )}
      </div>

    </div>
  )
}

export default Portfolio