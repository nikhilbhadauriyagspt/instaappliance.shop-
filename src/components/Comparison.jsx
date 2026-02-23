import React from 'react';
import { FaCheck, FaTimes, FaShieldAlt } from 'react-icons/fa';

const Comparison = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
           <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Service Distinction</span>
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight tracking-tighter uppercase">
             Our Professional <span className="text-secondary">Commitment</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 bg-slate-50 rounded-[60px] overflow-hidden border border-slate-100 shadow-soft">
           
           <div className="p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-slate-200 opacity-60 grayscale">
              <h4 className="text-2xl font-black text-slate-400 mb-10 tracking-tighter uppercase">Local Repair Service</h4>
              <ul className="space-y-8">
                 {[
                   "Unverified spare parts",
                   "Inconsistent arrival times",
                   "Limited diagnostic tools",
                   "Potential hidden fees",
                   "Varying warranty terms"
                 ].map((t, i) => (
                   <li key={i} className="flex items-center gap-5">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 shrink-0">
                         <FaTimes size={12} />
                      </div>
                      <span className="text-slate-500 font-medium">{t}</span>
                   </li>
                 ))}
              </ul>
           </div>

           <div className="p-12 md:p-20 bg-primary relative group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-10">
                 <h4 className="text-2xl font-black text-white tracking-tighter uppercase">The VISTA Standard</h4>
                 <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-white shadow-xl">
                    <FaShieldAlt />
                 </div>
              </div>

              <ul className="space-y-8">
                 {[
                   "Verified manufacturer-grade components",
                   "Prompt service appointment response",
                   "Systematic expert diagnostics",
                   "Upfront digital service estimates",
                   "Standard labor warranty on repairs"
                 ].map((t, i) => (
                   <li key={i} className="flex items-center gap-5">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white shrink-0 shadow-lg">
                         <FaCheck size={12} />
                      </div>
                      <span className="text-slate-300 font-bold uppercase text-[11px] tracking-widest">{t}</span>
                   </li>
                 ))}
              </ul>

              <div className="mt-16 pt-10 border-t border-white/5">
                 <p className="text-white/40 text-[10px] font-black uppercase tracking-[4px]">Verified Service Protocols</p>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;