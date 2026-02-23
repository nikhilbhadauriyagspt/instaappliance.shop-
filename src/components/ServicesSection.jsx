import React from 'react';
import { servicesData } from '../data/services';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white font-sans" id="services">
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        
        {/* Simple & Bold Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Complete Repair Solutions <br/>
            <span className="text-indigo-600">For Your Every Need</span>
          </h2>
        </div>

        {/* 4-Column Interactive Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <Link 
              key={service.id}
              to={`/service/${service.slug}`}
              className="group relative h-[400px] bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 p-8 flex flex-col justify-between transition-all duration-500 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              {/* Premium Image Background - Always Visible */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-indigo-900/80 z-10 transition-colors duration-500 backdrop-blur-[0.5px]"></div>
                <img src={service.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
              </div>

              {/* Card Top: Number & Icon */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="text-white font-black text-4xl opacity-20">
                  0{index + 1}
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center text-lg group-hover:bg-indigo-600 transition-all duration-500 border border-white/20">
                  <FiPlus />
                </div>
              </div>

              {/* Card Bottom: Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-200 text-xs font-medium leading-relaxed mb-6 line-clamp-2">
                  {service.shortDesc}
                </p>
                <div className="flex items-center gap-2 text-indigo-400 group-hover:text-white font-black text-[10px] uppercase tracking-widest transition-colors duration-500">
                  View Service <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Contact Footer */}
        <div className="mt-20 p-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[3rem] shadow-xl">
           <div className="bg-slate-900 rounded-[2.9rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black text-white mb-4">Need help with something else?</h3>
                <p className="text-slate-400 font-medium">We fix almost any appliance. Just ask us!</p>
              </div>
              <Link 
                to="/contact" 
                className="px-10 py-5 bg-white text-slate-900 font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-indigo-600 hover:text-white transition-all active:scale-95"
              >
                Message Us
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
