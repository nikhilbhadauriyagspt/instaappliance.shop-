import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { FiChevronDown, FiPlus, FiGrid, FiMail, FiClock } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useBooking } from "../context/BookingContext";
import { servicesData } from "../data/services.js";

const Header = () => {
  const { openBookingModal } = useBooking();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    document.body.style.overflow = "unset";
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
  }, [mobileOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
      {/* Containerized Header */}
      <header
        className={`container mx-auto transition-all duration-500 rounded-[1.5rem] md:rounded-[2.5rem] border ${
          scrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border-slate-200/60 py-2.5" 
            : "bg-white/60 backdrop-blur-md border-white/40 py-4"
        }`}
      >
        <div className="px-6 md:px-10 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="relative z-10 flex items-center group">
            <img
              src="/logo/logo.png"
              alt="ApplianceKick"
              className="h-12 md:h-16 lg:h-20 object-contain"
            />
          </Link>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-full border border-slate-200/40">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`px-6 py-2 rounded-full text-[13px] font-bold tracking-wide transition-all duration-300 flex items-center gap-1.5 ${
                      isActive 
                        ? "bg-white text-indigo-600 shadow-sm" 
                        : "text-slate-600 hover:text-indigo-600"
                    }`}
                  >
                    {item.name}
                    {item.dropdown && <FiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />}
                  </Link>

                  {/* Mega Dropdown */}
                  {item.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <div className="w-[850px] bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden p-8 grid grid-cols-3 gap-8">
                        <div className="col-span-1 bg-slate-900 rounded-[1.5rem] p-8 text-white flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-black mb-3 leading-tight uppercase tracking-tight">Our Expertise</h3>
                            <p className="text-slate-400 text-xs font-medium leading-relaxed mb-8">
                              Providing premium repair solutions for all major household appliances with certified tech.
                            </p>
                          </div>
                          <Link 
                            to="/services" 
                            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-center hover:bg-white hover:text-indigo-600 transition-all"
                          >
                            Browse All
                          </Link>
                        </div>
                        <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-1 content-center">
                          {servicesData.slice(0, 10).map((service) => (
                            <Link
                              key={service.id}
                              to={`/service/${service.slug}`}
                              className="group/item flex items-center gap-3 p-3 rounded-2xl hover:bg-indigo-50 transition-all border border-transparent"
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 grid place-items-center group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-300">
                                <FiPlus className="text-sm" />
                              </div>
                              <span className="text-[13px] font-bold text-slate-700 group-hover/item:text-indigo-600 transition-colors">
                                {service.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="hidden xl:flex flex-col items-end">
               <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Systems Live
               </div>
               <span className="text-[11px] font-bold text-slate-500">Service Hours: 08:00 - 21:00</span>
            </div>
            <button
              onClick={() => openBookingModal()}
              className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-black text-[12px] uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 hover:shadow-slate-200 active:scale-95"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile UI */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-11 h-11 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <span className="w-6 h-0.5 bg-current rounded-full"></span>
            <span className="w-5 h-0.5 bg-current rounded-full translate-x-0.5"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] transition-all duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-4 top-4 bottom-4 w-[85%] max-w-sm bg-white rounded-[2rem] shadow-2xl transition-transform duration-700 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-[120%]"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-10">
              <img src="/logo/logo.png" alt="Logo" className="h-12" />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 grid place-items-center"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto">
              {navLinks.map((item) => (
                <div key={`mob-${item.name}`}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between p-5 rounded-2xl bg-slate-50 font-bold text-slate-800 uppercase text-[12px] tracking-widest"
                      >
                        {item.name}
                        <FiChevronDown className={`transition-transform duration-500 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`grid transition-all duration-500 ${servicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden bg-slate-50/50 rounded-2xl space-y-1">
                          {servicesData.map((s) => (
                            <Link
                              key={`mob-s-${s.id}`}
                              to={`/service/${s.slug}`}
                              className="block p-4 text-[12px] font-bold text-slate-500 uppercase tracking-widest"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block p-5 rounded-2xl border border-slate-100 font-bold text-slate-800 uppercase text-[12px] tracking-widest"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={() => openBookingModal()}
                className="w-full bg-indigo-600 text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-[12px] shadow-lg shadow-indigo-100 flex items-center justify-center gap-3"
              >
                Book Appointment <FaArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
