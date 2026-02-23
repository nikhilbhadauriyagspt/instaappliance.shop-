import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import ServicesSection from '../components/ServicesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Comparison from '../components/Comparison';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Process from '../components/Process';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Insta Appliance - Trusted Home Appliance Repair Services</title>
        <meta name="description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified technicians, same-day service, fair pricing." />
        <link rel="canonical" href="https://instaappliance.shop/" />

        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Insta Appliance - Trusted Home Appliance Repair Services" />
        <meta property="og:description" content="Reliable home appliance repair near you. Experts in washing machines, refrigerators, ACs & more. Certified technicians, same-day service, fair pricing." />
        <meta property="og:image" content="https://instaappliance.shop/logo/logo.png" />
        <meta property="og:url" content="https://instaappliance.shop/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <HeroSection />
      <Highlights />
      <About />
      <ServicesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;


