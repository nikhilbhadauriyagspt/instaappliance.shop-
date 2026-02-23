import React, { useState } from 'react';
import { FaPlus, FaMinus, FaLightbulb } from 'react-icons/fa';

const faqs = [
  {
    question: "What types of appliances do you repair?",
    answer: "We specialize in premium home appliances including advanced washing machines, refrigerators, high-efficiency AC units, smart televisions, and luxury kitchen equipment. Our technicians are certified for all major global brands."
  },
  {
    question: "Do you offer same-day priority service?",
    answer: "Yes, for requests made before 12 PM, we offer same-day priority diagnostics. Our technicians typically arrive with standard spare parts to ensure a first-visit resolution whenever possible."
  },
  {
    question: "Are your technicians manufacturer-certified?",
    answer: "Every member of our expert team undergoes rigorous factory-grade training and background verification. We maintain high standards of service excellence and professional conduct."
  },
  {
    question: "What is your warranty policy on repairs?",
    answer: "We provide an industry-leading 90-day warranty on all repairs and factory-original spare parts replaced by our team."
  },
  {
    question: "Are there any hidden service charges?",
    answer: "Transparency is our core value. We provide a comprehensive digital estimate after diagnosis. Work only begins after your explicit approval of the costs involved."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="faq">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6">
                <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Information Hub</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-[1.1] tracking-tighter">
                Solutions to Your <span className="text-secondary">Questions</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                Transparent answers regarding our high-end appliance repair standards, coverage, and professional guarantees.
              </p>

              <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-4">
                    <FaLightbulb />
                  </div>
                  <h4 className="text-lg font-black text-primary mb-2">Need a custom quote?</h4>
                  <p className="text-slate-400 text-sm font-medium mb-6">Our experts are ready to assist with complex service inquiries.</p>
                  <a href="tel:+15305544817" className="inline-flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-[10px] hover:gap-4 transition-all">
                    Connect With Us &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`group rounded-[32px] border transition-all duration-500 overflow-hidden ${
                    activeIndex === index 
                      ? 'bg-primary border-primary shadow-xl shadow-primary/20' 
                      : 'bg-white border-slate-100 hover:border-secondary/30'
                  }`}
                >
                  <button 
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span className={`text-lg font-black tracking-tight transition-colors duration-500 ${
                      activeIndex === index ? 'text-white' : 'text-primary'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeIndex === index ? 'bg-secondary text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-secondary/10 group-hover:text-secondary'
                    }`}>
                      {activeIndex === index ? <FaMinus size={10} /> : <FaPlus size={10} />}
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`p-8 pt-0 font-medium leading-relaxed transition-colors duration-500 ${
                      activeIndex === index ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      <div className="h-px w-full bg-white/10 mb-6"></div>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
