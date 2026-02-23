import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData as blogs } from '../data/blogs';
import { FiCalendar, FiBookOpen, FiArrowLeft, FiTag } from 'react-icons/fi';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <div className="text-center">
          <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">404</h2>
          <p className="text-slate-500 mb-8 font-bold uppercase tracking-widest text-sm">Article Not Found</p>
          <Link to="/blog" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-xl">
            <FiArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>{blog.title} | Insta Appliance Blog</title>
        <meta name="description" content={blog.excerpt || blog.title} />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <FiArrowLeft className="text-indigo-400" /> Back to Articles
          </Link>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-8 max-w-5xl mx-auto leading-tight tracking-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 text-[11px] font-black uppercase tracking-[2px]">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-indigo-400" /> {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <FiTag className="text-indigo-400" /> {blog.category}
            </div>
            <div className="flex items-center gap-2">
              <FiBookOpen className="text-indigo-400" /> 5 Min Read
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Main Featured Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border-8 border-slate-50">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-auto object-cover max-h-[600px] transform hover:scale-105 transition-transform duration-1000" 
              />
            </div>

            {/* Article Content - Simple & Clean */}
            <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed space-y-8 prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-strong:text-slate-900 prose-a:text-indigo-600">
              <div dangerouslySetInnerHTML={{ __html: blog.longDesc }} />
            </div>

            {/* Bottom Footer Section for Blog */}
            <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <span className="text-slate-900 font-black text-[11px] uppercase tracking-widest">Article Tags:</span>
                <div className="flex gap-2">
                  {["Repair", "Maintenance"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border border-slate-100">{tag}</span>
                  ))}
                </div>
              </div>
              <Link 
                to="/blog" 
                className="group flex items-center gap-3 text-indigo-600 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-all"
              >
                Read More Guides <FiArrowLeft className="group-hover:-translate-x-2 transition-transform rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
