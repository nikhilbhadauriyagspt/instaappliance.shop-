import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { FiArrowLeft, FiCheck, FiShield, FiClock, FiSettings, FiArrowRight, FiPlus } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.slug === id || s.id === parseInt(id));
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <Helmet>
           <title>Service Not Found - Insta Appliance</title>
        </Helmet>
        <div className="text-center px-6">
          <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">404</h2>
          <p className="text-slate-500 mb-8 font-bold uppercase tracking-widest text-sm">Service Not Found</p>
          <Link to="/services" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-xl">
            <FiArrowLeft /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>{service.title} | Insta Appliance - Professional Repair</title>
        <meta name="description" content={service.shortDesc} />
        <link rel="canonical" href={`https://instaappliance.shop/service/${service.slug}`} />
      </Helmet>
      
      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
           <Link to="/services" className="inline-flex items-center gap-3 text-indigo-400 font-black uppercase tracking-[3px] text-[10px] mb-10 hover:text-white transition-all">
             <FiArrowLeft /> Back to All Services
           </Link>
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
             {service.title} <span className="text-indigo-400">Repair</span>
           </h1>
           <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
             {service.shortDesc}
           </p>
        </div>
      </section>

      {/* Content Layout Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Side: Visual Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10 transform rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img 
                  src={service.image} 
                  className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={service.title} 
                />
              </div>
              
              {/* Floating Trust Note */}
              <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 z-20 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                       <FiShield size={24} />
                    </div>
                    <div>
                       <p className="text-slate-900 font-black text-base leading-none">Original Parts</p>
                       <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">100% Guaranteed</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Side: Simple Summary */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-widest">Service Details</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
                  How We Help With <br/>
                  <span className="text-indigo-600">Your Appliance</span>
                </h2>
              </div>
              
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                {service.longDesc}
              </p>
              
              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <FiCheck size={14} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                <button 
                  onClick={() => openBookingModal(service.title)}
                  className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                >
                  Book This Service <FiPlus size={18} />
                </button>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-indigo-600 bg-white shadow-sm">
                      <FiClock size={20} />
                   </div>
                   <div>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Response Time</p>
                      <p className="text-sm font-black text-slate-900 leading-none">Under 2 Hours</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Process Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
           <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-16 tracking-tight">Our Simple <span className="text-indigo-600">Process</span></h3>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Diagnostic", desc: "We check the machine to find the real problem." },
                { title: "Plan", desc: "We explain what's wrong and give a fair price." },
                { title: "Fix", desc: "We fix it fast using only original spare parts." },
                { title: "Test", desc: "We test everything to make sure it works perfect." }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
                   <div className="text-indigo-100 font-black text-5xl mb-6 group-hover:text-indigo-600 transition-colors">0{i+1}</div>
                   <h4 className="text-xl font-black text-slate-900 mb-3">{step.title}</h4>
                   <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Guarantee & CTA Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full"></div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight tracking-tight relative z-10">
              Get Your Machine Working <br />
              <span className="text-indigo-400">Like New Again</span>
            </h2>

            <div className="flex justify-center relative z-10">
              <button
                onClick={() => openBookingModal(service.title)}
                className="group inline-flex items-center gap-4 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-xl shadow-indigo-600/20 active:scale-95"
              >
                Book Your Repair Now <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
