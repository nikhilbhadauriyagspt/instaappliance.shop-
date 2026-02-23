import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiWind, FiZap, FiSettings, FiCheckCircle, FiArrowLeft, FiPlus } from 'react-icons/fi';
import { useBooking } from '../../context/BookingContext';

const ClothesDryerRepair = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Heating Fix",
      desc: "Repairing elements to make sure your clothes dry fast and hot.",
      icon: <FiWind />
    },
    {
      title: "Drum Repair",
      desc: "Fixing belts and rollers so the drum spins smoothly again.",
      icon: <FiZap />
    },
    {
      title: "Panel Fix",
      desc: "Repairing timers and control buttons that are not working.",
      icon: <FiSettings />
    },
    {
      title: "Lint Clean",
      desc: "Complete cleaning of vent paths to prevent fire risks.",
      icon: <FiCheckCircle />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Clothes Dryer Repair | Fast & Honest Service | Insta Appliance</title>
        <meta name="description" content="Get your dryer fixed today. We repair all major brands with original parts and honesty. Same-day service available." />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[3px] hover:bg-white/10 transition-all"
          >
            <FiArrowLeft className="text-indigo-400" /> Back to All Services
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Clothes Dryer <span className="text-indigo-400">Repair</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Dry your clothes faster. We provide quick and honest repair for all types of residential dryers at your home.
          </p>
        </div>
      </section>

      {/* Main Detail Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left side: Visual Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img
                  src="/service-11.jpg"
                  className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Clothes Dryer Repair"
                />
              </div>
            </div>

            {/* Right side: Simple Content */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-4">
                   <span className="text-[10px] font-bold uppercase tracking-widest">Expert Care</span>
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                  Quick Solutions for <br/>
                  <span className="text-indigo-600">Your Laundry Care</span>
                </h2>
              </div>

              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                If your dryer is not heating, taking too long, or making strange noises, our skilled team can help. We fix motors, heating elements, and sensors quickly. We only use original spare parts to make sure your machine works perfectly for a long time.
              </p>

              <div className="grid gap-5">
                {[
                  "Quick check-up for all major dryer brands",
                  "Original parts with 100% guarantee",
                  "Fixed prices with no hidden charges",
                  "Friendly workers you can trust"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group/list">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/list:bg-emerald-600 group-hover/list:text-white transition-all">
                      <FiCheckCircle size={18} />
                    </div>
                    <span className="text-slate-700 font-bold text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => openBookingModal('Clothes Dryer')}
                  className="group inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-600 transition-all shadow-xl active:scale-95"
                >
                  Book Repair Now <FiPlus size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Clothes Dryer <span className="text-indigo-600">Help</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">We fix all kinds of problems to get your machine drying perfectly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
                <div className="w-16 h-16 rounded-3xl bg-slate-50 text-slate-400 flex items-center justify-center text-2xl mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  {v.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{v.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized CTA Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full"></div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight tracking-tight relative z-10">
              Is Your Dryer Not Heating? <br />
              <span className="text-indigo-400">Let Us Fix It Fast</span>
            </h2>

            <div className="flex justify-center relative z-10">
              <button
                onClick={() => openBookingModal('Clothes Dryer')}
                className="group inline-flex items-center gap-4 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-xl shadow-indigo-600/20 active:scale-95"
              >
                Schedule Repair Now <FiArrowLeft className="group-hover:-translate-x-2 transition-transform rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClothesDryerRepair;
