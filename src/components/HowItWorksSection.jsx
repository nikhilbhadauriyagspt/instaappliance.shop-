import React from 'react';
import { FiSearch, FiTarget, FiSettings, FiCheckCircle, FiChevronRight } from 'react-icons/fi';

const HowItWorksSection = () => {
  const steps = [
    {
      id: "01",
      icon: <FiSearch />,
      title: "Inspection & Diagnosis",
      desc: "The technician inspects the appliance system to identify the root cause of the problem."
    },
    {
      id: "02",
      icon: <FiTarget />,
      title: "Fault Identification",
      desc: "Our experts pin-point the specific core issue and provide a detailed repair plan."
    },
    {
      id: "03",
      icon: <FiSettings />,
      title: "Repair or Replacement",
      desc: "We perform high-quality repairs or replace faulty parts with genuine factory components."
    },
    {
      id: "04",
      icon: <FiCheckCircle />,
      title: "Testing & Final Check",
      desc: "A rigorous post-repair test is conducted to ensure the appliance is working at peak efficiency."
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 font-sans overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Header - Restoring original tone */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 shadow-sm rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Shaping the Future Through <br/>
              <span className="text-indigo-600">Step-by-Step Innovation</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm lg:pb-2">
            We provide systematic support for residential appliances delivering professional-grade maintenance protocols.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              
              {/* Connection Line (Desktop Only) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-slate-200 z-0">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-200"></div>
                </div>
              )}

              <div className="relative z-10 space-y-8">
                {/* Icon Box */}
                <div className="relative">
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:-rotate-6 transition-all duration-500">
                    {React.cloneElement(step.icon, { size: 32 })}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px] font-black group-hover:bg-indigo-400 transition-colors">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Decorative Element */}
                <div className="w-8 h-1 bg-slate-100 rounded-full group-hover:w-full group-hover:bg-indigo-600 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-24 text-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-8 bg-white p-4 md:pl-10 md:pr-4 md:py-4 rounded-[2.5rem] border border-slate-100 shadow-xl">
              <span className="text-slate-900 font-black text-sm uppercase tracking-widest">Ready to experience professional repair?</span>
              <button 
                onClick={() => window.scrollTo(0, 0)}
                className="px-10 py-4 bg-indigo-600 text-white rounded-[1.8rem] font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all flex items-center gap-3 active:scale-95"
              >
                Schedule Now <FiChevronRight />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
