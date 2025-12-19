import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'th', label: 'Thai', short: 'TH' },
  { code: 'ru', label: 'Russian', short: 'RU' },
  { code: 'hi', label: 'Hindi', short: 'HI' },
  { code: 'zh', label: 'Chinese', short: 'ZH' },
];

const LanguageSelector = ({ isTransparent, isMobile }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const toggleOpen = () => setIsOpen(!isOpen);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Styles
  const buttonTextColor = isMobile 
    ? 'text-gray-800' 
    : (isTransparent ? 'text-gray-200' : 'text-gray-600');
    
  const buttonHoverColor = isMobile
    ? 'hover:text-[#C5A059]'
    : (isTransparent ? 'hover:text-yellow-400' : 'hover:text-yellow-600');

  // Dropdown Logic
  return (
    <div className={`relative ${isMobile ? 'flex items-center gap-2' : ''}`} ref={dropdownRef}>
      
      {/* Trigger Button */}
      <button 
        onClick={toggleOpen}
        className={`flex items-center gap-1.5 focus:outline-none transition-colors duration-300 ${buttonTextColor} ${buttonHoverColor} pointer-events-auto cursor-pointer`}
      >
        <Globe size={isMobile ? 18 : 16} />
        <span className="text-sm font-medium uppercase tracking-wider">{currentLang.short}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute z-50 mt-2 w-32 bg-white rounded shadow-lg py-2 border border-gray-100 transform origin-top-right transition-all duration-200 ease-out left-0 md:left-auto md:right-0`}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                currentLang.code === lang.code ? 'text-[#C5A059] font-bold' : 'text-gray-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{lang.label}</span>
                {currentLang.code === lang.code && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
