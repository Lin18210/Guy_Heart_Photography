import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Camera, Video, Plus, ArrowRight, Aperture, Zap, 
  HardDrive, Smartphone, Film, BookOpen, 
  Brain, Award, Users, Globe, Clapperboard, ClipboardCheck 
} from 'lucide-react';

// Keep your existing imports
import img1 from '../assets/Images/Selected Final High Res Guy Heart/Couple 4/10.webp'
import img2 from '../assets/Images/Selected Final High Res Guy Heart/Couple 4/11.webp'
import img3 from '../assets/Images/Selected Final High Res Guy Heart/Couple 4/21.webp'

import Artistic from '../assets/Images/Artistic.jpg';

//Photojournalism Section 
import photo1 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/18.webp'
import photo2 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/21.webp'
import photo3 from '../assets/Images/Selected Final High Res Guy Heart/Couple 1/30.webp'

//What Happen Next Section
import step1 from '../assets/Images/Selected Final High Res Guy Heart/Couple 2/22.webp'
import step2 from '../assets/Images/Selected Final High Res Guy Heart/Couple 2/28.webp'
import step3 from '../assets/Images/Selected Final High Res Guy Heart/Couple 2/35.webp'

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

  // --- Common Inclusions ---
  const commonInclusions = [
    { icon: <Brain />, title: "Composed Professionalism" },
    { icon: <Award />, title: "Recognized Quality Work" },
    { icon: <Users />, title: "Relaxed Atmosphere" },
    { icon: <Globe />, title: "Single Price Nationwide" },
    { icon: <Clapperboard />, title: "Video Service" },
    { icon: <ClipboardCheck />, title: "Smooth Coordination" },
  ];

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
    <div className="min-h-screen bg-neutral-50 font-sans text-slate-800 pb-16 overflow-x-hidden">
      
      {/* --- Header Section --- */}
      <div className="pt-16 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto mb-16">
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
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${activeTab === 'photography' ? 'text-white' : 'text-[#7997AF] hover:text-slate-900'}`}
            >
              <Camera size={16} /> Photography
            </button>
            <button
              onClick={() => setActiveTab('videography')}
              className={`relative z-10 px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${activeTab === 'videography' ? 'text-white' : 'text-[#7997AF] hover:text-slate-900'}`}
            >
              <Video size={16} /> Videography
            </button>
          </div>
        </div>
      </div>

      {/* --- Pricing Cards --- */}
      <div className="px-4 sm:px-6 lg:px-8">
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
                  <p className="text-[#7997AF] text-sm mt-3 leading-relaxed min-h-[40px]">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-sm text-slate-400 font-medium">Starting from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-bold text-slate-900">{pkg.price}</span>
                    <span className="text-[#7997AF] font-medium">THB</span>
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
      </div>

      {/* --- Add-Ons Section --- */}
      <div className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-slate-900">Customize Your Experience</h3>
          <p className="text-[#7997AF] mt-3 max-w-2xl mx-auto">
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
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(addon.icon, { size: 24 })}
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Starting from</p>
                  <p className="text-lg font-bold text-slate-900 font-serif">
                    {addon.price} <span className="text-xs font-sans font-normal text-[#7997AF]">THB</span>
                  </p>
                </div>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {addon.name}
              </h4>
              <p className="text-sm text-[#7997AF] leading-relaxed">
                {addon.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-12 border-t border-slate-100 pt-8 w-full">
          * Prices are subject to change without prior notice. Travel fees apply for locations outside of base area.
        </p>
      </div>

      {/* --- Every Package Includes --- */}
      <div className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#7997AF]">Every Package Includes</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {commonInclusions.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-12 h-12 mb-4 text-slate-800 flex items-center justify-center group-hover:text-[#EBB34C] transition-colors duration-300">
                  {React.cloneElement(item.icon, { size: 32, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-sm font-medium text-slate-600 max-w-[120px] leading-relaxed">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Banner Section --- */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-12 md:pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#7997AF]/90 backdrop-blur-sm p-8 md:p-10 rounded-xl max-w-lg shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#EBB34C] mb-4">
              Crafting Unique Narratives
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
              Each wedding is a masterpiece waiting to unfold—authentic, vibrant, 
              and utterly unique. We seek out couples who value genuine expression, 
              who live for the spark of the present, and who envision their 
              celebration as a living work of art.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- What To Expect & Aesthetics --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Title Group */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#EBB34C] mb-4">
            WHAT TO EXPECT
          </h2>
          <p className="text-[#7997AF] tracking-[0.2em] uppercase text-sm md:text-base">
            FROM OUR WEDDING PHOTOGRAPHY
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Image + Aesthetics Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Main B&W Image */}
            <div className="w-full h-[500px] overflow-hidden rounded-xl mb-12">
              <img 
                src={img1} 
                alt="Black and white joyful wedding moment" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Aesthetics Text Block */}
            <div className="px-4 md:px-0">
              <h3 className="text-2xl font-serif font-bold text-[#EBB34C] mb-6 uppercase tracking-wide">
                Aesthetics
              </h3>
              <p className="text-[#7997AF] leading-8 text-lg font-light">
                For us, the essence of wedding aesthetics isn't about capturing perfect images, but about sculpting an immersive atmosphere. It's discovered in the subtle glow, the emotional resonance colors impart, and the intricate textures that enrich a story’s narrative. Our pursuit, however, transcends mere photographic flawlessness...
              </p>
            </div>
          </motion.div>

          {/* Right Column: Stacked Images */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Top Landscape Image */}
            <div className="w-full h-[300px] overflow-hidden rounded-xl">
              <img 
                src={img2} 
                alt="Couple walking by the water" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Bottom Portrait Image */}
            <div className="w-full h-[500px] overflow-hidden rounded-xl">
              <img 
                src={img3} 
                alt="Intimate couple portrait" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- Documentary Banner --- */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* BG Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop" 
            alt="Documentary style" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#7997AF]/90 backdrop-blur-sm p-8 md:p-12 max-w-3xl text-center text-white shadow-xl rounded-sm"
          >
              <h2 className="text-3xl md:text-5xl font-serif tracking-widest uppercase mb-6">
                DOCUMENTARY
              </h2>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                Throughout your day, my role is to observe, not to direct. 
                I subtly navigate the event, seeking out authentic moments and profound connections. 
                I align with couples who cherish genuine human interaction—those who wish to preserve 
                every tear, every joyous roar of laughter, and every tender, fleeting pause. 
                This approach yields imagery that is sincere, deeply human, and brimming with emotion—your 
                narrative unfolded precisely as it felt.
              </p>
          </motion.div>
        </div>
      </div>

      {/* --- Photojournalism Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Collage */}
            <div className="order-2 lg:order-1">
                <div className="mb-12">
                  <h2 className="text-3xl font-serif font-bold text-[#EBB34C] mb-6 uppercase tracking-wider">
                      Photojournalism
                  </h2>
                  <p className="text-[#7997AF] leading-relaxed text-lg font-light">
                      Where mood meets genuine emotion. Our cinematic work builds upon editorial precision, 
                      adding layers of feeling to create guided moments that appear effortless yet timelessly impactful. 
                      Photojournalism isn't just about candid shots; it's about the art of storytelling through 
                      unscripted reality.
                  </p>
                </div>

                {/* Mini Collage */}
                <div className="relative h-[400px] w-full mt-8 hidden md:block">
                  <div className="absolute left-0 bottom-10 w-48 h-32 z-10 shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-500">
                      <img src={photo1} className="w-full h-full object-cover" alt="Party" />
                  </div>
                  <div className="absolute right-10 top-0 w-48 h-48 z-0 shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-500">
                      <img src={photo2} className="w-full h-full object-cover" alt="Sunset" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-40 h-56 z-20 shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-500">
                      <img src={photo3} className="w-full h-full object-cover" alt="Group" />
                  </div>
                </div>

                {/* Mobile version of images (stacked) */}
                <div className="grid grid-cols-2 gap-2 md:hidden">
                  <img src={photo1} className="rounded-lg shadow-md" alt="Party" />
                  <img src={photo2} className="rounded-lg shadow-md" alt="Sunset" />
                  <img src={photo3} className="col-span-2 rounded-lg shadow-md" alt="Friends" />
                </div>
            </div>

            {/* Right Column: Large Feature Image (Grayscale) */}
            <div className="h-[600px] w-full order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Bride dancing" 
                  className="w-full h-full object-cover grayscale rounded-sm shadow-xl hover:grayscale-0 transition-all duration-1000"
                />
            </div>

          </div>
      </div>

      {/* --- Artistic --- */}
      <div className="relative w-full h-[1200px] overflow-hidden">
        {/* Silhouette/Artistic Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${Artistic})`
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-neutral-900/40"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-md text-white mb-100"
          >
            <h2 className="text-4xl md:text-5xl font-[Playfair_Display] tracking-widest uppercase mb-8 text-white/90">
              ARTISTIC
            </h2>
            <p className="text-base md:text-sm leading-loose font-[Inter] opacity-90">
              My purpose transcends mere documentation—I am here to craft art. Each image is
              meticulously conceived to grace your walls, not simply reside in a collection. Our focus
              isn't on fleeting trends, but on timeless, purposeful photography that deeply resonates
              with you, time and time again.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- NEW SECTION: What Happens Next --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#EBB34C] mb-4">
            WHAT HAPPENS NEXT
          </h2>
          <p className="text-[#7997AF] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A beautifully guided journey from start to finish. We begin by learning your story, refine every detail together, and finally document your day with elegant, cinematic precision.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          
          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1" // Image first on mobile
             >
                <img 
                  src={step1} 
                  alt="Bridesmaids" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-center md:text-left order-2" // Text second on mobile
             >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#EBB34C] mb-2">STEP ONE</h3>
                <h4 className="text-xl font-medium text-slate-800 mb-6">Connect & Share Your Vision</h4>
                <p className="text-[#7997AF] leading-relaxed">
                  Reach out to us via the form below. We're excited to hear about your unique love story and what you envision for your special day.
                </p>
             </motion.div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-center md:text-right order-2 md:order-1" // Text second on mobile, first on desktop
             >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#EBB34C] mb-2">STEP TWO</h3>
                <h4 className="text-xl font-medium text-slate-800 mb-6">Plan Your Perfect Day</h4>
                <p className="text-[#7997AF] leading-relaxed">
                  Let's schedule a free consultation call. We'll discuss every detail, from locations to your desired style, ensuring a seamless and worry-free experience.
                </p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 md:order-2" // Image first on mobile, second on desktop
             >
                <img 
                  src={step2} 
                  alt="Wedding Details" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                />
             </motion.div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1"
             >
                <img 
                  src={step3} 
                  alt="Reception Dinner" 
                  className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                />
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-center md:text-left order-2"
             >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#EBB34C] mb-2">STEP THREE</h3>
                <h4 className="text-xl font-medium text-slate-800 mb-6">Live the Moment, We'll Capture the Magic</h4>
                <p className="text-[#7997AF] leading-relaxed">
                  Relax and fully immerse yourselves in every precious moment of your wedding. We'll discreetly capture the authentic emotions and magic, crafting a timeless legacy that transcends trends and lasts for generations.
                </p>
             </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Services;