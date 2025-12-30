import React from 'react';
import { Link } from 'react-router-dom';

const AnimatedButton = ({ to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`relative inline-block overflow-hidden bg-[#7a93a5] text-white font-sans text-sm tracking-widest px-7 py-4 shadow-md group ${className}`}
    >
      <span className="absolute inset-0 bg-[#D4AF37] transform -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0"></span>
      <span className="relative z-10">{children}</span>
    </Link>
  );
};

export default AnimatedButton;
