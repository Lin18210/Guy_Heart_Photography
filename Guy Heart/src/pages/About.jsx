import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- IMAGES FROM 'real image/About' ---
// Importing all available numeric images to use across sections
import img1 from '../assets/Images/real image/About/1.webp';
import img2 from '../assets/Images/real image/About/2.webp';
import img3 from '../assets/Images/real image/About/3.webp';
import img4 from '../assets/Images/real image/About/4.webp';
import img5 from '../assets/Images/real image/About/5.webp';
import img6 from '../assets/Images/real image/About/6.webp';
import img7 from '../assets/Images/real image/About/7.webp';
import img8 from '../assets/Images/real image/About/8.webp';
import img9 from '../assets/Images/real image/About/9.webp';
import img10 from '../assets/Images/real image/About/10.webp';
import img11 from '../assets/Images/real image/About/11.webp';
import img12 from '../assets/Images/real image/About/12.webp';
import img13 from '../assets/Images/real image/About/13.webp';
import img14 from '../assets/Images/real image/About/14.webp';
import img15 from '../assets/Images/real image/About/15.webp';

// Reuse logos from Home if available, else standard imports
import logo1 from '../assets/Images/Logos/Logo1.png';
import logo2 from '../assets/Images/Logos/Logo2.jpeg';
import logo3 from '../assets/Images/Logos/Logo3.jpg';
import logo4 from '../assets/Images/Logos/Logo4.png';
import logo5 from '../assets/Images/Logos/Logo5.png';
import logo6 from '../assets/Images/Logos/Logo6.png';

