import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import slide1 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/2.webp'
import slide2 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/5.webp'
import slide3 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/12.webp'
import slide4 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/16.webp'
import slide5 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/17.webp'
import slide6 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/18.webp'
import slide7 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/30.webp'

const SLIDES = [
  {
    id: 1,
    image: slide1,
    title: "Thailand Wedding Photographer",
    subtitle: "Capturing Weddings across Thailand since 2015",
    align: "left"
  },
  {
    id: 2,
    image: slide2,
    title: "Pre-Wedding Sessions",
    subtitle: "Romantic moments captured in the golden hour",
    align: "center"
  },
  {
    id: 3,
    image: slide3,
    title: "Pre-Wedding Sessions",
    subtitle: "Romantic moments captured in the golden hour",
    align: "center"
  },
  {
    id: 4,
    image: slide4,
    title: "Pre-Wedding Sessions",
    subtitle: "Romantic moments captured in the golden hour",
    align: "center"
  },
  {
    id: 5,
    image: slide5,
    title: "Pre-Wedding Sessions",
    subtitle: "Romantic moments captured in the golden hour",
    align: "center"
  },
  {
    id: 6,
    image: slide6,
    title: "Pre-Wedding Sessions",
    subtitle: "Romantic moments captured in the golden hour",
    align: "center"
  },
  {
    id: 7,
    image: slide7,
    title: "Destination Elopements",
    subtitle: "Intimate ceremonies in breathtaking locations",
    align: "right"
  }
];

const Heroslider = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) return;

    // Auto-advance slides every 1.5 seconds
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    
    return () => clearInterval(timer);
  }, [current, isAnimating]); // Added isAnimating to dependencies to restart timer after animation finishes

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (current === index || isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center transform"
            style={{ animation: index === current ? 'kenburns 20s infinite alternate' : 'none' }}
          />
          
          {/* Content Box */}
          <div className="absolute inset-0 z-20 flex items-end pb-32 md:pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full pointer-events-none">
            <div 
              className={`
                bg-[rgba(45,55,72,0.85)] backdrop-blur-sm p-8 md:p-10 border-l-4 border-[#C5A059] max-w-xl
                transform transition-all duration-1000 delay-300
                ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
              `}
            >
              <h2 className="text-[#C5A059] font-bold text-xl md:text-2xl mb-2 font-serif">
                {slide.title}
              </h2>
              <p className="text-gray-100 text-sm md:text-lg font-light tracking-wide">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all">
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-[#C5A059] w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}

export default Heroslider