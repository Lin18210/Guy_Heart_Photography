import React, { useState } from 'react';

const ReviewCard = ({ image, name, quote, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // UPDATED: Used 'h-full' to fill the grid cell and 'justify-between' to align bottom buttons
    <div className="bg-white p-8 pt-16 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 relative mt-12 text-center flex flex-col h-full justify-between">
      
      {/* Content Top Section */}
      <div>
        {/* Floating Circular Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md absolute -top-10 left-1/2 -translate-x-1/2">
           <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy"/>
        </div>

        <h4 className="font-serif text-[#7a93a5] text-lg font-bold mb-2">{name}</h4>
        
        {/* Stars */}
        <div className="flex justify-center gap-1 text-amber-400 mb-6">
          {[...Array(5)].map((_, i) => (
             <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
               <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
             </svg>
          ))}
        </div>

        {/* Main Review Quote (Always Visible) */}
        {/* UPDATED: Added min-h-[72px] to force uniform height even if text is short */}
        <div className="text-gray-400 text-sm font-serif italic leading-relaxed mb-4 min-h-[72px] flex items-center justify-center">
          "{quote}"
        </div>

        {/* Expanded Body Text with Smooth Transition */}
        <div 
          className={`overflow-hidden transition-all duration-1000 ease-in-out text-gray-500 text-xs font-sans text-left space-y-4 ${
            isExpanded ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          {body.split('\n\n').map((paragraph, index) => (
            <p className='text-gray-400 text-sm font-serif italic leading-relaxed mb-4 min-h-[72px] flex items-center justify-center' key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Toggle Button (Pushed to bottom via justify-between) */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#7a93a5] text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-2 mx-auto hover:text-amber-400 transition-colors mt-6 cursor-pointer"
      >
        {isExpanded ? "See Less" : "See More"}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className={`w-3 h-3 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ReviewCard;