import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import { FiClock, FiShield, FiAward } from 'react-icons/fi';
import { useBooking } from '../context/BookingContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    tag: "Trusted Repair Partner",
    title: "Revolutionizing Your",
    highlight: "Home Comfort",
    desc: "Experience world-class appliance repair services delivered at your doorstep by certified professionals.",
    image: "/banner/hero-1.jpg",
    badge: "Expert Care"
  },
  {
    id: 2,
    tag: "Cooling Specialist",
    title: "Restore Your Fridge's",
    highlight: "Peak Performance",
    desc: "Precision maintenance for all premium refrigerator brands. Keeping your food fresh and your family healthy.",
    image: "/banner/hero-2.jpg",
    badge: "Expert Care"
  },
  {
    id: 3,
    tag: "Mechanical Experts",
    title: "Superior Solutions for",
    highlight: "Laundry Systems",
    desc: "Fast, reliable, and guaranteed repairs for washing machines and dryers of all major global brands.",
    image: "/banner/hero-3.jpg",
    badge: "Guaranteed Fix"
  }
];

const Hero = () => {
  const { openBookingModal } = useBooking();

  return (
    <section id="home" className="relative h-[85vh] lg:h-[90vh] w-full overflow-hidden">
      
      <Swiper
        effect={'fade'}
        speed={1200}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full flex items-center">
              
              {/* Full Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent z-10"></div>
                <img 
                  src={slide.image} 
                  className="w-full h-full object-cover object-center animate-ken-burns" 
                  alt="" 
                />
              </div>

              <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
                <div className="max-w-3xl">
                  <div className="reveal-content opacity-0 translate-y-8 transition-all duration-1000">
                    
                    {/* Badge Tag */}
                    <div className="inline-flex items-center gap-2 bg-indigo-600/20 backdrop-blur-md border border-indigo-400/30 px-4 py-1.5 rounded-full mb-6">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                      <span className="text-indigo-200 text-[11px] font-black uppercase tracking-widest">{slide.tag}</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.15] mb-8 tracking-tight">
                      {slide.title} <br/>
                      <span className="text-indigo-400 relative inline-block">
                        {slide.highlight}
                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 10.5C50.5 4.5 150.5 1.5 299 10.5" stroke="#818cf8" strokeWidth="4" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="text-slate-200 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed opacity-90">
                      {slide.desc}
                    </p>

                    {/* CTA Buttons & Stats */}
                    <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
                      <button 
                        onClick={() => openBookingModal()}
                        className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-black uppercase tracking-widest text-[11px] rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-2xl active:scale-95"
                      >
                        Book Appointment
                      </button>
                    </div>

                    {/* Quick Trust Badges */}
                    <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                       <div className="flex items-center gap-3">
                          <FiShield className="text-indigo-400 text-xl" />
                          <span className="text-white text-sm font-bold tracking-wide">90 Days Warranty</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <FiClock className="text-indigo-400 text-xl" />
                          <span className="text-white text-sm font-bold tracking-wide">Same-Day Service</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Side Badge */}
              <div className="absolute right-12 bottom-12 hidden xl:block z-30 animate-float">
                 <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-5">
                       <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl">
                          <FiAward />
                       </div>
                       <div>
                          <p className="text-white font-black text-2xl leading-none mb-1">{slide.badge}</p>
                          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[2px]">Quality Assured</p>
                       </div>
                    </div>
                 </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ken-burns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-ken-burns { animation: ken-burns 10s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        .swiper-slide-active .reveal-content { opacity: 1; transform: translateY(0); }
        
        .swiper-pagination-bullet { 
          width: 50px !important; 
          height: 4px !important; 
          background: rgba(255,255,255,0.2) !important; 
          border-radius: 2px !important;
          opacity: 1 !important; 
          transition: all 0.5s ease !important;
        }
        .swiper-pagination-bullet-active { 
          background: #818cf8 !important; 
          width: 80px !important;
        }
        .swiper-pagination { bottom: 40px !important; }
      `}} />
    </section>
  );
};

export default Hero;
