import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowLeft, FiFileText, FiMail, FiMapPin, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Terms of Service | Insta Appliance - Legal Agreement</title>
        <meta name="description" content="Read the legal terms and conditions for using Insta Appliance's services and website." />
        <link rel="canonical" href="https://instaappliance.shop/terms-of-service" />
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
             <FiFileText size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Terms of <span className="text-indigo-400">Service</span>
          </h1>
          <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
            Last updated February 06, 2026. Please read these Legal Terms carefully before using our Services.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed space-y-12 prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-strong:text-slate-900 prose-a:text-indigo-600">
              
              <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase">Agreement to our Legal Terms</h2>
                <p>
                  We are Insta Appliance ("<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"), a company registered in California, United States at North Little Rock, Arkansas, USA.
                </p>
                <p>
                  We operate the website <a href="https://instaappliance.shop/">https://instaappliance.shop/</a> (the "<strong>Site</strong>"), as well as any other related products and services that refer or link to these legal terms (the "<strong>Legal Terms</strong>") (collectively, the "<strong>Services</strong>").
                </p>
                <p>
                  Insta Appliance was founded on the principle that household repairs should be handled with the same level of precision as industrial maintenance. We recognize that modern appliances are complex electronic systems that require specialized knowledge and calibrated tools for effective servicing.
                </p>
                <p>
                  You can contact us by email at <a href="mailto:info@instaappliance.shop">info@instaappliance.shop</a>, or by mail to North Little Rock, Arkansas, USA.
                </p>
                <p>
                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Insta Appliance, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                </p>
                <p>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.</p>
                <p>The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</p>
                <p>We recommend that you print a copy of these Legal Terms for your records.</p>
              </section>

              <div className="bg-white border-2 border-slate-100 p-8 md:p-12 rounded-[2.5rem]">
                <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase">Table of Contents</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 font-bold text-indigo-600">
                  <li><a href="#services" className="hover:underline">1. OUR SERVICES</a></li>
                  <li><a href="#ip" className="hover:underline">2. INTELLECTUAL PROPERTY RIGHTS</a></li>
                  <li><a href="#representations" className="hover:underline">3. USER REPRESENTATIONS</a></li>
                  <li><a href="#prohibited" className="hover:underline">4. PROHIBITED ACTIVITIES</a></li>
                  <li><a href="#contributions" className="hover:underline">5. USER GENERATED CONTRIBUTIONS</a></li>
                  <li><a href="#license" className="hover:underline">6. CONTRIBUTION LICENSE</a></li>
                  <li><a href="#management" className="hover:underline">7. SERVICES MANAGEMENT</a></li>
                  <li><a href="#privacy" className="hover:underline">8. PRIVACY POLICY</a></li>
                  <li><a href="#termination" className="hover:underline">9. TERM AND TERMINATION</a></li>
                  <li><a href="#modifications" className="hover:underline">10. MODIFICATIONS AND INTERRUPTIONS</a></li>
                  <li><a href="#law" className="hover:underline">11. GOVERNING LAW</a></li>
                  <li><a href="#dispute" className="hover:underline">12. DISPUTE RESOLUTION</a></li>
                  <li><a href="#corrections" className="hover:underline">13. CORRECTIONS</a></li>
                  <li><a href="#disclaimer" className="hover:underline">14. DISCLAIMER</a></li>
                  <li><a href="#liability" className="hover:underline">15. LIMITATIONS OF LIABILITY</a></li>
                  <li><a href="#indemnification" className="hover:underline">16. INDEMNIFICATION</a></li>
                  <li><a href="#data" className="hover:underline">17. USER DATA</a></li>
                  <li><a href="#electronic" className="hover:underline">18. ELECTRONIC COMMUNICATIONS</a></li>
                  <li><a href="#california" className="hover:underline">19. CALIFORNIA USERS</a></li>
                  <li><a href="#miscellaneous" className="hover:underline">20. MISCELLANEOUS</a></li>
                  <li><a href="#contact" className="hover:underline">21. CONTACT US</a></li>
                </ul>
              </div>

              <section id="services">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">1. OUR SERVICES</h2>
                <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
                <p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
              </section>

              <section id="ip">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">2. INTELLECTUAL PROPERTY RIGHTS</h2>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our intellectual property</h3>
                <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
                <p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.</p>
                <p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Your use of our Services</h3>
                <p>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to: (1) access the Services; and (2) download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.</p>
                <p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
                <p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <strong>info@instaappliance.shop</strong>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>
                
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Your submissions</h3>
                <p>Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.</p>
                <p><strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
                <p><strong>You are responsible for what you post or upload:</strong> By sending us Submissions through any part of the Services you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                  <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
                  <li>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
                  <li>warrant and represent that your Submissions do not constitute confidential information.</li>
                </ul>
                <p>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.</p>
              </section>

              <section id="representations">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">3. USER REPRESENTATIONS</h2>
                <p>By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.</p>
                <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>
              </section>

              <section id="prohibited">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">4. PROHIBITED ACTIVITIES</h2>
                <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                <p>As a user of the Services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                  <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                  <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                  <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                  <li>Engage in unauthorized framing of or linking to the Services.</li>
                  <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                  <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                  <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                  <li>Attempt to impersonate another user or person or use the username of another user.</li>
                  <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</li>
                  <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                  <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                  <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                  <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                  <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                  <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</li>
                  <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                  <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                  <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
                  <li>Use the Services to advertise or offer to sell goods and services.</li>
                  <li>Sell or otherwise transfer your profile.</li>
                </ul>
              </section>

              <section id="contributions">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">5. USER GENERATED CONTRIBUTIONS</h2>
                <p>The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Services' Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that your Contributions are not false, inaccurate, or misleading; they do not infringe proprietary rights; you have necessary licenses; you have written consent of identifiable individuals; and they do not violate any law or regulation.</p>
              </section>

              <section id="license">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">6. CONTRIBUTION LICENSE</h2>
                <p>You and Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</p>
                <p>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
                <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
              </section>

              <section id="management">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">7. SERVICES MANAGEMENT</h2>
                <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>
              </section>

              <section id="privacy">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">8. PRIVACY POLICY</h2>
                <p>We care about data privacy and security. Please review our Privacy Policy: <a href="https://instaappliance.shop/privacy-policy">https://instaappliance.shop/privacy-policy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.</p>
              </section>

              <section id="termination">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">9. TERM AND TERMINATION</h2>
                <p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
                <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
              </section>

              <section id="modifications">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">10. MODIFICATIONS AND INTERRUPTIONS</h2>
                <p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
                <p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>
              </section>

              <section id="law">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">11. GOVERNING LAW</h2>
                <p>These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of California applicable to agreements made and to be entirely performed within the State of California, without regard to its conflict of law principles.</p>
              </section>

              <section id="dispute">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">12. DISPUTE RESOLUTION</h2>
                <p>Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and individually, a "Party") shall be commenced or prosecuted in the state and federal courts located in California, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms.</p>
              </section>

              <section id="corrections">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">13. CORRECTIONS</h2>
                <p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>
              </section>

              <section id="disclaimer">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">14. DISCLAIMER</h2>
                <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (2) PERSONAL INJURY OR PROPERTY DAMAGE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES.</p>
              </section>

              <section id="liability">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">15. LIMITATIONS OF LIABILITY</h2>
                <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>
              </section>

              <section id="indemnification">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">16. INDEMNIFICATION</h2>
                <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>
              </section>

              <section id="data">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">17. USER DATA</h2>
                <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
              </section>

              <section id="electronic">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
                <p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
              </section>

              <section id="california">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">19. CALIFORNIA USERS AND RESIDENTS</h2>
                <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>
              </section>

              <section id="miscellaneous">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">20. MISCELLANEOUS</h2>
                <p>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.</p>
              </section>

              <section id="contact">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase">21. CONTACT US</h2>
                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden mt-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl"></div>
                  <h3 className="text-2xl font-black mb-6 relative z-10 m-0">Legal Contact Details</h3>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                        <FiShield size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider m-0">Company</p>
                        <p className="font-black text-lg m-0">Insta Appliance</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                        <FiMail size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider m-0">Email</p>
                        <p className="font-black text-lg m-0">info@instaappliance.shop</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                        <FiMapPin size={24} />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-wider m-0">Address</p>
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
