import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa'
import Logo from '../assets/Logo.png'



const Footer = () => {
return (
    <footer className="bg-[#faf9f6] text-slate-500 py-16 px-4 border-t border-gray-100 font-sans block">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* --- Column 1: Logo & Contact Info --- */}
          <div className="flex flex-col items-start">
            <div className="mb-6">
               {/* Logo Image */}
               <img className='h-24 w-auto object-contain' src={Logo} alt="Social Republic Media" />
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Capturing your brand's story through professional photography and videography.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#D4AF37]" />
                <a href="mailto:srm@infinitymedia1.net" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5">
                  srm@infinitymedia1.net
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#D4AF37]" />
                <span>+66 933490230</span>
              </div>
            </div>
          </div>

          {/* --- Column 2: Follow Us --- */}
          <div>
            <h4 className="text-lg font-serif font-medium text-slate-600 mb-6">Follow Us</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="https://www.instagram.com/social_republic_media/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61581699719512&sk=about&_rdc=1&_rdr#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
              >
                <FaFacebook className="text-lg" />
                Facebook
              </a>
              <a 
                href="https://www.tiktok.com/@socialrepublicmedia?_t=zs-9100tqfeqoy&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
              >
                <FaTiktok className="text-lg" />
                TikTok
              </a>
              <a 
                href="https://www.whatsapp.com/@socialrepublicmedia?_t=zs-9100tqfeqoy&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* --- Column 3: Services --- */}
          <div>
            <h4 className="text-lg font-serif font-medium text-slate-600 mb-6">Services</h4>
            <ul className="space-y-2 text-sm">
              {/* <li><Link to="/services/Product" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Product Photography</Link></li>
              <li><Link to="/services/Lifestyles" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Lifestyle & Interior</Link></li>
              <li><Link to="/services/Food" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Food & Beverage</Link></li>
              <li><Link to="/services/Event" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Event Photography</Link></li>
              <li><Link to="/services/VideoCor" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Corporate Video</Link></li>
              <li><Link to="/services/VideoEvent" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Event Video</Link></li>
              <li><Link to="/services/VideoSocial" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Social Media Video</Link></li>
              <li><Link to="/services/Social" className="hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5 inline-block">Social Media Marketing</Link></li> */}
            </ul>
          </div>

          {/* --- Column 4: Location --- */}
          <div>
            <h4 className="text-lg font-serif font-medium text-slate-600 mb-6">Location</h4>
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 mb-4">
              <iframe
                title="Social Republic Media Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5836334696505!2d100.55382081143256!3d13.743639686591731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee66b26b361%3A0x6e67ed7475173d32!2sHYDE%20Sukhumvit%2011!5e0!3m2!1sen!2sth!4v1763368560533!5m2!1sen!2sth"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className='text-sm text-slate-400 leading-relaxed'>
                27 Soi Sukhumvit 11, Khlong Toei Nuea, Watthana, Bangkok 10110
            </p>
          </div>
        </div>

        {/* --- Divider --- */}
        <hr className="border-gray-200 mb-8" />

        {/* --- Bottom Footer --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2025 Social Republic Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {/* <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
            <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link>
            <Link to="/terms" className="hover:text-[#D4AF37] transition-colors">Terms</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;