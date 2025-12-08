import React, { useState, useEffect } from 'react';
import Heroslider from '../Components/Heroslider';
import ServicesSlider from '../Components/ServicesSlider';

// --- IMAGES ---
import portfolioImg1 from '../assets/Images/Selected Final High Res Guy Heart/Couple 2/51.webp';
import portfolioImg2 from '../assets/Images/Selected Final High Res Guy Heart/Couple 3/36.webp';
import portfolioImg3 from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/4.webp';

import LaughingWoman from '../assets/Laughing Woman.jpeg';

// Gallery images
import gallery1 from '../assets/Images/Selected Final High Res Guy Heart/Couple 2/51.webp';
import gallery2 from '../assets/Images/Selected Final High Res Guy Heart/Couple 3/36.webp';
import gallery3 from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/4.webp';
import gallery4 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/16.webp';
import gallery5 from '../assets/Images/Selected Final High Res Guy Heart/Couple 3/32.webp';
import gallery6 from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/42.webp';
import gallery7 from '../assets/Images/Selected Final High Res Guy Heart/Couple 3/31.webp';
import gallery8 from '../assets/Images/Selected Final High Res Guy Heart/Couple 5/40.webp';

// Logo images
import logo1 from '../assets/Images/Logos/Logo1.png';
import logo2 from '../assets/Images/Logos/Logo2.jpeg';
import logo3 from '../assets/Images/Logos/Logo3.jpg';
import logo4 from '../assets/Images/Logos/Logo4.png';
import logo5 from '../assets/Images/Logos/Logo5.png'; 
import logo6 from '../assets/Images/Logos/Logo6.png';

//Review Images
import reviewImg1 from '../assets/Images/Final high res images destination wedding website/Couple 1/8.webp';
import reviewImg2 from '../assets/Images/Final high res images destination wedding website/Couple 1/Friends.jpg';

const Portfolio_Images = [portfolioImg1, portfolioImg2, portfolioImg3];

// Logo Array
const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6]; 

