import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiAlertTriangle, FiShield, FiExternalLink, FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Disclaimer | Insta Appliance - Important Information</title>
        <meta name="description" content="Official Disclaimer for Insta Appliance. Learn about our general, professional, and external links information policies." />
        <link rel="canonical" href="https://instaappliance.shop/disclaimer" />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <FiArrowLeft className="text-indigo-400" /> Back to Home
          </Link>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-2xl text-indigo-400 mb-8">
             <FiAlertTriangle size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Legal <span className="text-indigo-400">Disclaimer</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Last updated: February 2026. Please read our information disclosure carefully to understand how to use our content.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed space-y-12 prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-strong:text-slate-900 prose-a:text-indigo-600">
              
              <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <FiInfo size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase m-0">General Disclaimer</h2>
                </div>
                <p>
                  The information provided by <strong>Insta Appliance</strong> ("we," "us," or "our") on <a href="https://instaappliance.shop" className="text-indigo-600 font-bold hover:underline">https://instaappliance.shop</a> (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <FiShield size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase m-0">Professional Disclaimer</h2>
                </div>
                <p>
                  The Site cannot and does not contain legal or medical advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <FiExternalLink size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase m-0">External Links Disclaimer</h2>
                </div>
                <p>
                  The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
                </p>
              </section>

              <section className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden mt-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl"></div>
                <h3 className="text-2xl font-black mb-6 relative z-10 m-0">Still have questions?</h3>
                <p className="text-slate-400 mb-8 relative z-10">If you need further clarification regarding our disclaimer or any information on our site, please contact us:</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                    <FiAlertTriangle />
                  </div>
                  <span className="font-bold">Email: info@instaappliance.shop</span>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
