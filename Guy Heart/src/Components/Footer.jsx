import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-[#C5A059] font-serif text-xl font-bold">GUY HEART</h4>
          <p className="text-gray-400 text-sm mt-2">© 2024 Guy Heart Photography. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-[#C5A059] transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer