import React from 'react';
import { FiShield, FiZap, FiSettings, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';

const highlights = [
  {
    id: "01",
    icon: <FiShield />,
    title: "Warranty",
    label: "45-Day Secure Cover",
    desc: "Every repair is backed by our signature peace-of-mind warranty program."
  },
  {
    id: "02",
    icon: <FiZap />,
    title: "Speed",
    label: "Same-Day Response",
    desc: "Rapid deployment of technicians within hours of your service request."
  },
  {
    id: "03",
    icon: <FiSettings />,
    title: "Quality",
    label: "Original Spares",
    desc: "We exclusively use manufacturer-certified parts for all installations."
  },
  {
    id: "04",
    icon: <FiCheckCircle />,
    title: "Expertise",
    label: "Certified Engineers",
    desc: "Vetted professionals with specialized training in high-end appliances."
  }
];

const Highlights = () => {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden font-sans">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-start"
            >
              {/* Vertical Index Number */}
              <div className="absolute -left-8 top-0 text-slate-100 font-black text-6xl lg:text-7xl leading-none select-none transition-colors group-hover:text-indigo-50">
                {item.id}
              </div>

              <div className="relative pl-4 space-y-6">
                {/* Icon in Modern Frame */}
                <div className="relative">
                   <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-sm">
                      {React.cloneElement(item.icon, { size: 22 })}
                   </div>
                   <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <FiArrowUpRight className="text-indigo-600" />
                   </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[2px] rounded-full">
                    {item.title}
                  </span>
                  <h4 className="text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Animated Connector Line */}
                <div className="w-8 h-1 bg-slate-100 group-hover:w-20 group-hover:bg-indigo-600 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Progress Line at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-50 overflow-hidden">
         <div className="h-full bg-indigo-600 w-1/4 animate-slide-right"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Highlights;
