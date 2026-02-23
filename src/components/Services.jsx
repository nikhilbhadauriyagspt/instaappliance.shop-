import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import * as Icons from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const Services = () => {
  const { openBookingModal } = useBooking();
  return (
    <section className="py-24 bg-slate-50 relative" id="services">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tight">
              Comprehensive Repair <span className="text-secondary">Solutions</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-slate-500 font-medium mb-6 max-w-xs md:text-right">
              Precision diagnostics and expert repairs for all major household appliances.
            </p>
            <button 
              onClick={() => openBookingModal()}
              className="text-primary text-xs font-black uppercase tracking-[3px] border-b-2 border-secondary pb-1 hover:text-secondary transition-colors"
            >
              Custom Inquiries &rarr;
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = Icons[service.iconName] || Icons.FaTools;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-500 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Decorative background number */}
                <span className="absolute -top-4 -right-4 text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {index + 1}
                </span>

                <div className="relative z-10 h-full flex flex-col group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="text-xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                    {service.shortDesc}
                  </p>

                  <Link
                    to={`/service/${service.slug}`}
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[2px] text-primary group-hover:gap-5 transition-all"
                  >
                    View Details <Icons.FaArrowRight className="text-secondary" />
                  </Link>
                </div>

                {/* Hover Slide-up Image (Optional/Subtle) */}
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-primary/95 transition-transform duration-500 flex flex-col justify-center p-8 z-20">
                   <h4 className="text-white text-lg font-black mb-4">{service.title}</h4>
                   <ul className="space-y-2 mb-8">
                     {service.features?.slice(0,3).map((f, i) => (
                       <li key={i} className="text-white/70 text-xs flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-secondary"></div> {f}
                       </li>
                     ))}
                   </ul>
                   <Link
                    to={`/service/${service.slug}`}
                    className="w-full py-3 bg-secondary text-white rounded-xl text-center text-[10px] font-black uppercase tracking-widest"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Bar */}
        <div className="mt-24 pt-16 border-t border-slate-200">
           <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[4px] mb-10">We Repair All Major Brands</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-black text-primary tracking-tighter italic">SAMSUNG</span>
              <span className="text-2xl font-black text-primary tracking-tighter">LG</span>
              <span className="text-2xl font-black text-primary tracking-tighter">Whirlpool</span>
              <span className="text-2xl font-black text-primary tracking-tighter uppercase italic">Bosch</span>
              <span className="text-2xl font-black text-primary tracking-tighter">Dyson</span>
              <span className="text-2xl font-black text-primary tracking-tighter italic">MAYTAG</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;