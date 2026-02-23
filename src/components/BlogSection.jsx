import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogs';
import { FiArrowRight, FiCalendar, FiBookOpen } from 'react-icons/fi';

const BlogSection = () => {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden" id="blog">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Header - Simple & Elegant */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">News & Tips</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Helpful Repair <br/>
              <span className="text-indigo-600">Tips & News</span>
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="group flex items-center gap-3 text-slate-900 font-black uppercase tracking-widest text-[11px] border-b-2 border-slate-100 pb-2 hover:border-indigo-600 transition-all"
          >
            Read All Articles <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Blog Cards Grid - Modern Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {blogsData.slice(0, 3).map((blog) => (
            <Link 
              to={`/blog/${blog.id}`} 
              key={blog.id} 
              className="group flex flex-col"
            >
              {/* Image Container with Floating Badge */}
              <div className="relative rounded-[2.5rem] overflow-hidden mb-8 aspect-[4/3] shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-xl">
                   <span className="text-slate-900 text-[10px] font-black uppercase tracking-widest">
                     {blog.category || 'Maintenance'}
                   </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-5 text-slate-400">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                  <FiCalendar className="text-indigo-600" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                  <FiBookOpen className="text-indigo-600" />
                  5 Min Read
                </div>
              </div>

              {/* Blog Title - Simple & Large */}
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-6 group-hover:text-indigo-600 transition-colors duration-300">
                {blog.title}
              </h3>

              {/* Simple Arrow Link */}
              <div className="mt-auto inline-flex items-center gap-3 text-slate-400 group-hover:text-indigo-600 font-black text-[10px] uppercase tracking-[3px] transition-all">
                 Read Full Article <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Subscription Banner */}
        <div className="mt-24 p-8 md:p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black text-white mb-3">Want more tips?</h3>
                <p className="text-slate-400 font-medium">Get our best appliance care tips delivered to you.</p>
              </div>
              <div className="flex w-full md:w-auto items-center p-2 bg-white/5 border border-white/10 rounded-2xl">
                 <input 
                   type="email" 
                   placeholder="Your email address" 
                   className="bg-transparent border-none text-white text-sm px-4 focus:ring-0 w-full md:w-64 outline-none" 
                 />
                 <button className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-600 hover:text-white transition-all">
                    Join Us
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
