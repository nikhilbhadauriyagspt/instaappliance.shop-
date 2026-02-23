import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our Projects | Success Stories | Insta Appliance</title>
        <meta name="description" content="Explore our portfolio of successful appliance repair projects. See how we've helped homeowners fix their essential machines." />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-white/60 text-[10px] font-black uppercase tracking-[4px]">Our Work</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Recent Repair <span className="text-indigo-400">Success</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            See how our team helped local families fix their broken appliances and get their homes back to normal.
          </p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="group relative bg-slate-50 rounded-[2.5rem] overflow-hidden p-8 flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 border border-transparent hover:border-slate-100"
              >
                {/* Subtle Image Background Reveal */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                  <img src={project.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt="" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                    <FiPlus size={24} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                    {project.shortDesc || "Professional repair and restoration work for essential home machines."}
                  </p>
                </div>

                <div className="relative z-10 pt-8 flex items-center justify-between border-t border-slate-200/50">
                  <span className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 group-hover:text-indigo-500 transition-colors">
                    Case Study
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <FiArrowRight />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
