import React from 'react';
import { FaClipboardList, FaSearch, FaTools, FaCheckDouble, FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    icon: <FaClipboardList />,
    title: "Schedule",
    subtitle: "Step 01",
    desc: "Use our intelligent booking system to select your appliance and preferred time slot."
  },
  {
    icon: <FaSearch />,
    title: "Diagnosis",
    subtitle: "Step 02",
    desc: "Our master technician performs a deep-scan to identify the core fault."
  },
  {
    icon: <FaTools />,
    title: "Precision Fix",
    subtitle: "Step 03",
    desc: "We execute the repair using factory-grade parts and advanced equipment."
  },
  {
    icon: <FaCheckDouble />,
    title: "Validation",
    subtitle: "Step 04",
    desc: "Rigorous testing ensures your appliance meets original performance standards."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative" id="process">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-black text-primary ">PROCESS</span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-full mb-6">
            <span className="text-primary text-[10px] font-black uppercase tracking-[3px]">Workflow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1] tracking-tight">
            How We Restore <span className="text-secondary">Excellence</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            A systematic approach to appliance repair, ensuring transparency and service perfection at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Step Card */}
                <div className="h-full bg-slate-50 border border-slate-100 rounded-[40px] p-10 hover:bg-white hover:shadow-premium transition-all duration-500 text-center flex flex-col items-center">

                  <div className="mb-8 relative">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center text-primary text-3xl group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                      {step.icon}
                    </div>
                    {/* Floating Step Number */}
                    <div className="absolute -top-4 -right-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                      {step.subtitle}
                    </div>
                  </div>

                  <h4 className="text-xl font-black text-primary mb-4 ">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  {/* Arrow for non-last items */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-slate-200 group-hover:text-secondary transition-colors group-hover:translate-x-2 duration-500">
                      <FaArrowRight size={20} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-slate-50 rounded-full border border-slate-100">
            <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-3">
              <p className="text-slate-400 text-sm font-bold tracking-tight">Need immediate expert assistance?</p>
              <a href="tel:+15305544817" className="px-6 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-[3px] rounded-full shadow-lg hover:bg-secondary transition-colors">
                Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
