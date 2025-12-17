import React, { useState, useRef } from 'react'; 
import { motion, useInView } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import Heroslider from '../Components/Heroslider';
import ServicesSlider from '../Components/ServicesSlider';
import ReviewCard from '../Components/ReviewCard';
import ContactSection from '../Components/Contact';
import BounceCards from '../Components/BounceCard';

// --- IMAGES ---
import portfolioImg1 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-11994907.webp';
import portfolioImg2 from '../assets/Images/Compressed GH/GH/cheerful-newlyweds-at-beach-wedding-ceremony-2025-02-10-00-14-59-utc.webp';
import portfolioImg3 from '../assets/Images/Compressed GH/GH/pexels-jin-wedding-3859587-5729187.webp';
import portfolioImg4 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-12031176.webp';
import portfolioImg5 from '../assets/Images/Compressed GH/GH/pexels-san-wedding-1649543-5544650.webp';
import portfolioImg1 from '../assets/All/Picflow Images Dec 11/blonde-bride-in-a-tight-wedding-dress-in-a-studio-2025-11-11-20-33-08-utc.webp';
import portfolioImg2 from '../assets/All/Picflow Images Dec 11/cheerful-newlyweds-at-beach-wedding-ceremnoy-2025-02-10-00-04-40-utc.webp';
import portfolioImg3 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-08-utc.webp';
import portfolioImg4 from '../assets/All/Picflow Images Dec 11/wedding-ceremony-at-the-beach-2025-02-09-22-57-20-utc.webp';
import portfolioImg5 from '../assets/All/Picflow Images Dec 11/bride-in-elegant-wedding-dress-2024-12-22-23-18-24-utc.webp';

import LaughingWoman from '../assets/All/Picflow Images Dec 11/Laughing.jpeg';

// Gallery images
import gallery1 from '../assets/Images/Compressed GH/GH/pexels-jin-wedding-3859587-5729206.webp';
import gallery2 from '../assets/Images/Compressed GH/GH/pexels-jonathanborba-13110257.webp';
import gallery3 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-13112044.webp';
import gallery4 from '../assets/Images/Compressed GH/GH/Guy Lev Or-137.webp';
import gallery5 from '../assets/Images/Compressed GH/GH/pexels-tr-n-long-3093985-5984181.webp';
import gallery6 from '../assets/Images/Compressed GH/GH/pexels-masoodaslami-29624006.webp';
import gallery7 from '../assets/Images/Compressed GH/GH/pexels-simeart-30311767.webp';
import gallery8 from '../assets/Images/Compressed GH/GH/pexels-wellington-tavares-1593705508-27552391.webp';
import gallery1 from '../assets/All/Picflow Images Dec 11/cutting-the-wedding-cake-against-the-backdrop-of-w-2025-11-11-20-46-12-utc.webp';
import gallery2 from '../assets/All/Picflow Images Dec 11/young-caucasian-couple-39-s-wedding-day-2025-02-10-00-08-00-utc.webp';
import gallery3 from '../assets/All/Picflow Images Dec 11/groom-kissing-beautiful-bride-s-hand-2024-12-22-23-18-28-utc.webp';
import gallery4 from '../assets/All/Picflow Images Dec 11/all-you-need-now-is-your-beautiful-bride-2025-04-06-10-59-28-utc.webp';
import gallery5 from '../assets/All/Picflow Images Dec 11/young-couple-getting-married-at-the-beach-2025-02-10-12-15-21-utc.webp';
import gallery6 from '../assets/All/Picflow Images Dec 11/couple-of-bride-and-groom-enjoying-romantic-moment-2024-12-22-23-18-34-utc.webp';
import gallery7 from '../assets/All/Picflow Images Dec 11/young-couple-in-a-wedding-ceremony-at-the-beach-2025-02-10-04-37-10-utc.webp';
import gallery8 from '../assets/All/Picflow Images Dec 11/photographer-taking-pictures-of-bride-and-groom-2024-12-22-23-18-12-utc.webp';

// Logo images
import logo1 from '../assets/Images/Logos/Logo1.png';
import logo2 from '../assets/Images/Logos/Logo2.jpeg';
import logo3 from '../assets/Images/Logos/Logo3.jpg';
import logo4 from '../assets/Images/Logos/Logo4.png';
import logo5 from '../assets/Images/Logos/Logo5.png';
import logo6 from '../assets/Images/Logos/Logo6.png';

