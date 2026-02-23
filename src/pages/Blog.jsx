import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogsData as blogs } from '../data/blogs';
import { FiCalendar, FiArrowRight, FiBookOpen } from 'react-icons/fi';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Blog | Helpful Appliance Repair Tips | Insta Appliance</title>
        <meta name="description" content="Read our latest blog posts for simple appliance repair tips, maintenance guides, and home care news." />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-white/60 text-[10px] font-black uppercase tracking-[4px]">Repair Insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Our Latest <span className="text-indigo-400">Articles</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Simple tips and expert news to help you keep your home appliances working perfectly for a long time.
          </p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {blogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="group flex flex-col">
                {/* Image Container */}
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

                {/* Blog Title */}
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-6 group-hover:text-indigo-600 transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Content Snippet */}
                <p className="text-slate-500 text-base mb-8 line-clamp-2 font-medium">
                  {blog.excerpt || "Learn more about high-quality appliance maintenance and expert repair solutions from our dedicated team."}
                </p>

                {/* Simple Arrow Link */}
                <div className="mt-auto inline-flex items-center gap-3 text-slate-400 group-hover:text-indigo-600 font-black text-[10px] uppercase tracking-[3px] transition-all">
                   Read Full Guide <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
