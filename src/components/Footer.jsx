import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.js';
import { FiChevronDown, FiChevronUp, FiMail, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our Blogs", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  const policyLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Cookie Policy", path: "/cookie-policy" }
  ];

  const displayedServices = showAllServices ? servicesData : servicesData.slice(0, 6);

  return (
    <footer className="bg-[#020617] pt-24 pb-12 font-sans overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block bg-white p-5 rounded-3xl shadow-xl shadow-indigo-600/5">
              <img
                src="/logo/logo.png"
                alt="Insta Appliance"
                className="h-8 md:h-10 object-contain"
              />
            </Link>
            <p className="text-slate-400 text-base font-medium leading-relaxed max-w-sm">
              We are a new team of professionals helping you fix your home appliances with honesty and speed. Making your life easier, one repair at a time.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                  <FiMail />
               </div>
               <a href="mailto:info@instaappliance.shop" className="text-white font-bold hover:text-indigo-400 transition-colors">info@instaappliance.shop</a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 md:col-span-1">
            <h4 className="text-white font-black text-[11px] uppercase tracking-[3px] mb-8 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300">
                    <FiArrowRight size={10} className="text-indigo-600" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-white font-black text-[11px] uppercase tracking-[3px] mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-600 rounded-full"></span>
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              {displayedServices.map((service) => (
                <li key={service.id}>
                  <Link to={`/service/${service.slug}`} className="text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300">
                    <FiArrowRight size={10} className="text-indigo-600" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setShowAllServices(!showAllServices)} 
              className="text-indigo-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors mt-6"
            >
              {showAllServices ? (<>SEE LESS <FiChevronUp /></>) : (<>SEE MORE <FiChevronDown /></>)}
            </button>
          </div>

          <div className="lg:col-span-3 md:col-span-1">
            <h4 className="text-white font-black text-[11px] uppercase tracking-[3px] mb-8 relative inline-block">
              Policies
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-white hover:translate-x-2 inline-flex items-center gap-2 transition-all duration-300">
                    <FiArrowRight size={10} className="text-indigo-600" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            © 2026 Insta Appliance — All Rights Reserved
          </p>
          <p className="text-slate-600 text-[10px] font-medium uppercase tracking-[2px]">
            Professional Repair Solutions
          </p>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