//Review Images
import reviewImg1 from '../assets/All/Picflow Images Dec 11/heres-to-love-and-happily-ever-after-cropped-shot-2025-04-06-08-43-11-utc.webp';
import reviewImg2 from '../assets/All/Picflow Images Dec 11/live-for-the-moments-you-cant-put-into-words-2025-04-06-08-44-17-utc.webp';

const Portfolio_Images = [portfolioImg1, portfolioImg2, portfolioImg3];
const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6];

// --- NEW DATA: MOMENT GALLERY --- //
const MOMENT_GALLERY_IMAGES = [
  gallery1, gallery2, gallery3,
  gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery1
];

//For BounceCards 
const images = [portfolioImg1, portfolioImg2, portfolioImg3, portfolioImg4, portfolioImg5];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

// --- NEW DATA: FAQs ---
const FAQ_DATA = [
  {
    question: "Which of the following are included in the starting price?",
    answer: "Our foundational package is meticulously crafted to ensure comprehensive coverage of your special day. It prominently features the invaluable addition of a 2nd Shooter, ensuring that every significant angle and fleeting moment is expertly captured from multiple perspectives. This dedicated second photographer allows us to maximize our coverage during key events, from the simultaneous preparations of both partners to capturing candid reactions during the ceremony, guaranteeing a richer and more complete visual narrative of your celebration."
  },
  {
    question: "What primary photographic style do you identify with?",
    answer: "We believe that the most compelling wedding stories emerge from a blend of approaches, and as such, our primary photographic style is a harmonious fusion of Contemporary artistry, authentic Photojournalism, and timeless Traditional elegance. Our Contemporary eye allows us to create modern, visually striking compositions that feel fresh and artistic. Simultaneously, our Photojournalism approach ensures that the genuine, unscripted emotions and candid intersections of your day are beautifully preserved without interference, telling your unique story as it naturally unfolds. Finally, we integrate Traditional elements, providing you with those essential, classic portraits and group shots that will remain cherished heirlooms for generations to come. This multi-faceted methodology ensures a diverse, comprehensive, and deeply personal collection of images."
  },
  {
    question: "What photography items do you offer?",
    answer: "We are committed to delivering your precious memories in a variety of exquisite formats, ensuring you can cherish and share them in the way that best suits you. Our offerings include beautifully curated Albums, meticulously designed to tell the story of your day in a tangible, heirloom-quality format. We also provide professional Prints, allowing you to adorn your home with your favorite images in stunning clarity and vibrancy. For your convenience and flexibility, high-resolution Digital Files of your entire collection are provided, perfect for sharing online and creating your own prints. Furthermore, we include Proofs, which are typically watermarked images allowing you to review and select your final images before delivery, ensuring your complete satisfaction with the finished collection."
  },
  {
    question: "Which of the following are included in the price of your most popular wedding package?",
    answer: "Our most sought-after wedding package is designed to provide you with truly comprehensive coverage and exceptional deliverables. This popular choice thoughtfully includes the invaluable presence of a 2nd Shooter, ensuring a wider range of captured moments, diverse perspectives, and full coverage of both partners' preparations. Beyond the extensive photography, this package also features meticulously crafted Albums. These are not just collections of photos, they are bespoke, heirloom-quality storybooks, designed to beautifully encapsulate the essence and emotion of your wedding day, allowing you to relive those precious memories tangibly for generations to come."
  },
  {
    question: "What photography services do you offer?",
    answer: "Our commitment to quality extends beyond just capturing beautiful moments; it also encompasses delivering your cherished memories in the most versatile and accessible formats. Among our core photography services, we proudly offer High-Res Images. This means you will receive your entire curated collection of photographs in a high-resolution digital format, perfect for large-scale printing, creating personalized keepsakes, and ensuring future-proof access to your precious visuals. We believe that receiving these high-quality digital files provides you with the ultimate flexibility and freedom to enjoy and share your wedding story without compromise."
  }
];

// --- NEW DATA: STATS ---
const STATS_DATA = [
  { number: "10", label: "Years Experience" },
  { number: "20k+", label: "Photo Delivered" },
  { number: "300+", label: "Events Captured" },
  { number: "8", label: "International Awards" }
];