// --- HELPER COMPONENT: BlurImage ---
const BlurImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`bg-gray-200 overflow-hidden relative ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`
          w-full h-full object-cover
          transition-all duration-700 ease-in-out
          ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110'}
        `}
      />
    </div>
  );
};

const Home = () => {
  // --- STATE FOR SERVICES SLIDER (IF NEEDED LOCALLY) ---
  // Note: Since you moved the slider to a separate component <ServicesSlider />, 
  // you might not need this state here anymore unless it's used elsewhere.
  // I will leave it clean for now.

  return (
    <main className="flex-grow bg-white">
      <Heroslider />

      {/* =========================================
          SECTION 1: INTRO (Destination Wedding)
      ========================================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          <div className="mb-12 space-y-2">
            <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] text-[#D4AF37] font-medium">
              Destination Wedding Photographer
            </h1>
            <h2 className="text-2xl md:text-4xl font-['Playfair_Display'] text-[#D4AF37]">
              In Thailand
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mt-4 tracking-wide uppercase font-sans">
              Operating across this beautiful country
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-16">
            {Portfolio_Images.map((imgSrc, i) => {
              const isMiddle = i === 1;
              return (
                <div 
                  key={i} 
                  className={`relative shadow-lg 
                    ${isMiddle ? 'w-full md:w-[400px] h-[350px] md:h-[480px]' : 'w-full md:w-[300px] h-[300px] md:h-[380px]'}
                  `}
                >
                  <BlurImage 
                    src={imgSrc} 
                    alt={`Portfolio Collection ${i + 1}`}
                    className="w-full h-full hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <p className="font-serif text-gray-500 leading-relaxed text-sm md:text-base px-4">
              As a dedicated team of professional photographers, we specialize in capturing the genuine essence of your most significant life moments. With over a decade of experience, we transform your precious occasions into enduring visual narratives that you'll cherish for a Forever.
            </p>

            <div className="flex justify-center gap-6 text-slate-400">
               {/* Social Icons */}
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CAPTURED EMOTIONS & FEATURED
      ========================================= */}
      <section className="py-16 bg-[#fffaf5]">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Top Part: Image + Blue Quote Box */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-20 relative">
            <div className="w-full md:w-[55%] h-[400px] md:h-[500px] z-0">
               <BlurImage 
                 src={LaughingWoman}
                 alt="Bride Laughing" 
                 className="w-full h-full shadow-lg"
               />
            </div>

            <div className="w-full md:w-[40%] bg-[#7a93a5] text-white p-8 md:p-12 rounded-lg shadow-xl z-10 mt-[-50px] md:mt-0 md:-ml-12">
               <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-6">
                 “Captured <span className="text-amber-400">emotions</span>. Evocative tones.”
               </h3>
               <p className="font-sans text-xs md:text-sm leading-relaxed opacity-90 mb-8">
                 As a visual storyteller, I'm driven by documenting authentic connections. 
                 As a creative, I'm fascinated by the interplay of shadow and form. 
                 Below are some of my most cherished images illustrating genuine emotions 
                 and evocative tones from various locations.
               </p>
               <p className="font-serif text-sm text-right opacity-80">
                 — Guy Heart
               </p>
            </div>
          </div>

          {/* Bottom Part: Featured On Logos */}
          <div className="text-center pt-8 border-t border-gray-200">
            <h4 className="text-[#7a93a5] uppercase tracking-widest font-serif text-sm mb-10">
              Featured On
            </h4>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
              {LOGOS.map((logo, index) => (
                <img 
                  key={index}
                  src={logo}
                  alt={`Featured Logo ${index + 1}`}
                  className="h-8 md:h-20 w-30 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: OUR GALLERY
      ========================================= */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-[#D4AF37] font-medium mb-6">
              Our Gallery
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-serif">
              Our gallery showcases the heartfelt moments, quiet details, and genuine emotions 
              that make every wedding unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {/* 1. Left Column (Tall) */}
            <div className="md:row-span-2 h-[400px] md:h-auto group relative">
               <BlurImage src={gallery1} alt="Wedding Couple" className="w-full h-full group-hover:scale-102 duration-300" />
            </div>
            {/* 2. Top Right */}
            <div className="md:col-span-2 h-[300px] group relative">
              <BlurImage src={gallery2} alt="Wedding Details" className="w-full h-full group-hover:scale-102 duration-300" />
            </div>
            {/* 3. Middle Right */}
            <div className="md:col-span-2 h-[300px] group relative">
              <BlurImage src={gallery3} alt="Traditional Wedding" className="w-full h-full group-hover:scale-102 duration-300" />
            </div>
            {/* Bottom Row Items */}
            <div className="h-[300px] group relative">
               <BlurImage src={gallery4} alt="Gallery item" className="w-full h-full group-hover:scale-102 duration-300" />
            </div>
            <div className="h-[300px] group relative">
               <BlurImage src={gallery5} alt="Gallery item" className="w-full h-full group-hover:scale-102 duration-300" />
            </div>
            <div className="h-[300px] group relative">
               <BlurImage src={gallery6} alt="Gallery item" className="w-full h-full group-hover:scale-102 duration-300" />
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#7a93a5] text-white font-sans text-sm tracking-widest px-10 py-4 hover:bg-[#607d8b] transition-colors duration-300 shadow-md">
              VIEW OUR GALLERY
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: SPECIAL GIFT
      ========================================= */}
      <section className="w-full flex flex-col md:flex-row h-auto md:h-[650px]">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 bg-[#ecf0f3] flex flex-col justify-center items-center text-center p-8 md:p-16">
          <h2 className="text-2xl md:text-4xl font-serif text-[#7a93a5] mb-8 leading-snug">
            A Special <span className="text-amber-400 font-bold">Gift</span> From Guy <br />
            Heart Photography
          </h2>
          {/* Circle Image */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative">
             <img 
               src={gallery7}
               alt="Wedding Rings Detail" 
               className="w-full h-full object-cover"
               loading="lazy"
             />
          </div>
          <p className="text-[#8fa3b0] font-serif text-lg md:text-xl mb-10 max-w-sm leading-relaxed">
            <span className="text-amber-400 font-bold">FREE</span> Digital Wedding Album when 
            you book a photo/video package
          </p>
          <button className="bg-[#7a93a5] text-white font-sans text-sm tracking-widest px-10 py-4 hover:bg-[#607d8b] transition-colors duration-300 shadow-md">
            View Full Album
          </button>
        </div>

        {/* Right Side: Full Image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
           <BlurImage 
             src={gallery8} 
             alt="Bride holding flowers" 
             className="w-full h-full"
           />
        </div>
      </section>

      {/* =========================================
          SECTION 5: OUR SERVICES SLIDER
      ========================================= */}
      <ServicesSlider/>

      {/* =========================================
          SECTION 6: TESTIMONIALS (NEW)
      ========================================= */}
      <section className="bg-[#7a93a5] pt-16 md:pt-24 pb-0">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-white font-medium tracking-wide mb-6">
              WHAT OUR COUPLES SAY
            </h2>
            <p className="text-white/80 text-xs md:text-sm font-sans max-w-2xl mx-auto leading-relaxed tracking-wider">
              Heartfelt stories shared by the people behind the moments we captured
              — a reflection of the love, trust, and memories that made their day unforgettable.
            </p>
          </div>

          {/* Split Content: Image Left, Card Right */}
          <div className="flex flex-col md:flex-row w-full">
            
            {/* Left: Image (Using gallery4 as a placeholder for the couple) */}
            <div className="w-full md:w-1/2 h-[500px] md:h-[650px] relative">
               <BlurImage 
                 src={reviewImg1} 
                 alt="Happy Wedding Couple" 
                 className="w-full h-full"
               />
            </div>

            {/* Right: Content Area (Blue Background with Card) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
              
              {/* White Card */}
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-md relative">
                
                {/* Quote */}
                <h3 className="text-amber-400 font-['Playfair_Display'] text-xl md:text-2xl leading-relaxed mb-6">
                  “Guy Heart Photography Team knew what they were doing and did an amazing job guiding us through the entire evening.”
                </h3>
                
                {/* Body Text */}
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  We were referred to Guy Heart Photography from a friend, and liked Guy Heart Photography right from the start. They are true professionals: arrived early, interacted well with the guests, and always had the cameras positioned perfectly to get the best shots without interfering.
                </p>

                {/* Recommendation */}
                <p className="text-[#7a93a5] font-bold text-sm mb-6 uppercase tracking-wider">
                  Highly recommended!
                </p>

                {/* Author & Stars */}
                <div className="border-t border-gray-100 pt-6">
                   <p className="font-['Playfair_Display'] text-slate-600 font-bold text-lg mb-2">
                     Lucus & Emily
                   </p>
                   <div className="flex gap-1 text-amber-400">
                     {/* 5 Stars */}
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                         <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                       </svg>
                     ))}
                   </div>
                </div>

              </div>
            </div>

          </div>

          {/* Split Content: Image Right, Card Left */}
          <div className="flex flex-col md:flex-row w-full">
            

            {/* Right: Content Area (Blue Background with Card) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
              
              {/* White Card */}
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-md relative">
                
                {/* Quote */}
                <h3 className="text-amber-400 font-['Playfair_Display'] text-xl md:text-2xl leading-relaxed mb-6">
                  “Guy Heart Photography Team was absolutely terrific. They are an incredibly talented photography team.”
                </h3>
                
                {/* Body Text */}
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-sans">
                  And their pictures were absolutely stunning! The Guy Heart Photography Team was also a pleasure to work with--they showed up on time, were great at coordinating everything the day of the wedding and consistently delivered on everything they promised. We are so happy we chose to work with them and would recommend them without hesitation!
                </p>

                {/* Recommendation */}
                <p className="text-[#7a93a5] font-bold text-sm mb-6 uppercase tracking-wider">
                  Highly recommended!
                </p>

                {/* Author & Stars */}
                <div className="border-t border-gray-100 pt-6">
                   <p className="font-['Playfair_Display'] text-slate-600 font-bold text-lg mb-2">
                     Lucus & Emily
                   </p>
                   <div className="flex gap-1 text-amber-400">
                     {/* 5 Stars */}
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                         <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                       </svg>
                     ))}
                   </div>
                </div>

              </div>
                </div>
                {/* Left: Image (Using gallery4 as a placeholder for the couple) */}
                <div className="w-full md:w-1/2 h-[500px] md:h-[650px] relative">
                  <BlurImage 
                    src={reviewImg2} 
                    alt="Happy Wedding Couple" 
                    className="w-full h-full"
                  />
                </div>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;