import React from 'react';
import { FiShield, FiDollarSign, FiZap, FiUserCheck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const WhyChooseUsSection = () => {
  const imgUrl = "/service-7.jpg";

  const reasons = [
    {
      icon: <FiShield />,
      title: "Safety & reliable service",
      desc: "Our service division follows strict safety protocols for all maintenance work."
    },
    {
      icon: <FiDollarSign />,
      title: "Affordable Pricing Plans",
      desc: "We offer transparent and competitive pricing for all residential solutions."
    },
    {
      icon: <FiZap />,
      title: "Systematic Support",
      desc: "Providing professional-grade maintenance for your essential home equipment."
    },
    {
      icon: <FiUserCheck />,
      title: "Expert Tech Team",
      desc: "Vetted professionals committed to delivering industrial-grade repair protocols."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Visual Frame */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-indigo-50 rounded-[3rem] -z-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img
                src={imgUrl}
                alt="Insta Appliance Expert Team"
                className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-slate-50 animate-float">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                     <FiShield size={24} />
                  </div>
                  <div>
                     <p className="text-slate-900 font-black text-lg leading-none">100% Safe</p>
                     <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Guaranteed Service</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Professional Content Area */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Trusted by Hundreds <br/>
                <span className="text-indigo-600">for Reliable Solutions</span>
              </h2>
            </div>

            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              We provide systematic support for residential appliances delivering professional-grade maintenance protocols for your essential home equipment.
            </p>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((item, index) => (
                <div key={index} className="flex flex-col gap-4 group/card">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/card:bg-indigo-600 group-hover/card:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-2 group-hover/card:text-indigo-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-600 transition-all shadow-xl active:scale-95"
              >
                Schedule Your Repair <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}} />
    </section>
  );
};

export default WhyChooseUsSection;
