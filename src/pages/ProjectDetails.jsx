import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projectsData } from '../data/projects';
import { FiArrowLeft, FiUser, FiCalendar, FiClock, FiMapPin, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
        <div className="text-center px-6">
          <h2 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter">404</h2>
          <p className="text-slate-500 mb-8 font-bold uppercase tracking-widest text-sm">Project Not Found</p>
          <Link to="/projects" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-900 transition-all shadow-xl">
            <FiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Helmet>
        <title>{project.title} | Success Story | Insta Appliance</title>
        <meta name="description" content={project.description || project.title} />
      </Helmet>

      {/* Page Hero Section - Modern Indigo */}
      <section className="relative pt-44 pb-32 bg-[#020617] overflow-hidden text-center">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            <FiArrowLeft className="text-indigo-400" /> Back to Portfolio
          </Link>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-8 max-w-5xl mx-auto leading-tight tracking-tight">
            {project.title}
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
            {project.category}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left side: Narrative */}
            <div className="lg:col-span-8">
              <div className="relative rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border-8 border-slate-50">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-auto object-cover max-h-[600px] transform hover:scale-105 transition-transform duration-1000" 
                />
              </div>

              <div className="space-y-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">Our Success Story</h2>
                  <p className="text-xl text-slate-600 font-medium leading-relaxed">
                    {project.description || "We helped a family fix their broken appliance quickly and made sure it works like new again."}
                  </p>
                </div>

                <div className="prose prose-lg max-w-none text-slate-500 font-medium leading-relaxed space-y-6">
                  {project.fullDescription || (
                    <>
                      <p>
                        We started by checking the machine carefully to find the real problem. Our expert worker used professional tools to test every part.
                      </p>
                      <p>
                        Then, we used original factory parts to fix the issue. We also cleaned the machine and tested it many times to make sure it was working perfectly before we left.
                      </p>
                    </>
                  )}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-slate-100">
                  {(project.features || ["Detailed Check", "Original Parts", "Quick Fix", "Safety Test"]).map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <FiCheckCircle size={20} />
                      </div>
                      <span className="text-slate-700 font-black text-sm uppercase tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Project Info Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full"></div>
                  
                  <h3 className="text-2xl font-black text-white mb-10 tracking-tight relative z-10">Quick Details</h3>
                  
                  <div className="space-y-8 relative z-10">
                    {[
                      { icon: <FiUser />, label: "Client Type", val: project.client || "Home Owner" },
                      { icon: <FiCalendar />, label: "Service Date", val: project.date || "Recent" },
                      { icon: <FiClock />, label: "Time Taken", val: project.duration || "2-4 Hours" },
                      { icon: <FiMapPin />, label: "Service Location", val: project.location || "Local Area" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-5">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-indigo-400 border border-white/10">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                          <p className="text-white font-bold text-lg leading-none">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
                    <p className="text-slate-400 font-medium mb-8">Need this kind of help?</p>
                    <Link 
                      to="/contact" 
                      className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
                    >
                      Talk to Us <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
