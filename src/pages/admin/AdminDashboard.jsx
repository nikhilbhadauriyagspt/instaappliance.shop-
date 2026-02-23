import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiCheckCircle, FiInbox, FiMail, FiUsers, FiArrowRight } from 'react-icons/fi';
import { API_ENDPOINTS } from '../../config/api';

const AdminDashboard = () => {
  const [data, setData] = useState({ bookings: [], contacts: [], newsletter: [] });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('bookings');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.GET_SUBMISSIONS);
      const result = await response.json();
      if (result.status === 'success') {
        setData(result.data);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] font-sans">
       <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-6"></div>
       <div className="font-black tracking-[4px] text-white uppercase text-[10px]">Synchronizing System Data...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Navigation */}
      <nav className="bg-[#020617] text-white py-6 px-10 flex justify-between items-center sticky top-0 z-[150] shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
             <FiInbox size={20} />
          </div>
          <h1 className="text-xl font-black uppercase tracking-widest leading-none">Control <span className="text-indigo-400">Center</span></h1>
        </div>
        <button onClick={handleLogout} className="group flex items-center gap-3 bg-white/5 hover:bg-red-500/20 hover:text-red-400 border border-white/10 px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
          <FiLogOut /> Logout
        </button>
      </nav>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12">
        
        {/* Statistics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {[
             { label: "Bookings", val: data.bookings.length, icon: <FiInbox />, color: "indigo" },
             { label: "Messages", val: data.contacts.length, icon: <FiMail />, color: "emerald" },
             { label: "Subscribers", val: data.newsletter.length, icon: <FiUsers />, color: "amber" }
           ].map((stat, i) => (
             <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                   <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                   <p className="text-3xl font-black text-slate-900">{stat.val}</p>
                </div>
                <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center text-xl`}>
                   {stat.icon}
                </div>
             </div>
           ))}
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { id: 'bookings', label: 'Recent Bookings' },
            { id: 'contacts', label: 'Direct Messages' },
            { id: 'newsletter', label: 'Subscribers' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                : 'bg-white text-slate-400 hover:bg-slate-100 border border-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Table Container */}
        <div className="bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-slate-50 border-b border-slate-100">
                {activeTab === 'bookings' && (
                  <tr>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Client Details</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Appliance</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Activity Date</th>
                  </tr>
                )}
                {activeTab === 'contacts' && (
                  <tr>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Sender Info</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Subject</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Message Snippet</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Sent Date</th>
                  </tr>
                )}
                {activeTab === 'newsletter' && (
                  <tr>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400">Verified Email</th>
                    <th className="p-8 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Subscription Date</th>
                  </tr>
                )}
              </thead>
              <tbody className="divide-y divide-slate-50 font-medium">
                {data[activeTab].map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-all">
                    {activeTab === 'bookings' && (
                      <>
                        <td className="p-8">
                          <div className="font-bold text-slate-900 mb-1">{item.name}</div>
                          <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{item.email}</div>
                        </td>
                        <td className="p-8">
                          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                            {item.appliance}
                          </div>
                        </td>
                        <td className="p-8">
                          <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                            <FiCheckCircle /> Verified
                          </div>
                        </td>
                        <td className="p-8 text-right text-[11px] font-bold text-slate-400 uppercase">{item.created_at}</td>
                      </>
                    )}
                    {activeTab === 'contacts' && (
                      <>
                        <td className="p-8">
                          <div className="font-bold text-slate-900 mb-1">{item.name}</div>
                          <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{item.email}</div>
                        </td>
                        <td className="p-8 font-bold text-slate-700 text-sm tracking-tight">{item.subject}</td>
                        <td className="p-8 text-sm text-slate-500 max-w-md italic">"{item.message}"</td>
                        <td className="p-8 text-right text-[11px] font-bold text-slate-400 uppercase">{item.created_at}</td>
                      </>
                    )}
                    {activeTab === 'newsletter' && (
                      <>
                        <td className="p-8 font-bold text-slate-900 text-base">{item.email}</td>
                        <td className="p-8 text-right text-[11px] font-bold text-slate-400 uppercase">{item.created_at}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            {data[activeTab].length === 0 && (
              <div className="py-32 text-center text-slate-200 font-black uppercase tracking-[8px] text-xs">Infrastructure Offline: No Data Available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
