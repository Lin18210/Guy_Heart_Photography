import React from 'react'
import { motion } from 'framer-motion'
import BannerVid from '../assets/VIdeos/Website reel 2 .mp4'
import story from '../assets/Images/Compressed GH/GH/Guy Lev Or-138.webp';
import why from '../assets/Images/Compressed GH/GH/IMG_6294.webp';
import hybrid1 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-11994907.webp';
import hybrid2 from '../assets/Images/Compressed GH/GH/pexels-alex-992000576-20222629.webp';

const Video = () => {
  // --- Animation Variants ---

  // 1. Basic Fade Up (Used for headers and individual cards)
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // 2. Side Slides (Used for left/right content blocks)
  // Starts from Left, moves to center
  const fadeLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Starts from Right, moves to center
  const fadeRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // 3. Stagger Container (Makes children animate one by one)
  const staggerContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3    // Initial delay before starting sequence
      }
    }
  };


  return (
    <div className="w-full bg-[#fdfdfc] overflow-hidden">
      
      {/* =========================================
          SECTION 1: Video Banner & Storytelling
      ========================================= */}

      {/* Video Banner Opacity Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden"
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={BannerVid}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* Storytelling Content Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Headers: Fade Up */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-slate-400 tracking-wide mb-2">
            Comprehensive Wedding
          </h2>
          <h1 className="text-6xl md:text-8xl font-serif text-amber-400 mb-6">
            Storytelling
          </h1>
          <p className="text-slate-400 font-serif text-sm md:text-base tracking-widest">
            The fusion of stillness and stream.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Slide In Left */}
          <motion.div 
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeLeftVariant}
          >
            <img
              src={story}
              alt="Wedding candid moment"
              className="w-full h-auto shadow-sm rounded-sm"
            />
          </motion.div>

          {/* Right Column: Text Slide In Right */}
          <motion.div 
            className="md:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeRightVariant}
          >
            <p className="text-slate-500 font-serif leading-8 text-base md:text-lg text-justify md:text-left">
              When you choose a hybrid wedding photographer, you're engaging an
              expert adept at capturing both exquisite stills and dynamic video
              footage. This integrated service adds an invaluable dimension to
              your wedding memories, masterfully blending the timeless beauty of
              photographs with the immersive power of visual storytelling through
              film.
            </p>
          </motion.div>
        </div>
      </section>


      {/* =========================================
          SECTION 2: Why a Hybrid Approach...
      ========================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-100">
         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16 items-start">
            
            {/* --- Left Side: Text Info & Vertical Image --- */}
            <motion.div 
              className="lg:col-span-2 flex flex-col h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeLeftVariant}
            >
               <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-serif text-amber-400 mb-6 leading-tight">
                     Why a Hybrid Approach is Best for Your Day?
                  </h2>
                  <p className="text-slate-500 font-serif leading-7">
                     A hybrid approach captures your wedding day with one unified vision—seamless, consistent, and beautifully connected in both photo and video.
                  </p>
               </div>
               {/* Vertical Image Container */}
               <div className="flex-grow h-[500px] lg:h-auto w-full relative rounded-xl overflow-hidden shadow-md">
                  <img 
                     src={why} 
                     alt="Bride and Groom with dog black and white" 
                     className="w-full h-full object-cover grayscale"
                  />
               </div>
            </motion.div>


            {/* --- Right Side: 4 Cards Grid --- */}
            <motion.div 
              className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
               <motion.div variants={fadeUpVariant} className="bg-[#738FA7] p-8 rounded-2xl text-white shadow-lg">
                  <h3 className="text-2xl font-serif mb-4">Relaxed Atmosphere</h3>
                  <p className="font-serif text-sm leading-relaxed opacity-90">
                     With a dedicated professional capturing your day, the atmosphere remains effortlessly relaxed and genuinely intimate. This approach fosters a comfortable environment, particularly beneficial for those who prefer a more subdued presence. Experience fewer distractions and more authentic, unforced emotions, especially during deeply personal moments when discretion is paramount.
                  </p>
               </motion.div>

               <motion.div variants={fadeUpVariant} className="bg-[#738FA7] p-8 rounded-2xl text-white shadow-lg">
                  <h3 className="text-2xl font-serif mb-4">Optimized Value & Smart Investment</h3>
                  <p className="font-serif text-sm leading-relaxed opacity-90">
                     A hybrid professional offers exceptional value, providing a more comprehensive, high-quality outcome than separate bookings. It’s an optimized investment for unparalleled artistic consistency, streamlined service, and a richer, multi-dimensional record of your cherished day. Every penny translates into profound, complete memories.
                  </p>
               </motion.div>

               <motion.div variants={fadeUpVariant} className="bg-[#738FA7] p-8 rounded-2xl text-white shadow-lg">
                  <h3 className="text-2xl font-serif mb-4">Cohesive Storytelling & Consistent Artistry</h3>
                  <p className="font-serif text-sm leading-relaxed opacity-90">
                     Receive a beautifully unified collection where photos and video align in style and narrative. This integrated approach guarantees consistent artistic vision across all your memories, delivered together for effortless access. Your entire story unfolds with singular harmony.
                  </p>
               </motion.div>

               <motion.div variants={fadeUpVariant} className="bg-[#738FA7] p-8 rounded-2xl text-white shadow-lg">
                  <h3 className="text-2xl font-serif mb-4">Effortless Coordination & Seamless Execution</h3>
                  <p className="font-serif text-sm leading-relaxed opacity-90">
                     Simplify planning with one point of contact who understands your complete story. This ensures seamless communication, flawless execution, and eliminates coordinating separate teams. Enjoy peace of mind from streamlined logistics.
                  </p>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* =========================================
          SECTION 3: Discover Your Hybrid Film Style
      ========================================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-100">
        
        {/* Main Section Header */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeUpVariant}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-400 mb-6">
             Discover Your Hybrid Film Style
          </h2>
        </motion.div>

        {/* --- ROW 1: Text Left, Image Right --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            {/* Text Block */}
            <motion.div
              className="md:pr-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeLeftVariant} // Slides in from Left
            >
              <h3 className="text-2xl md:text-3xl font-serif text-slate-400 mb-4">
                 The Essence of Your Hybrid Film
              </h3>
              <p className="text-slate-500 font-serif leading-8 text-base md:text-lg text-justify md:text-left">
                 Our hybrid approach yields emotionally rich, authentic videos focusing on your wedding's most cherished moments. These films beautifully enhance your photo collection, providing a moving narrative that captures the true essence of your day, distinct from traditional feature-length cinema.
              </p>
            </motion.div>

            {/* Image Block */}
            <motion.div
              className="w-full h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeRightVariant} // Slides in from Right
            >
               <img 
                 // PLACEHOLDER: Replace with your specific image (Couple on beach)
                 src={hybrid1} 
                 alt="Couple laughing on beach" 
                 className="w-full h-auto object-cover rounded-sm shadow-sm"
               />
            </motion.div>
        </div>


        {/* --- ROW 2: Image Left, Text Right --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Block */}
            <motion.div
              className="w-full h-full order-last md:order-first" // On mobile, image goes last. On desktop, image is first.
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeLeftVariant} // Slides in from Left
            >
               <img 
                 src={hybrid2} 
                 alt="Bride in vintage car" 
                 className="w-full h-auto object-cover rounded-sm shadow-sm"
               />
            </motion.div>

            {/* Text Block */}
            <motion.div
              className="md:pl-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeRightVariant} // Slides in from Right
            >
              <h3 className="text-2xl md:text-3xl font-serif text-slate-400 mb-4">
                 Aligning with Your Vision
              </h3>
              <p className="text-slate-500 font-serif leading-8 text-base md:text-lg text-justify md:text-left">
                 Finding the right hybrid shooter means aligning with their distinct style. We encourage you to delve into their portfolio and previous wedding content. This crucial step ensures their creative interpretation perfectly resonates with the unique story you wish to tell.
              </p>
            </motion.div>
        </div>

      </section>

    </div>
  )
}

export default Video