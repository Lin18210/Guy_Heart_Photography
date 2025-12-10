import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../Components/BlogData';

const Blog = () => {
  // Animation Variants (Same as before)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-[#fdfdfc] min-h-screen pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <h2 className="text-amber-400 font-serif text-lg tracking-widest uppercase mb-4">The Journal</h2>
        <h1 className="text-4xl md:text-6xl font-serif text-[#7a93a5] font-medium leading-tight">Stories & Inspiration</h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* MAPPING OVER THE IMPORTED DATA */}
          {blogData.map((post) => (
            <motion.article key={post.id} variants={cardVariants} className="group cursor-pointer flex flex-col h-full">
              <Link to={`/blog/${post.id}`} className="block h-full">
                
                {/* Cover Image */}
                <div className="overflow-hidden rounded-md shadow-sm mb-6 h-64 w-full relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-3 text-xs font-sans tracking-widest text-slate-400 uppercase">
                    <span className="text-amber-400 font-bold">{post.category}</span>
                    <span>•</span>
                    <time>{post.date}</time>
                  </div>
                  <h2 className="text-2xl font-serif text-[#7a93a5] mb-3 leading-snug group-hover:text-slate-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 font-serif text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block border-b border-amber-400 pb-1 text-amber-500 font-sans text-xs tracking-widest uppercase hover:text-amber-600 transition-colors">
                      Read Story
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Blog;