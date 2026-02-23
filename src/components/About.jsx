import React from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-24 bg-white font-sans" id="about">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="border border-slate-100 rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Visual Area */}
          <div className="w-full lg:w-5/12">
            <div className="rounded-[2rem] overflow-hidden border border-slate-50">
                <img
                  src="/banner/about.jpg"
                  className="w-full h-auto object-cover"
                  alt="Insta Appliance Team"
                />
            </div>
          </div>

          {/* Text Area */}
          <div className="w-full lg:w-7/12 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-4">
                 <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                 <span className="text-[10px] font-bold uppercase tracking-widest">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Quality Service For Your <br/>
                <span className="text-indigo-600">Home Appliances</span>
              </h2>
            </div>

            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
              We are a dedicated team of professionals providing reliable and high-quality repair services. Our focus is on delivering service excellence and ensuring your essential home equipment is fixed right the first time.
            </p>

            {/* Original Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
              {[
                "Certified and highly skilled expert team",
                "Transparent pricing with no hidden charges",
                "Prompt and dependable same-day service",
                "Genuine spare parts with quality assurance"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <FiCheck size={12} strokeWidth={4} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-4 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[2px] text-[11px] hover:bg-indigo-600 transition-all active:scale-95"
              >
                Discover Our Mission
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
