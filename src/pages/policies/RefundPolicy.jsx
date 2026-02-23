import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiRotateCcw, FiMail, FiMapPin, FiPackage, FiTruck, FiCreditCard, FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Return Policy | Insta Appliance - Returns & Refunds</title>
        <meta name="description" content="Read Insta Appliance's return policy. Learn about our 7-day return window, RMA process, and refund timelines." />
        <link rel="canonical" href="https://instaappliance.shop/refund-policy" />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
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
             <FiRotateCcw size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Return <span className="text-indigo-400">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Last updated February 06, 2026. We want you to be completely satisfied with your purchase.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed space-y-12 prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-strong:text-slate-900 prose-a:text-indigo-600">
              
              <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <p>
                  Thank you for your purchase. We hope you are happy with your purchase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a refund only. Please see below for more information on our return policy.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <FiPackage size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase m-0">Returns</h2>
                </div>
                <p>
                  All returns must be postmarked within <strong>seven (7) days</strong> of the purchase date. All returned items must be in new and unused condition, with all original tags and labels attached.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <FiTruck size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase m-0">Return Process</h2>
                </div>
                <p>
                  To return an item, please email customer service at <a href="mailto:info@instaappliance.shop">info@instaappliance.shop</a> to obtain a Return Merchandise Authorization (RMA) number.
                </p>
                <p>
                  After receiving an RMA number, place the item securely in its original packaging and include your proof of purchase, then mail your return to the following address:
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-slate-900 mt-4">
                  <p className="m-0">Insta Appliance</p>
                  <p className="m-0">Attn: Returns</p>
                  <p className="m-0 text-indigo-600">RMA # [Your RMA Number]</p>
                  <p className="m-0">2010 N Loop W #105</p>
                  <p className="m-0">North Little Rock, Arkansas, USA</p>
                  <p className="m-0">United States</p>
                </div>
                <p className="mt-4">
                  <strong>Return shipping charges will be paid or reimbursed by us.</strong>
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <FiCreditCard size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase m-0">Refunds</h2>
                </div>
                <p>
                  After receiving your return and inspecting the condition of your item, we will process your return. Please allow at least <strong>seven (7) days</strong> from the receipt of your item to process your return.
                </p>
                <p>
                  Refunds may take 1-2 billing cycles to appear on your credit card statement, depending on your credit card company. We will notify you by email when your return has been processed.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <FiAlertTriangle size={24} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase m-0">Exceptions</h2>
                </div>
                <p>
                  For defective or damaged products, please contact us at the contact details below to arrange a refund or exchange.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">Questions</h2>
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden mt-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl"></div>
                  <h3 className="text-2xl font-black mb-6 relative z-10 m-0">Need help with a return?</h3>
                  <p className="text-slate-400 mb-8 relative z-10">If you have any questions concerning our return policy, please contact us at:</p>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                        <FiMail size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider m-0">Email Support</p>
                        <p className="font-black text-lg m-0">info@instaappliance.shop</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                        <FiMapPin size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider m-0">Location</p>
                        <p className="font-black text-lg m-0">North Little Rock, Arkansas, USA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
