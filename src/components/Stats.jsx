import React from 'react';
import { FaUserShield, FaBolt, FaAward, FaHistory, FaCheckCircle, FaTools, FaShieldAlt, FaClock } from 'react-icons/fa';

const features = [
  { icon: <FaShieldAlt />, label: "Security", val: "Vetted", sub: "Expert Team" },
  { icon: <FaClock />, label: "Response", val: "Prompt", sub: "Service Visits" },
  { icon: <FaTools />, label: "Standard", val: "Verified", sub: "Spare Parts" },
  { icon: <FaCheckCircle />, label: "Warranty", val: "Labor", sub: "Coverage" }
];

const Stats = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none w-full text-center">
         <span className="text-[25vw] font-black text-primary tracking-tighter uppercase leading-none">TRUST</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-[24px] bg-white shadow-soft border border-white flex items-center justify-center text-secondary text-2xl mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[4px] mb-3 leading-none">{s.label}</p>
              <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tighter leading-none mb-3 uppercase">
                {s.val}
              </h3>
              <p className="text-[10px] font-bold text-secondary uppercase tracking-[2px] opacity-60">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;