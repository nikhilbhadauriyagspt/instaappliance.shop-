import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { FaProjectDiagram, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <div className="inline-flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-full mb-6">
              <FaProjectDiagram className="text-primary text-xs" />
              <span className="text-primary text-[10px] font-black uppercase tracking-[3px]">Case Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight tracking-tighter uppercase">
              Recent <span className="text-secondary">Restoration</span> Success
            </h2>
          </div>
          
          {/* Soft Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
            {['All', 'Commercial', 'Residential', 'Electronics'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-500 ${
                  filter === cat 
                  ? 'bg-white text-primary shadow-soft scale-105' 
                  : 'text-slate-400 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Modern Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Link 
              key={project.id} 
              to={`/project/${project.id}`}
              className="group relative h-[450px] rounded-[48px] overflow-hidden shadow-soft hover:shadow-premium transition-all duration-700 border border-slate-100 bg-slate-50 block"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <img 
                src={project.img} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                alt={project.title}
              />
              
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-secondary font-black text-[10px] uppercase tracking-[4px] mb-4 block">
                    Case: {project.category}
                  </span>
                  <h3 className="text-white text-3xl font-black mb-6 tracking-tighter uppercase leading-none">{project.title}</h3>
                  <div className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-[3px]">
                     Examine Results <FaArrowRight className="text-secondary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
              
              {/* Identification Badge */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-widest text-primary shadow-soft border border-white group-hover:opacity-0 transition-all duration-500">
                REF: {project.id}00X
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-20 text-center">
           <Link to="/projects" className="inline-block px-12 py-6 bg-slate-50 border border-slate-100 text-primary rounded-[24px] font-black uppercase tracking-[4px] text-xs hover:bg-primary hover:text-white transition-all shadow-soft active:scale-95">
             Explore Full Repository
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
