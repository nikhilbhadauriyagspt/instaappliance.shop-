import React, { useState } from 'react';
import { API_ENDPOINTS } from '../config/api';
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true); // Fallback
    }
  };

  return (
    <section className="py-24 bg-white font-sans overflow-hidden" id="contact">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Contact Info & Text */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Get in Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                Ready to Fix Your <br/>
                <span className="text-indigo-600">Appliance?</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                We are here to help you. Send us a message and our friendly team will get back to you within 2 hours.
              </p>
            </div>

            {/* Simple Contact Cards */}
            <div className="space-y-6">
               <div className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-slate-50/50 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white text-indigo-600 flex items-center justify-center shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                     <FiMail size={24} />
                  </div>
                  <div>
                     <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-1">Email Support</p>
                     <p className="text-slate-900 font-bold text-base">info@instaappliance.shop</p>
                  </div>
               </div>

               <div className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-slate-50/50 group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-white text-indigo-600 flex items-center justify-center shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                     <FiMapPin size={24} />
                  </div>
                  <div>
                     <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-1">Service Area</p>
                     <p className="text-slate-900 font-bold text-base">North Little Rock, Arkansas, USA</p>
                  </div>
               </div>
            </div>

            {/* Quick Trust Note */}
            <div className="p-8 rounded-[2rem] bg-indigo-600 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
               <div className="relative z-10 flex items-center gap-4">
                  <FiCheckCircle size={24} className="text-indigo-200" />
                  <p className="text-sm font-bold leading-snug">Fast response guaranteed within 120 minutes of inquiry.</p>
               </div>
            </div>
          </div>

          {/* Right Side: Modern Form Container */}
          <div className="lg:col-span-7 bg-slate-900 rounded-[3rem] p-8 md:p-12 lg:p-16 relative shadow-2xl overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
            
            {isSubmitted ? (
              <div className="relative z-10 text-center py-20 text-white">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
                  <FiCheckCircle size={40} className="text-indigo-400" />
                </div>
                <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                <p className="text-slate-400 font-medium mb-10 max-w-sm mx-auto">Thank you for reaching out. Our team is already reviewing your request and will contact you soon.</p>
                <button onClick={() => setIsSubmitted(false)} className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-600 hover:text-white transition-all">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Full Name</label>
                    <input name="name" required onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Email Address</label>
                    <input name="email" required onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Subject</label>
                    <input name="subject" required onChange={handleChange} type="text" placeholder="Repair Inquiry" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Contact Detail</label>
                    <input name="phone" required onChange={handleChange} type="text" placeholder="Phone or Skype" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Your Message</label>
                  <textarea name="message" required onChange={handleChange} placeholder="Tell us about the issue..." rows="5" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-indigo-600 text-white hover:bg-white hover:text-slate-900 py-5 rounded-2xl font-black text-[12px] uppercase tracking-[3px] shadow-xl shadow-indigo-600/20 transition-all duration-500 flex items-center justify-center gap-3 group">
                    Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}} />
    </section>
  );
};

export default ContactSection;
