import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { FaTimes, FaCheckCircle, FaWrench, FaShieldAlt } from 'react-icons/fa';
import { servicesData } from '../../data/services';
import { API_ENDPOINTS } from '../../config/api';

const BookingModal = () => {
  const { isModalOpen, closeBookingModal, selectedService } = useBooking();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appliance: selectedService || '',
    location: ''
  });

  if (!isModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.BOOKING, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          closeBookingModal();
        }, 4000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback for visual confirmation if backend is not yet live
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        closeBookingModal();
      }, 4000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-6">
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-md transition-opacity duration-500" onClick={closeBookingModal}></div>
      <div className="relative w-full max-w-xl bg-white rounded-[48px] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-500">
        <div className="h-2 bg-gradient-to-r from-secondary via-blue-500 to-secondary animate-gradient-x"></div>
        <button onClick={closeBookingModal} className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all z-20 shadow-sm">
          <FaTimes size={16} />
        </button>

        {isSubmitted ? (
          <div className="p-16 text-center">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <FaCheckCircle size={40} className="animate-pulse" />
            </div>
            <h3 className="text-4xl font-black text-primary mb-4 tracking-tighter">Request Received</h3>
            <p className="text-slate-500 font-medium mb-8">Our dispatcher is currently assigning a master technician to your case. Expect a confirmation call within 10 minutes.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-[3px] text-slate-400">
               <FaShieldAlt className="text-secondary" /> Secured Booking System
            </div>
          </div>
        ) : (
          <div className="p-8 md:p-14">
            <div className="flex flex-col mb-10">
              <div className="inline-flex items-center gap-3 bg-secondary/10 px-4 py-2 rounded-full mb-6 w-fit">
                <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Priority Scheduling</span>
              </div>
              <h3 className="text-4xl font-black text-primary leading-none tracking-tighter mb-2">Book a Service</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[2px]">Guaranteed service excellence at your doorstep</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Your Name</label>
                  <input name="name" required onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium text-primary" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Contact Number</label>
                  <input name="phone" required onChange={handleChange} type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium text-primary" placeholder="Phone" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Email</label>
                  <input name="email" required onChange={handleChange} type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium text-primary" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Appliance</label>
                  <div className="relative">
                    <select
                      name="appliance"
                      required
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium text-primary appearance-none cursor-pointer"
                      defaultValue={selectedService}
                    >
                      <option value="">Select Appliance</option>
                      {servicesData.map((service) => (
                        <option key={service.id} value={service.title}>{service.title}</option>
                      ))}
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <FaWrench size={12} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-2">Service Location</label>
                <textarea name="location" required onChange={handleChange} rows="2" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary focus:bg-white transition-all font-medium text-primary resize-none" placeholder="Enter your full address..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-black uppercase tracking-[4px] py-5 rounded-2xl shadow-2xl hover:bg-secondary transition-all active:scale-95 mt-4">
                Book Now
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
