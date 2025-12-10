import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from './BlogData'; 

const BlogDetail = () => {
  const { id } = useParams();
  
  // FIND THE SPECIFIC POST BASED ON ID
  const post = blogData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Re-run if ID changes

  if (!post) {
    return <div className="text-center py-24 font-serif text-slate-400">Post not found</div>;
  }

  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } };

  return (
    <motion.article 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-[#fdfdfc] min-h-screen pt-24 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center text-slate-400 hover:text-amber-400 transition-colors mb-12 font-sans text-sm tracking-wide uppercase">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          Back to Journal
        </Link>

        {/* Dynamic Header */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <div className="flex justify-center gap-2 mb-6">
                    <span className="bg-amber-100 text-amber-600 px-3 py-1 text-xs uppercase tracking-widest rounded-full">{post.category}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif text-[#7a93a5] leading-tight mb-6">
                    {post.title}
                </h1>
                <div className="text-slate-400 font-serif italic text-sm">
                    Published on <time>{post.date}</time>
                </div>
            </motion.div>
        </header>

        {/* Dynamic Cover Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-[50vh] md:h-[75vh] rounded-lg overflow-hidden shadow-xl mb-24"
        >
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* DYNAMIC ZIG-ZAG SECTIONS */}
        <div className="space-y-24">
            
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="max-w-3xl mx-auto text-center font-serif text-slate-500 text-lg leading-9 italic mb-12"
            >
                "{post.excerpt}"
            </motion.div>

            {/* Map through the 'contentSections' of this specific post */}
            {post.contentSections?.map((section, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* TEXT */}
                        <motion.div 
                            className="w-full md:w-1/2"
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                            variants={isEven ? fadeInLeft : fadeInRight}
                        >
                            <h3 className="text-3xl font-serif text-[#7a93a5] mb-6">{section.subtitle}</h3>
                            <p className="font-serif text-slate-500 leading-8 text-justify md:text-left text-base md:text-lg">
                                {section.text}
                            </p>
                        </motion.div>

                        {/* IMAGE */}
                        <motion.div 
                            className="w-full md:w-1/2 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
                            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                            variants={isEven ? fadeInRight : fadeInLeft}
                        >
                            <img 
                                src={section.image} 
                                alt={section.subtitle} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                );
            })}
        </div>

        {/* Dynamic Tags */}
        <div className="mt-24 border-t border-slate-200 pt-12 max-w-4xl mx-auto text-center">
            <h4 className="font-sans text-sm font-bold text-slate-400 uppercase mb-6">Explore Related Tags</h4>
            <div className="flex flex-wrap justify-center gap-3">
                {post.tags?.map((tag, i) => (
                    <span key={i} className="text-xs font-sans tracking-wide text-slate-500 bg-slate-100 px-4 py-2 rounded-full cursor-pointer hover:bg-amber-400 hover:text-white transition-colors duration-300">
                        #{tag}
                    </span>
                ))}
            </div>
             <div className="mt-16">
                 <Link to="/contact" className="inline-block border border-[#7a93a5] text-[#7a93a5] px-12 py-4 font-sans text-sm tracking-widest hover:bg-[#7a93a5] hover:text-white transition-colors duration-300">
                    BOOK YOUR SESSION
                 </Link>
            </div>
        </div>

      </div>
    </motion.article>
  );
};

export default BlogDetail;