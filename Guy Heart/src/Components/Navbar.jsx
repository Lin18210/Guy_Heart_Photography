import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import LogoImg from '../assets/Logo.png';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Video', href: '/video' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const isTransparent = isHomePage && !isScrolled;

  const textColorClass = isTransparent ? 'text-gray-200' : 'text-gray-600';
  const hoverColorClass = isTransparent ? 'hover:text-yellow-400' : 'hover:text-yellow-600';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isTransparent ? 'bg-transparent py-6' : 'bg-white shadow-md py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex flex-col items-center justify-center">
              <Link to="/">
              <h1 className="font-serif tracking-widest text-center leading-none">
                 <img src={LogoImg} alt="Guy Heart Photography" className="h-15 w-auto sm:h-28"/>
              </h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`relative text-base ${textColorClass} ${hoverColorClass} group transition-all duration-300 ease-in-out transform hover:scale-110 ${link.name === 'Home' ? ' border-[#C5A059]' : ''}`}
                >
                  {link.name} <span className='absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center'></span>
                </a>
              ))}
            </div>
              
            {/* CTA Button */}
            <Link to="/contact">
            <div className="hidden md:block">
              <button className="bg-[#6B8E9B] hover:bg-[#5a7a85] text-white px-6 py-2 rounded text-sm font-medium transition-colors shadow-sm cursor-pointer">
                Contact Us
              </button>
            </div>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${!isTransparent ? 'text-gray-800' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-800 hover:text-[#C5A059] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#6B8E9B] text-white py-3 rounded text-center w-full">
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* --- SPACER FIX --- */}
      {/* This invisible div pushes content down on non-home pages so it doesn't hide behind the navbar */}
      {!isHomePage && (
        <div className="w-full h-[120px] md:h-[160px] bg-white"></div>
      )}
    </>
  );
}

export default Navbar;