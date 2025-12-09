import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Camera, Video, Plus, ArrowRight, Aperture, Zap, HardDrive, Smartphone, Film, BookOpen } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('photography');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const photographyData = [
    {
      title: "Half-Day Wedding / Elopement",
      duration: "4 Hours",
      price: "40,000",
      description: "One dedicated photographer providing artistic, story-driven coverage of your ceremony and intimate moments.",
      features: [
        "1 Dedicated Photographer",
        "Up to 4 Hours Coverage",
        "150–300 Professionally Edited Images",
        "Ceremony, Portraits & Intimate Details",
        "Pre-wedding Planning Session",
        "Private Online Gallery with Download Access",
        "Complimentary Photo Album",
        "Creative Posing Guidance",
        "Natural Direction Throughout Session"
      ],
      popular: false
    },
    {
      title: "Full-Day Wedding",
      duration: "8 Hours",
      price: "95,000",
      description: "Two dedicated professional photographers capturing your entire celebration — from morning preparations to evening festivities.",
      features: [
        "2 Professional Photographers",
        "Up to 8 Hours Continuous Coverage",
        "300–500 High-Resolution Edited Images",
        "Color & Black-and-White Tones",
        "Pre-wedding Consultation",
        "Private Online Gallery",
        "Complimentary Photo Album",
        "Creative Posing Guidance",
        "Natural, Candid & Editorial-Style Storytelling"
      ],
      popular: true 
    },
    {
      title: "Pre-Wedding / Engagement Session",
      duration: "2 Hours",
      price: "25,000",
      description: "A dedicated photographer guiding you through a relaxed, romantic, and cinematic couple session.",
      features: [
        "1 Dedicated Photographer",
        "2 Hour Extended Session",
        "Multiple Poses, Outfits & Locations",
        "Up to 100 High-Resolution Retouched Images",
        "Pre-shoot Consultation",
        "Styling & Theme Concepts Planning",
        "Location Planning Included",
        "Private Online Gallery",
        "Artistically Enhanced Images"
      ],
      popular: false
    }
  ];

  const videographyData = [
    {
      title: "Short Story Film",
      duration: "4 Hours",
      price: "40,000",
      description: "Coverage by one dedicated cinematographer focusing on key moments with crystal-clear 4K resolution.",
      features: [
        "1 Professional Cinematographer",
        "4 Hours Coverage",
        "Shot in 4K Resolution",
        "Cinematic Lenses & Stabilized Motion",
        "3–4 Min Cinematic Highlight Film",
        "Licensed Music & Emotional Storytelling",
        "Professional Color Grading & Editing",
        "Private Online Gallery (HD + Mobile)",
        "Perfect for Heartfelt Story Summaries"
      ],
      popular: false
    },
    {
      title: "Classic Love Film",
      duration: "8 Hours",
      price: "70,000",
      description: "8 hours of seamless coverage with 4K resolution, multiple angles, and professional lighting.",
      features: [
        "1 Professional Cinematographer",
        "8 Hours Seamless Coverage",
        "Filmed in 4K Resolution",
        "Multiple Camera Angles & Professional Lighting",
        "5–7 Min Cinematic Highlight Film",
        "15–25 Min Extended Documentary Edit",
        "Vows, Speeches & Key Moments Included",
        "Pre-event Consultation",
        "Professional Color Grading & Editing",
        "Private Online Gallery for Viewing & Sharing"
      ],
      popular: true
    },
    {
      title: "Full-Day Cinematic Story",
      duration: "10 Hours",
      price: "85,000",
      description: "Professional videographer covering your entire day in 4K with drone footage and movie-quality finish.",
      features: [
        "1 Professional Videographer",
        "10 Hours Full Coverage",
        "4K Resolution with Drone Coverage Included",
        "Multiple Camera Setups & Cinematic Lenses",
        "6–8 Min Cinematic Highlight Film",
        "25–40 Min Feature-Length Documentary",
        "Full Ceremony, Speeches & Behind-the-Scenes",
        "Professional Color Grading & Sound Mix",
        "Movie-Quality Finish",
        "Pre-wedding Consultation",
        "6-Month Secure Backup of All Files",
        "Priority Scheduling & Express Delivery"
      ],
      popular: false
    }
  ];

  const addOns = [
  { 
    name: "Drone Shots", 
    price: "10,000", 
    icon: <Aperture />, 
    description: "Cinematic 4K aerial shots to capture the grandeur of your venue and landscape." 
  },
  { 
    name: "Same Day Edit", 
    price: "10,000", 
    icon: <Zap />, 
    description: "A highlight video edited on-site and projected during your reception." 
  },
  { 
    name: "Raw Footage", 
    price: "7,000", 
    icon: <HardDrive />, 
    description: "All unedited video files on a hard drive for your personal archives." 
  },
  { 
    name: "Social Media Teaser", 
    price: "4,500", 
    icon: <Smartphone />, 
    description: "A vertical, 1-minute trailer delivered within 48 hours for Instagram/TikTok." 
  },
  { 
    name: "Fine Art Albums", 
    price: "11,000", 
    icon: <BookOpen />, 
    description: "Hand-crafted, lay-flat photo albums with premium leather or linen covers." 
  },
  { 
    name: "Wedding Film / Cinematic Video", 
    price: "15,000 - 35,000", 
    icon: <Film />, 
    description: "Extended cuts or additional film chapters (price depends on length & editing)." 
  },
];

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      
      {/* --- Header Section --- */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-3"
        >
          Investment
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#EBB34C] mb-6"
        >
          Capture Your Legacy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[#7997AF] text-lg"
        >
          Choose the perfect package to preserve your memories forever. 
          Travel and accommodation fees are calculated separately.
        </motion.p>

        {/* --- Toggle Switch --- */}
        <div className="mt-10 flex justify-center">
          <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm inline-flex relative">
            <div 
              className={`absolute top-1 left-1 bottom-1 w-[50%] bg-slate-900 rounded-full transition-all duration-300 ease-in-out ${activeTab === 'videography' ? 'translate-x-[98%]' : 'translate-x-0'}`}
            />
            <button
              onClick={() => setActiveTab('photography')}
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${activeTab === 'photography' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Camera size={16} /> Photography
            </button>
            <button
              onClick={() => setActiveTab('videography')}
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${activeTab === 'videography' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
            >
              <Video size={16} /> Videography
            </button>
          </div>
        </div>
      </div>

      {/* --- Pricing Cards --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 20 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {(activeTab === 'photography' ? photographyData : videographyData).map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col
                ${pkg.popular 
                  ? 'border-[#EBB34C] shadow-xl shadow-amber-900/5 ring-1 ring-[#EBB34C]' 
                  : 'border-slate-100 shadow-lg shadow-slate-900/5'
                }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#EBB34C] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{pkg.title}</h3>
                <div className="text-sm font-medium text-amber-600 mt-1">{pkg.duration} Coverage</div>
                <p className="text-slate-500 text-sm mt-3 leading-relaxed min-h-[40px]">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-sm text-slate-400 font-medium">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-slate-900">{pkg.price}</span>
                  <span className="text-slate-500 font-medium">THB</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* --- Upgraded Add-Ons Section --- */}
<div className="max-w-7xl mx-auto mt-24 mb-20">
  
  <div className="text-center mb-12">
    <h3 className="text-3xl font-serif font-bold text-slate-900">Customize Your Experience</h3>
    <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
      Tailor your package with these premium extras to ensure every detail is captured exactly how you want it.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {addOns.map((addon, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
      >
        {/* Header: Icon & Price */}
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
            {/* Clone element to force size */}
            {React.cloneElement(addon.icon, { size: 24 })}
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Starting from</p>
            <p className="text-lg font-bold text-slate-900 font-serif">
              {addon.price} <span className="text-xs font-sans font-normal text-slate-500">THB</span>
            </p>
          </div>
        </div>

        {/* Content */}
        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
          {addon.name}
        </h4>
        <p className="text-sm text-slate-500 leading-relaxed">
          {addon.description}
        </p>

        
      </motion.div>
    ))}
  </div>

  <p className="text-center text-xs text-slate-400 mt-12 border-t border-slate-100 pt-8 w-full">
    * Prices are subject to change without prior notice. Travel fees apply for locations outside of base area.
  </p>
</div>

    </div>
  );
};

export default Services;