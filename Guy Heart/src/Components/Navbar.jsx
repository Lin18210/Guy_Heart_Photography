import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LogoImg from '../assets/Logo.png';
import LanguageSelector from './LanguageSelector';
import AnimatedButton from './AnimatedButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const isTransparent = isHomePage && !isScrolled;

  const textColorClass = isTransparent ? 'text-gray-200' : 'text-gray-600';
  const hoverColorClass = isTransparent ? 'hover:text-yellow-400' : 'hover:text-yellow-600';

  const NAV_LINKS = [
    { name: t('navbar.home'), href: '/' },
    { name: t('navbar.gallery'), href: '/portfolio' },
    { name: t('navbar.services'), href: '/services' },
    { name: t('navbar.video'), href: '/video' },
    { name: t('navbar.blog'), href: '/blog' },
    { name: t('navbar.about'), href: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler to navigate and close menu (if open)
  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0); // Optional: Scroll to top on navigation
  };

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
              {/* You can also use navigate here, or keep Link */}
              <Link to="/">
                <h1 className="font-serif tracking-widest text-center leading-none">
                   <img src={LogoImg} alt="Guy Heart Photography" className="h-15 w-auto sm:h-28"/>
                </h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleNavigation(link.href)}
                  className={`relative text-base ${textColorClass} ${hoverColorClass} group transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer bg-transparent border-none ${link.name === 'Home' ? ' border-[#C5A059]' : ''}`}
                >
                  {link.name} <span className='absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center'></span>
                </button>
              ))}
            </div>
              
            {/* Action Buttons (Lang + Contact) */}
            <div className="hidden md:flex items-center space-x-6">
               {/* Language Selector Desktop - MOVED HERE */}
               <LanguageSelector isTransparent={isTransparent} />

               {/* CTA Button */}
              <AnimatedButton 
                onClick={() => handleNavigation('/contact')}
                className="bg-[#6B8E9B] hover:bg-[#5a7a85] text-white px-6 py-2 rounded text-sm font-medium transition-colors shadow-sm cursor-pointer"
              >
                {t('navbar.contact')}
              </AnimatedButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               {/* Language Selector Mobile (visible in header) */}
              {/* <div className={!isTransparent ? 'text-gray-800' : 'text-white'}>
                 <LanguageSelector isTransparent={isTransparent} />
              </div> */}
              
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
              <button 
                key={link.name} 
                onClick={() => handleNavigation(link.href)}
                className="text-left text-gray-800 hover:text-[#C5A059] font-medium bg-transparent border-none"
              >
                {link.name}
              </button>
            ))}
             {/* Language Selector Mobile (inside menu) */}
            <div className="py-2 border-t border-gray-100">
               <LanguageSelector isMobile={true} />
            </div>

            <button 
                onClick={() => handleNavigation('/contact')}
                className="bg-[#6B8E9B] text-white py-3 rounded text-center w-full"
            >
              {t('navbar.contact')}
            </button>
          </div>
        )}
      </nav>

      {/* --- SPACER FIX --- */}
      {!isHomePage && (
        <div className="w-full h-[120px] md:h-[120px] bg-white"></div>
      )}
    </>
  );
}

export default Navbar;