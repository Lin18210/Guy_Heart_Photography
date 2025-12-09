import React from 'react'
import Masonry from '../Components/Masonry'
// Importing images
import gallery1 from '../assets/Images/Selected Final High Res Guy Heart/Couple 2/51.webp';
import gallery2 from '../assets/Images/Selected Final High Res Guy Heart/Couple 3/36.webp';
import gallery3 from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/4.webp';
import gallery4 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/16.webp';
import gallery5 from '../assets/Images/Selected Final High Res Guy Heart/Couple 3/32.webp';
import gallery6 from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/42.webp';
import gallery7 from '../assets/Images/Selected Final High Res Guy Heart/Couple 3/31.webp';
import gallery8 from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/40.webp';

const items = [
    { id: "1", img: gallery1, height: 400 },
    { id: "2", img: gallery2, height: 250 },
    { id: "3", img: gallery3, height: 600 },
    { id: "4", img: gallery4, height: 400 },
    { id: "5", img: gallery5, height: 250 },
    { id: "6", img: gallery6, height: 600 },
    { id: "7", img: gallery7, height: 400 },
    { id: "8", img: gallery8, height: 250 },
    { id: "9", img: gallery3, height: 600 },
    { id: "10", img: gallery1, height: 400 },
    { id: "11", img: gallery2, height: 250 },
    { id: "13", img: gallery3, height: 600 },
    { id: "14", img: gallery4, height: 400 },
    { id: "15", img: gallery5, height: 250 },
    { id: "16", img: gallery6, height: 600 },
    { id: "17", img: gallery7, height: 400 },
    { id: "18", img: gallery8, height: 250 },
    { id: "19", img: gallery3, height: 600 },
    { id: "20", img: gallery1, height: 400 },
    { id: "21", img: gallery2, height: 250 },
    { id: "22", img: gallery3, height: 600 },
    { id: "23", img: gallery4, height: 400 },
    { id: "24", img: gallery5, height: 250 },
    { id: "25", img: gallery6, height: 600 },
    { id: "26", img: gallery7, height: 400 },
    { id: "27", img: gallery8, height: 250 },
    { id: "28", img: gallery3, height: 600 },
];

const Portfolio = () => {
  return (
    <div className="w-full bg-white">
      
      {/* --- START BANNER SECTION --- */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Blur & Dark Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src={gallery6} // Using one of your images as the hero background
                alt="Background" 
                className="w-full h-full object-cover object-center brightness-50 blur-[2px] scale-105"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl font-serif">
                Masterpiece Wedding Gallery
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                “Welcome to our gallery, a visual journey celebrating couples who chose Thailand for their unforgettable photo sessions. From traditional elegance to modern romance, these images capture the essence of their love amidst Thailand's iconic landscapes and hidden gems.”
            </p>
        </div>
      </div>
      {/* --- END BANNER SECTION --- */}

      {/* --- MASONRY GRID SECTION --- */}
      <div className="container mx-auto px-4 py-16">
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
      </div>

    </div>
  )
}

export default Portfolio