// --- GRID REVIEWS DATA ---
const GRID_REVIEWS = [
  {
    id: 1,
    name: "Sarah & Matthew",
    image: gallery1,
    quote: "It seemed like every time I turned around at the wedding, or had a special moment, there was someone on his team there ready to document it.",
    body: "Photography was one of the least stressful parts of wedding planning for me and my husband, thanks to the Guy Heart Photography Team! My husband wanted “not super cheesy” photos, and it was clear from the moment I met with Guy that he would play off our personalities to take exactly the kind of photos we wanted.\n\nWhen the wedding coordinator at our venue said she used Guy for her own wedding, that sealed the deal for me — no better endorsement than someone who sees wedding photographers on a daily basis!\n\nGuy and his team are super talented. It rained on our garden wedding, and even though none of the pictures I thought I would have were possible to take, I still ended up with hundreds of photos I absolutely love. He was very quick to reply to every email, and we got our pictures so fast! The video came out awesome too! :)"
  },
  {
    id: 2,
    name: "Anna & Patrick",
    image: gallery2,
    quote: "Photography can be expensive if you're budgeting, but it is WELL worth the money because they will be with you forever.",
    body: "“They came out better than I could have ever expected.” There is not enough I could say about my experience with Guy Heart Photography and his team. Guy was wonderful to work with from the day I met him, until the day I received my pictures.\n\nHe was fast to respond to all my emails and questions, and never left me feeling stressed or worried. On the day of my wedding, he was on time, prepared and made me feel at ease. I’m not one who loves to smile ALL day and take a million pictures, but I never felt like it was too much or I was on stage the entire time.\n\nNow on to the most important thing… actually seeing the pictures. I was floored! Our family and friends are raving about them. I would recommend Guy and his team to anyone and everyone."
  },
  {
    id: 3,
    name: "Amanda & Joseph",
    image: gallery3,
    quote: "We have so many beautiful pictures that we had trouble choosing which ones should go into our album.",
    body: "“It’s THE most important decision – those pictures are with you forever!” I was nervous to hire a photographer for our wedding because it’s THE most important decision.\n\nSome of the photographers I interviewed acted like they were too talented to hear what I envisioned, but Guy was sweet, patient and open to hearing what I wanted. We tried him out with our engagement pictures first and it went perfectly.\n\nGuy delivered more than just good pictures. He was organized and calmly directed our family and wedding party during the posed pictures (so I didn’t have to!). He really does accommodate what the bride wants and does his best to keep you relaxed so you can enjoy the day."
  },
  {
    id: 4,
    name: "Jonathan & Rachel",
    image: gallery4,
    quote: "The one thing everyone says they wish they did better was the pictures... I however do not!",
    body: "Guy was amazing at making sure every angle of the wedding was covered. From the 4 photographers to the videographer who seemed to capture every moment of the wedding and cut it together in a fun way that we do not just want to watch the video twice and put it away.\n\nBecause of all this we can look back fondly on all the amazing photos Guy and his team took.\n\nGuy was extremely accommodating with picking dates for setting up the engagement shoot, as well as informative when helping us plan out our photo and family schedule for the day of the wedding. I would highly recommend Guy Heart Photography as he is truly a professional and a great photographer."
  },
  {
    id: 5,
    name: "Noah & Chloe",
    image: gallery5,
    quote: "All of our guests still can't stop talking about how beautiful our pictures came out.",
    body: "We do not have enough nice things to say about Guy and the photography/videography services him and his team provided us the day of our wedding.\n\nGuy was very professional, easy to be around, and so much fun to work with. We received our photos and videos very soon after the wedding, we were so happy with his turnaround time.\n\nHe is worth...\n“We would recommend Guy Heart Photography to everyone.”"
  },
  {
    id: 6,
    name: "Oliver & Noon",
    image: gallery6,
    quote: "His work speaks for itself but I think it was his demeanor that made the whole experience worth the money.",
    body: "Guy Heart was such a pleasure to work with. My wedding preparations and planning came with some inevitable stress but everything having to do with the photography was so relaxed and easy.\n\nGuy Heart is sweet, cool, calm, and warm in nature – so easy to speak to and he listens carefully and understands exactly what your vision is. He has a natural, raw talent that comes alive when you get your pictures.\n\nI’m not sure what packages he offers now, but our package came with a complimentary engagement shoot which was a fun morning out in the city where he casually followed my husband (then fiancé) around – it was playful, sporadic, fun, and beautiful. He’s so awesome!"
  },
];

// --- HELPER COMPONENT: BlurImage ---
const BlurImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`bg-gray-200 overflow-hidden relative ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-110'}`}
      />
    </div>
  );
};