const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6];

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-gray-800 font-sans overflow-hidden">

      {/* --- SECTION 1: INTRO (Similar to Ref 1) --- */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative p-4 border-2 border-gray-100 bg-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src={img1} alt="About Guy Heart" className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            className="w-full md:w-1/2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif text-amber-600 leading-tight">
              <span className="text-[#D4AF37]">“ABOUT <br/> <span className="text-gray-900">GUY HEART PHOTOGRAPHY</span>”</span>
            </motion.h2>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                <strong className="text-gray-800 font-medium">Guy Heart Photography</strong> is known for elegantly blending natural and artificial light. Their fresh, easy-going style makes subjects feel comfortable, capturing genuine moments and subtle details words can’t describe.
              </p>
              <p>
                More than just beautiful dresses or brides, Their photos tell a full story, reflecting each subject’s personality. Guy Heart Studio delivers high-quality wedding photography tailored to your style and budget. The final images are <span className="text-[#D4AF37] font-medium">clean, artistic, and timeless</span>, presented in a journal-style album that captures the true essence of your special day.
              </p>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-sm text-gray-400 italic mt-8 border-l-4 border-amber-600 pl-4">
              "Amidst the relentless stream of media-driven perfection, we believe the heart of wedding photography remains steadfast. Its true brilliance is found in the unforgettable, heartfelt moments."
            </motion.p>
          </motion.div>
        
        </div>
      </section>


      {/* --- SECTION 2: FACES BEHIND (Ref 2) --- */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-16">
          
          {/* Right Image */}
          <motion.div 
            className="w-full md:w-1/2 h-[500px] overflow-hidden rounded-sm relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={img14} alt="Photographer" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
          </motion.div>

          {/* Left Text */}
          <motion.div 
            className="w-full md:w-1/2 text-left space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-[#D4AF37]">
              The Faces Behind The Camera
            </motion.h3>
            <motion.div variants={fadeInUp} className="w-20 h-1 bg-gray-200" />
            <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed">
              Guy Heart Photography began in New York City, where our studio was nominated as the Top NYC wedding photography businesses for over 10 years. After a decade of capturing luxury celebrations around the world, we have now transitioned our full operations to Thailand.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed">
              Today, we bring our international experience to couples planning destination weddings in Thailand, offering cinematic and elegant storytelling for pre-weddings, engagements, and full days.
            </motion.p>
          </motion.div>

        </div>
      </section>


      {/* --- SECTION 3: UNSEEN WORK (Ref 3) --- */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             
             {/* Left Image (Process) */}
             <motion.div 
               className="relative"
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
                <img src={img3} alt="Unseen Work" className="shadow-2xl w-full max-w-md mx-auto md:mr-auto rounded-lg" />
             </motion.div>

             {/* Right Text */}
             <motion.div className="space-y-6 md:pl-10"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
             >
                <motion.h3 variants={fadeInUp} className="text-3xl md:text-4xl font-serif text-[#D4AF37] uppercase tracking-widest">
                  The Unseen Work of <br/> a Photographer
                </motion.h3>
                <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed">
                  Many people believe a photographer's job is simply to press a button on your big day. In reality, the perfect photos you receive are the result of extensive work done behind the scenes. We spend hours editing, curating, and ensuring every single pixel reflects the emotion of the moment.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Link to="/contact" className="inline-block mt-4 bg-slate-500 hover:bg-slate-600 text-white px-8 py-3 text-sm tracking-wider uppercase transition-colors shadow-lg">
                    Continue Reading →
                  </Link>
                </motion.div>
             </motion.div>
        </div>
      </section>


      {/* --- SECTION 4: AWARDS & EMOTION (Ref 4) --- */}
      <section className="w-full bg-[#fcfcfc] py-20 border-t border-gray-100">
        
        {/* Logos */}
        <div className="container mx-auto px-4 mb-20">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
             {LOGOS.map((logo, idx) => (
               <img key={idx} src={logo} alt="Award" className="h-12 md:h-20 md:w-30 object-contain" />
             ))}
          </motion.div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <motion.div 
              className="h-[500px] md:h-[600px] w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={img4} alt="Emotion" className="w-full h-full object-cover rounded shadow-lg" />
            </motion.div>

            {/* Right Text & Image Combo */}
            <div className="space-y-12">
               <motion.div 
                 className="text-center md:text-left space-y-4"
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                 <h3 className="text-4xl md:text-5xl font-serif text-[#D4AF37]">Emotion Above Mere Visuals.</h3>
                 <p className="text-slate-500 text-lg">Without intrusion, we capture the natural unfolding of your emotions, allowing the true essence of your day to shine.</p>
               </motion.div>

               <motion.div 
                 className="w-full h-[300px] overflow-hidden rounded shadow-xl mt-8"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <img src={img5} alt="Car scene" className="w-full h-full object-cover" />
               </motion.div>
            </div>
        </div>
      </section>


      {/* --- SECTION 5: HEART BEHIND LENS (Ref 5 - Grid/Collage) --- */}
      <section className="container mx-auto px-4 py-24">
         <div className="flex flex-col md:flex-row gap-12">
            
            {/* Left Info */}
            <motion.div 
              className="w-full md:w-1/3 space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                 <h3 className="text-4xl font-serif text-[#D4AF37] mb-4">The Heart <span className="text-gray-500">Behind Our Lens</span></h3>
                 <div className="w-16 h-1 bg-amber-500 mb-6"></div>
                 <h4 className="text-xl font-medium text-slate-700 mb-2">Building Connections & Creating Comfort</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">
                   At Guy Heart Photography, we truly believe that the most beautiful photos come to life when everyone feels relaxed and genuinely themselves. That's why we pour our energy into building a warm, friendly connection with every couple.
                 </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                 <h4 className="text-xl font-medium text-slate-700 mb-2">Unveiling Your Best Self</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">
                   We totally get it - not everyone feels natural in front of a camera. But don't worry! With our unique eye and experience, we'll gently guide you to reveal your true beauty.
                 </p>
                 <Link to="/contact" className="inline-block mt-6 px-6 py-2 bg-slate-500 text-white text-xs uppercase tracking-widest hover:bg-slate-700 transition-colors">
                    Contact Us
                 </Link>
              </motion.div>
            </motion.div>

            {/* Right Collage */}
            <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
               <motion.div className="space-y-4" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <img src={img6} className="w-full h-64 object-cover rounded" alt="Collage 1" />
                  <img src={img7} className="w-full h-48 object-cover rounded" alt="Collage 2" />
               </motion.div>
               <motion.div className="space-y-4 pt-8" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                  <img src={img8} className="w-full h-48 object-cover rounded" alt="Collage 3" />
                  <img src={img9} className="w-full h-64 object-cover rounded" alt="Collage 4" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* --- SECTION 6: GROUP BANNER (Ref 6) --- */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
         <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <p className="text-white/80 text-lg md:text-xl font-light mb-4 tracking-widest uppercase">Your story starts with</p>
               <h2 className="text-5xl md:text-7xl font-serif text-amber-400 font-bold drop-shadow-2xl">Guy Heart Photography</h2>
             </motion.div>
         </div>
         <motion.img 
            src={img10} 
            alt="Group Shot" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
         />
      </section>

       {/* --- SECTION 7: BOTTOM GALLERRY (Optional Extras from new imports) --- */}
       <section className="w-full grid grid-cols-3 md:grid-cols-4 gap-1 p-1">
          {[img11, img12, img13, img14].map((im, i) => (
             <motion.div 
               key={i} 
               className="h-40 md:h-64 overflow-hidden relative group"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <img src={im} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
             </motion.div>
          ))}
       </section>

    </div>
  );
}

export default About;