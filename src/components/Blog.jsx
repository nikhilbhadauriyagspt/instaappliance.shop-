import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { FaCalendarAlt, FaArrowRight, FaTag } from 'react-icons/fa';

const Blog = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="blog">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Expert Insights</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tight">
              Maintenance Tips & <br /><span className="text-secondary">Industry News</span>
            </h2>
          </div>
          <Link to="/blog" className="group flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100 text-primary font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all">
            Explore All Posts <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <article
              key={blog.id}
              className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:shadow-premium transition-all duration-500 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={blog.image}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  alt={blog.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Date Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">{blog.date}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-10 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-secondary text-[10px] font-black uppercase tracking-[2px] mb-4">
                  <FaTag size={10} />
                  <span>Expert Guide</span>
                </div>

                <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-secondary transition-colors leading-tight tracking-tight">
                  {blog.title}
                </h3>

                <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed line-clamp-3">
                  {blog.shortDesc}
                </p>

                <div className="mt-auto pt-8 border-t border-slate-50 flex justify-between items-center">
                  <Link
                    to={`/blog/${blog.id}`}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[2px] text-primary group-hover:gap-5 transition-all"
                  >
                    Read More <FaArrowRight className="text-secondary" />
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">New Update</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;