// --- HELPER COMPONENT: FAQ Accordion Item ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div variants={itemVariant} className="border-b border-gray-200 last:border-none">
      <button
        className="w-full text-left py-4 md:py-6 flex justify-between items-start md:items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-serif text-[#7a93a5] text-base md:text-xl group-hover:text-amber-400 transition-colors duration-300 pr-4 leading-tight">
          {question}
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-5 h-5 text-amber-400 flex-shrink-0 mt-1 md:mt-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="font-serif text-[#7a93a5] text-sm md:text-md pr-0 md:pr-8 leading-relaxed">{answer}</p>
      </div>
    </motion.div>
  );
};

const Home = () => {


  const bounceCardRef = useRef(null);

  const isBounceCardInView = useInView(bounceCardRef, { once: true, margin: "-200px" });

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <main className="flex-grow bg-white overflow-x-hidden">
      <Heroslider />

      {/* SECTION 1: INTRO */}
      <section className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Animated Header */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="mb-8 md:mb-12 space-y-2"
          >
            <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] text-[#D4AF37] font-medium leading-tight">Destination Wedding Photographer</h1>
            <h2 className="text-2xl md:text-4xl font-['Playfair_Display'] text-[#D4AF37]">In Thailand</h2>
            <p className="text-gray-400 text-xs md:text-sm mt-4 tracking-wide uppercase font-sans">Operating across this beautiful country</p>
          </motion.div>

          {/* BOUNCE CARD SECTION - NOW TRIGGERED ON SCROLL */}
          <div className="pb-10">
            <div 
              ref={bounceCardRef} 
              className="w-full flex justify-center items-center mt-10 min-h-[250px]"
            >
              {isBounceCardInView && (
                <BounceCards
                  className="custom-bounceCards mb-2"
                  images={images}
                  containerWidth={500}
                  containerHeight={250}
                  animationDelay={1}
                  animationStagger={0.3}
                  easeType="elastic.out(1, 0.5)"
                  transformStyles={transformStyles}
                  enableHover={true}
                />
              )}
            </div>
          </div>


          {/* Animated Text Block */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="max-w-3xl mx-auto space-y-6 md:space-y-8"
          >
            <p className="font-serif text-gray-500 leading-relaxed text-sm md:text-base px-2 md:px-4">As a dedicated team of professional photographers, we specialize in capturing the genuine essence of your most significant life moments. With over a decade of experience, we transform your precious occasions into enduring visual narratives that you'll cherish for a Forever.</p>
            <div className="flex justify-center gap-6 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-amber-400 cursor-pointer transition-colors"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CAPTURED EMOTIONS */}
      <section className="py-12 md:py-16 bg-[#fffaf5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center mb-16 md:mb-20 relative">
            
            {/* Image Slide In Left */}
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInLeft}
               className="w-full md:w-[55%] h-[400px] md:h-[500px] z-0"
            >
              <BlurImage src={LaughingWoman} alt="Bride Laughing" className="w-full h-full shadow-lg" />
            </motion.div>

            {/* Text Box Slide In Right */}
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInRight}
               className="w-[90%] md:w-[40%] bg-[#7a93a5] text-white p-8 md:p-12 rounded-lg shadow-xl z-10 mt-[-50px] md:mt-0 md:-ml-12 relative"
            >
              <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-4 md:mb-6">“Captured <span className="text-amber-400">emotions</span>. Evocative tones.”</h3>
              <p className="font-sans text-xs md:text-sm leading-relaxed opacity-90 mb-6 md:mb-8">As a visual storyteller, We are driven by documenting authentic connections. As a creative, We are fascinated by the interplay of shadow and form. Below are some of our most cherished images illustrating genuine emotions and evocative tones from various locations.</p>
              <p className="font-serif text-sm text-right opacity-80">— Guy Heart Photography</p>
            </motion.div>
          </div>

          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
             className="text-center pt-8 border-t border-gray-200"
          >
            <motion.h4 variants={fadeInUp} className="text-[#7a93a5] uppercase tracking-widest font-serif text-sm mb-10">Featured On</motion.h4>
            <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70">
              {LOGOS.map((logo, index) => (
                <motion.div variants={fadeInUp} key={index} className="flex justify-center">
                  <img src={logo} alt={`Featured Logo ${index + 1}`} className="h-8 md:h-20 w-30 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: OUR GALLERY */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-[#D4AF37] font-medium mb-6">Our Gallery</h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-serif">Our gallery showcases the heartfelt moments, quiet details, and genuine emotions that make every wedding unique.</p>
          </motion.div>
          
          {/* Staggered Grid */}
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            <motion.div variants={fadeInUp} className="sm:col-span-2 md:col-span-1 md:row-span-2 h-[400px] md:h-auto group relative"><BlurImage src={gallery1} alt="Wedding Couple" className="w-full h-full group-hover:scale-102 duration-300" /></motion.div>
            <motion.div variants={fadeInUp} className="sm:col-span-2 md:col-span-2 h-[300px] group relative"><BlurImage src={gallery2} alt="Wedding Details" className="w-full h-full group-hover:scale-102 duration-300" /></motion.div>
            <motion.div variants={fadeInUp} className="sm:col-span-2 md:col-span-2 h-[300px] group relative"><BlurImage src={gallery3} alt="Traditional Wedding" className="w-full h-full group-hover:scale-102 duration-300" /></motion.div>
            <motion.div variants={fadeInUp} className="h-[300px] group relative"><BlurImage src={gallery4} alt="Gallery item" className="w-full h-full group-hover:scale-102 duration-300" /></motion.div>
            <motion.div variants={fadeInUp} className="h-[300px] group relative"><BlurImage src={gallery5} alt="Gallery item" className="w-full h-full group-hover:scale-102 duration-300" /></motion.div>
            <motion.div variants={fadeInUp} className="h-[300px] group relative"><BlurImage src={gallery6} alt="Gallery item" className="w-full h-full group-hover:scale-102 duration-300" /></motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center">
            {/* UPDATED: Changed Button to Link */}
            <Link to="/portfolio" className="bg-[#7a93a5] text-white font-sans text-sm tracking-widest px-10 py-4 hover:bg-[#607d8b] transition-colors duration-300 shadow-md inline-block">
              VIEW OUR GALLERY
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: SPECIAL GIFT */}
      <section className="w-full flex flex-col md:flex-row h-auto md:h-[650px] overflow-hidden">
        {/* Left Side (Text) Slides Right */}
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
           className="w-full md:w-1/2 bg-[#ecf0f3] flex flex-col justify-center items-center text-center p-12 md:p-16 order-2 md:order-1"
        >
          <h2 className="text-2xl md:text-4xl font-serif text-[#7a93a5] mb-8 leading-snug">A Special <span className="text-amber-400 font-bold">Gift</span> From Guy <br /> Heart Photography</h2>
          <motion.div variants={scaleUp} className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 relative">
            <img src={gallery7} alt="Wedding Rings Detail" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <p className="text-[#8fa3b0] font-serif text-lg md:text-xl mb-10 max-w-sm leading-relaxed"><span className="text-amber-400 font-bold">FREE</span> Digital Wedding Album when you book a photo/video package</p>
          {/* UPDATED: Changed Button to Link */}
          <Link to="/portfolio" className="bg-[#7a93a5] text-white font-sans text-sm tracking-widest px-10 py-4 hover:bg-[#607d8b] transition-colors duration-300 shadow-md inline-block">
            View Full Album
          </Link>
        </motion.div>

        {/* Right Side (Image) Slides Left */}
        <motion.div 
           initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
           className="w-full md:w-1/2 h-[400px] md:h-auto relative order-1 md:order-2"
        >
          <BlurImage src={gallery8} alt="Bride holding flowers" className="w-full h-full" />
        </motion.div>
      </section>

      {/* SECTION 5: SERVICES SLIDER */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <ServicesSlider />
      </motion.div>

      {/* SECTION 6: FEATURED REVIEWS */}
      <section className="bg-[#7a93a5] pt-16 md:pt-24 pb-0">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-16 px-4"
          >
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-white font-medium tracking-wide mb-6">WHAT OUR COUPLES SAY</h2>
            <p className="text-white/80 text-xs md:text-sm font-sans max-w-2xl mx-auto leading-relaxed tracking-wider">Heartfelt stories shared by the people behind the moments we captured — a reflection of the love, trust, and memories that made their day unforgettable.</p>
          </motion.div>
          
          {/* Review 1 */}
          <div className="flex flex-col md:flex-row w-full overflow-hidden">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
              className="w-full md:w-1/2 h-[400px] md:h-[650px] relative"
            >
              <BlurImage src={reviewImg1} alt="Happy Wedding Couple" className="w-full h-full rounded-none md:rounded-4xl" />
            </motion.div>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
              className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16"
            >
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-md relative">
                <h3 className="text-amber-400 font-['Playfair_Display'] text-xl md:text-2xl leading-relaxed mb-6">“Guy Heart Photography Team knew what they were doing and did an amazing job guiding us through the entire evening.”</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-sans">We were referred to Guy Heart Photography from a friend, and liked Guy Heart Photography right from the start. They are true professionals: arrived early, interacted well with the guests, and always had the cameras positioned perfectly to get the best shots without interfering.</p>
                <p className="text-[#7a93a5] font-bold text-sm mb-6 uppercase tracking-wider">Highly recommended!</p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-['Playfair_Display'] text-slate-600 font-bold text-lg mb-2">Lucus & Emily</p>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Review 2 */}
          <div className="flex flex-col-reverse md:flex-row w-full overflow-hidden">
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}
               className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16"
            >
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl max-w-md relative">
                <h3 className="text-amber-400 font-['Playfair_Display'] text-xl md:text-2xl leading-relaxed mb-6">“Guy Heart Photography Team was absolutely terrific. They are an incredibly talented photography team.”</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 font-sans">And their pictures were absolutely stunning! The Guy Heart Photography Team was also a pleasure to work with--they showed up on time, were great at coordinating everything the day of the wedding and consistently delivered on everything they promised.</p>
                <p className="text-[#7a93a5] font-bold text-sm mb-6 uppercase tracking-wider">Highly recommended!</p>
                <div className="border-t border-gray-100 pt-6">
                  <p className="font-['Playfair_Display'] text-slate-600 font-bold text-lg mb-2">Daniel & Grace</p>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (<svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>))}
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
               initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}
               className="w-full md:w-1/2 h-[400px] md:h-[650px] relative"
            >
              <BlurImage src={reviewImg2} alt="Happy Wedding Couple" className="w-full h-full rounded-none md:rounded-4xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GRID REVIEWS */}
      <section className="bg-[#ecf0f3] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-12 md:mb-24"
          >
            <h3 className="text-[#7a93a5] font-serif text-xl md:text-3xl uppercase tracking-widest mb-2">WHAT OTHER COUPLES</h3>
            <h2 className="text-amber-400 font-serif text-2xl md:text-5xl font-bold">LOVED MOST ABOUT US?</h2>
          </motion.div>
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
             className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 md:gap-y-20"
          >
            {GRID_REVIEWS.map((review) => (
              <motion.div key={review.id} variants={fadeInUp}>
                <ReviewCard
                  name={review.name}
                  image={review.image}
                  quote={review.quote}
                  body={review.body}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          NEW SECTION: STATS
      ========================================= */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-amber-400 font-medium leading-tight">
              Helping Couples Bring to Life Their <br className="hidden md:block" /> Wedding Dream
            </h2>
          </motion.div>
          
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
             className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 text-center"
          >
            {STATS_DATA.map((stat, index) => (
              <motion.div variants={scaleUp} key={index} className="flex flex-col items-center">
                <span className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#7a93a5] font-bold mb-2">{stat.number}</span>
                <span className="font-serif text-gray-500 text-sm md:text-base tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          NEW SECTION: FAQs ACCORDION
      ========================================= */}
      <section className="py-16 md:py-24 bg-[#ecf0f3]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-amber-400 font-medium">FAQs</h2>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="bg-white rounded-lg shadow-lg p-6 md:p-12"
          >
            {FAQ_DATA.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          NEW SECTION: "A MOMENT TO REMEMBER" GALLERY
      ========================================= */}
      <section className="py-16 md:py-24 bg-[#fffaf5]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Header */}
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
             className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] text-[#7a93a5] font-medium mb-6">A Moment To Remember</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-serif">Your special day is more than a celebration—it’s a memory you’ll cherish forever. We capture every heartfelt moment so you can relive the joy again and again.</p>
          </motion.div>

          {/* 3x3 Grid */}
          <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}
             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12"
          >
            {MOMENT_GALLERY_IMAGES.map((img, index) => (
              <motion.div variants={fadeInUp} key={index} className="h-[300px] group relative">
                <BlurImage src={img} alt={`Gallery Moment ${index + 1}`} className="w-full h-full group-hover:scale-102 duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {/* UPDATED: Changed Button to Link */}
            <Link to="/portfolio" className="bg-[#7a93a5] text-white font-sans text-sm tracking-widest px-10 py-4 hover:bg-[#607d8b] transition-colors duration-300 shadow-md inline-block">
              OUR GALLERY
            </Link>
          </motion.div>
        </div>
      </section>
      
      <ContactSection/>

    </main>
  );
}

export default Home;