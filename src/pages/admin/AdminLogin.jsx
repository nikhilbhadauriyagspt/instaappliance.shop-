import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../../config/api';
import { FiLock, FiUser, FiShield } from 'react-icons/fi';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINTS.ADMIN_LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (result.status === 'success') {
        localStorage.setItem('adminToken', result.token);
        navigate('/admin/dashboard');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl w-full max-w-md relative z-10 border border-slate-100">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
             <FiShield size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Admin Login</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[3px]">Secure Environment</p>
        </div>
        
        {error && <p className="bg-red-50 text-red-500 p-4 rounded-2xl mb-8 text-center font-bold text-xs uppercase tracking-widest border border-red-100">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4 flex items-center gap-2">
              <FiUser /> Username
            </label>
            <input 
              required 
              type="text" 
              placeholder="Enter ID"
              onChange={(e) => setFormData({...formData, username: e.target.value})} 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-medium text-slate-900" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[3px] text-slate-400 ml-4 flex items-center gap-2">
              <FiLock /> Password
            </label>
            <input 
              required 
              type="password" 
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, password: e.target.value})} 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-medium text-slate-900" 
            />
          </div>
          <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[3px] text-[11px] hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-600/10 active:scale-95">
            Initialize Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
