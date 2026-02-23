import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiShield, FiUserCheck, FiClock, FiCheck, FiArrowRight } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';

const About = () => {
  const { openBookingModal } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: <FiShield />,
      title: "Service Excellence",
      desc: "We adhere to strict manufacturer-mandated diagnostic protocols for every repair.",
      accent: "indigo"
    },
    {
      icon: <FiUserCheck />,
      title: "Certified Team",
      desc: "Our technicians are factory-trained professionals with deep expertise in all major brands.",
      accent: "indigo"
    },
    {
      icon: <FiClock />,
      title: "Reliable Response",
      desc: "We value your time, offering same-day service and prompt technical support.",
      accent: "indigo"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>About Us | Insta Appliance - Professional Repair Standards</title>
        <meta name="description" content="Learn about Insta Appliance's commitment to professional appliance repair standards, expert expertise, and transparent service delivery." />
        <link rel="canonical" href="https://instaappliance.shop/about" />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-white/60 text-[10px] font-black uppercase tracking-[4px]">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            About <span className="text-indigo-400">Insta Appliance</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Leading the industry with systematic support and professional-grade maintenance protocols for essential home equipment.
          </p>
        </div>
      </section>

      {/* Main Content Section - Restoring Original Text */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Side: Visual Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img
                  src="/banner/main-slide-1-2.jpg"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  alt="Insta Appliance Expert Team"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Who We Are</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                  Dedicated to <br />
                  <span className="text-indigo-600">Service Integrity</span>
                </h2>
              </div>

              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Insta Appliance was founded on the principle that modern household equipment requires a systematic, expert approach. We focus on delivering professional-grade maintenance and repair protocols that prioritize your safety and equipment performance.
              </p>

              <div className="grid gap-5">
                {[
                  "Verified manufacturer-grade diagnostic procedures",
                  "Transparent communication and fixed pricing",
                  "Fast, same-day response for all major brands",
                  "Commitment to long-term appliance efficiency"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group/list">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover/list:bg-emerald-600 group-hover/list:text-white transition-all">
                      <FiCheck size={16} strokeWidth={3} />
                    </div>
                    <span className="text-slate-700 font-bold text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Operational <span className="text-indigo-600">Principles</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">The core standards that guide our professional service delivery every single day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 text-slate-400 flex items-center justify-center text-3xl mb-8 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  {v.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{v.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full"></div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight tracking-tight relative z-10">
              Ready to Restore Your <br />
              <span className="text-indigo-400">Appliance Performance?</span>
            </h2>

            <div className="flex justify-center relative z-10">
              <button
                onClick={() => openBookingModal()}
                className="group inline-flex items-center gap-4 px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[12px] hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-xl shadow-indigo-600/20 active:scale-95"
              >
                Book Your Fix Today <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
