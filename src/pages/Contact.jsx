import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import { API_ENDPOINTS } from '../config/api';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(false);

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
      setIsSubmitted(true); // Fallback visual success
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Insta Appliance - Get Expert Support Today</title>
        <meta name="description" content="Reach out to Insta Appliance for reliable home appliance repair services. Our expert team is ready to help you with all your service needs." />
        <link rel="canonical" href="https://instaappliance.shop/contact" />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-white/60 text-[10px] font-black uppercase tracking-[4px]">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Connect with Our <span className="text-indigo-400">Repair Experts</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            We are here to provide fast, reliable, and professional solutions for all your home appliance concerns. Reach out today for priority service.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left side: Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest">Contact Details</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                  Professional Support <br/>
                  <span className="text-indigo-600">For Your Equipment</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
                  Our support team is dedicated to providing clear communication and efficient scheduling. Whether you need an emergency fix or routine maintenance, we've got you covered.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { icon: <FiMail />, label: "Email Support", val: "info@instaappliance.shop" },
                  { icon: <FiMapPin />, label: "Service Area", val: "Professional Home Service" },
                  { icon: <FiClock />, label: "Service Hours", val: "Mon-Sat: 8AM - 9PM" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 bg-slate-50/50 group hover:bg-white hover:shadow-xl transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-white text-indigo-600 flex items-center justify-center shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[2px] mb-1">{item.label}</p>
                      <p className="text-slate-900 font-bold text-base">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Modern Form */}
            <div className="lg:col-span-7 bg-slate-900 rounded-[3rem] p-8 md:p-12 lg:p-16 relative shadow-2xl overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
              
              {isSubmitted ? (
                <div className="relative z-10 text-center py-20 text-white">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <FiCheckCircle size={40} className="text-indigo-400" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight">Inquiry Received</h3>
                  <p className="text-slate-400 font-medium mb-10 max-w-sm mx-auto">Thank you for your message. Our expert team will review your inquiry and contact you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-indigo-600 hover:text-white transition-all">New Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Your Name</label>
                      <input name="name" required onChange={handleChange} type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Email Address</label>
                      <input name="email" required onChange={handleChange} type="email" placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Subject</label>
                    <input name="subject" required onChange={handleChange} type="text" placeholder="Enter Subject" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest ml-4">Message</label>
                    <textarea name="message" required onChange={handleChange} placeholder="Write a Message" rows="5" className="w-full bg-white/5 border border-white/10 outline-none rounded-2xl px-6 py-4 text-white font-medium focus:border-indigo-500 focus:bg-white/10 transition-all resize-none"></textarea>
                  </div>

                  <div className="pt-4 text-center">
                    <button disabled={isLoading} type="submit" className="px-12 bg-indigo-600 text-white hover:bg-white hover:text-slate-900 py-5 rounded-full font-black text-[12px] uppercase tracking-[3px] shadow-xl shadow-indigo-600/20 transition-all duration-500 flex items-center justify-center gap-3 mx-auto">
                      {isLoading ? "Sending..." : "Send Message"} <FiSend />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
