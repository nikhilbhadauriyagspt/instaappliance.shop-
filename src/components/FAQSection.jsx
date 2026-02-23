import React, { useState } from 'react';
import { FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const [openId, setOpenId] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "Which appliances do you fix?",
      answer: "We fix almost all home machines including washing machines, refrigerators, ACs, microwaves, and more. If it's a household machine, we can likely fix it!"
    },
    {
      id: 1,
      question: "How fast can you come to my home?",
      answer: "We offer same-day service! If you book in the morning, our technician can usually reach your home within 2 to 4 hours."
    },
    {
      id: 2,
      question: "Do you use original spare parts?",
      answer: "Yes, we only use 100% genuine and original parts from the manufacturers. This ensures your appliance lasts longer after the repair."
    },
    {
      id: 3,
      question: "Is there a warranty on the repair?",
      answer: "Absolutely. We give you a 90-day warranty on our service. If the same problem happens again, we will fix it for free."
    },
    {
      id: 4,
      question: "What are your service charges?",
      answer: "We offer fair and honest pricing. After checking your machine, our technician will give you a clear price before starting any work. No hidden fees."
    },
    {
      id: 5,
      question: "Are your workers experts?",
      answer: "Yes, all our technicians are highly skilled and have years of experience. They are friendly, professional, and will treat your home with respect."
    }
  ];

  const AccordionItem = ({ item, isOpen, toggle }) => (
    <div className={`border-b border-slate-100 transition-all duration-300 ${isOpen ? 'bg-indigo-50/30' : ''}`}>
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between py-6 px-4 md:px-8 text-left transition-all group"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
          {item.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600'}`}>
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 md:px-8 pb-8">
          <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-4xl">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white font-sans overflow-hidden" id="faq">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Header - Centered & Simple */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest">Questions & Answers</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
            Frequently Asked <br/>
            <span className="text-indigo-600">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">
            Find quick answers to your questions about our repair services.
          </p>
        </div>

        {/* Simple & Clean Accordion List */}
        <div className="max-w-4xl mx-auto border-t border-slate-100">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              item={faq}
              isOpen={openId === faq.id}
              toggle={() => setOpenId(openId === faq.id ? -1 : faq.id)}
            />
          ))}
        </div>

        {/* Bottom Help Trigger */}
        <div className="mt-20 text-center">
           <div className="inline-flex flex-col md:flex-row items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <span className="text-slate-600 font-bold">Still have more questions? We are here to help.</span>
              <Link 
                to="/contact" 
                className="group flex items-center gap-2 text-indigo-600 font-black uppercase tracking-widest text-[11px] hover:text-slate-900 transition-all"
              >
                Contact Our Support <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
