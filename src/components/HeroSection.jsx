import React, { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';

const slides = [
  {
    id: 1,
    image: "/banner/main-slider-bg.jpg",
    accent: "Reliable care for all your home appliances",
    heading: "Appliance repair made easy",
    bullets: [
      "Same day service available on most repairs",
      "Skilled technicians with transparent pricing"
    ],
    cta: "Book a service"
  },
  {
    id: 2,
    image: "/banner/main-slide-1-2.jpg",
    accent: "Fast, honest and dependable repair solutions",
    heading: "Expert repair at your doorstep",
    bullets: [
      "Service for washing machines, ACs, refrigerators and more",
      "Quality repairs backed by service assurance"
    ],
    cta: "Schedule repair"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { openBookingModal } = useBooking();

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  // Helper function to split heading after first two words
  const renderHeading = (text) => {
    const words = text.split(' ');
    const firstTwo = words.slice(0, 2).join(' ');
    const rest = words.slice(2).join(' ');
    return (
      <>
        {firstTwo} <br /> {rest}
      </>
    );
  };

  return (
    <section className="relative w-full h-[600px] lg:h-[950px] overflow-hidden bg-white font-sans">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Background Image Full */}
            <div className={`absolute inset-0 transition-transform duration-[2000ms] ease-out ${isActive ? "scale-100" : "scale-110"}`}>
              <img
                src={slide.image}
                alt="Appliance Repair"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Container for Content */}
            <div className="relative z-20 h-full flex flex-col justify-center container mx-auto px-0">

              {/* Text Block - Left Aligned */}
              <div className="max-w-4xl text-left">
                {/* Accent Text Animation */}
                <p
                  className={`text-secondary text-lg lg:text-xl italic font-medium transition-all duration-700 delay-300 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ fontFamily: 'cursive' }}
                >
                  {slide.accent}
                </p>

                {/* Main Heading Animation */}
                <h1
                  className={`text-3xl lg:text-[66px] capitalize text-[#0f0f0f] font-[900] leading-tight lg:leading-[76px] mt-[10px] mb-[30px] transition-all duration-700 delay-500 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                >
                  {renderHeading(slide.heading)}
                </h1>

                {/* Bullets Animation */}
                <div className={`flex flex-col items-start gap-3 mb-10 transition-all duration-700 delay-700 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                  <div className="flex items-center gap-2 bg-gray-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gray-200">
                    <span className="text-[#0f0f0f] font-bold text-sm lg:text-base">* {slide.bullets[0]}</span>
                  </div>
                  <div className="text-gray-700 text-base lg:text-lg font-medium tracking-wide pl-2 border-l-4 border-secondary">
                    {slide.bullets[1]}
                  </div>
                </div>

                {/* CTA Button Animation */}
                <div className={`flex justify-start transition-all duration-700 delay-1000 ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                  <button
                    onClick={() => openBookingModal()}
                    className="group relative inline-flex items-center justify-center px-8 py-3.5 lg:px-10 lg:py-4 overflow-hidden font-bold transition-all bg-[#ff6a00] rounded-full hover:bg-[#ff6a00] text-white"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-white group-hover:opacity-10"></span>
                    <span className="relative flex items-center gap-3 text-sm lg:text-base uppercase tracking-wider">
                      {slide.cta}
                      <div className="flex items-center justify-center w-6 h-6 lg:w-7 lg:h-7 bg-white/20 rounded-full group-hover:translate-x-1.5 transition-transform duration-300">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <div className="absolute right-6 lg:right-12 bottom-6 lg:bottom-10 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-[#ff6a00] hover:text-white text-white transition-all group border border-white/20"
          aria-label="Previous Slide"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-[#ff6a00] hover:text-white text-white transition-all group border border-white/20"
          aria-label="Next Slide"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-10 lg:left-24 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full h-1 ${index === currentSlide ? "bg-[#ff6a00] w-10" : "bg-gray-300 w-4"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
