import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'California Homeowner',
    quote: 'Absolutely exceptional service. The technician arrived within the hour and diagnosed my luxury refrigerator issue instantly. Pure professionalism.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Michael Smith',
    role: 'Estate Manager',
    quote: 'We use Insta Appliance for all our properties. Their precision and expert knowledge of smart home appliances are unmatched in the industry.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Interior Designer',
    quote: 'Fast, clean, and reliable. They respect the aesthetics of a home while performing high-end repairs. The only team I trust.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="testimonials">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full mb-6 border border-white/10">
            <span className="text-secondary text-[10px] font-black uppercase tracking-[3px]">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Voices of <span className="text-secondary">Satisfaction</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-2xl">
            Hear from our prestigious clientele about their experiences with our master repair services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={t.id} 
              className="group relative bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white hover:border-white transition-all duration-700"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-10 right-10 text-white/10 group-hover:text-secondary/20 transition-colors duration-500">
                <FaQuoteRight size={40} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-2xl object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-lg flex items-center justify-center text-[8px] text-white">
                      <FaStar />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-black text-white group-hover:text-primary transition-colors duration-500 text-lg tracking-tight">{t.name}</h5>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{t.role}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 group-hover:text-slate-600 text-base font-medium leading-relaxed italic transition-colors duration-500">
                  "{t.quote}"
                </p>

                <div className="mt-8 flex gap-1 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   {[...Array(5)].map((_, i) => <FaStar key={i} size={12} />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Trust Indicator */}
        <div className="mt-24 text-center">
           <div className="inline-flex items-center gap-10 px-10 py-5 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
              <div className="text-center">
                 <p className="text-2xl font-black text-white leading-none">4.9/5</p>
                 <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">Google Rating</p>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="text-center">
                 <p className="text-2xl font-black text-white leading-none">10k+</p>
                 <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">Happy Clients</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
