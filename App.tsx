
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Search from './views/Search';
import NurseProfile from './views/NurseProfile';
import NurseDashboard from './views/NurseDashboard';
import EHRReport from './views/EHRReport';
import FamilyPortal from './views/FamilyPortal';
import AdminDashboard from './views/AdminDashboard';
import AdminFinancials from './views/AdminFinancials';
import AIChatBot from './components/AIChatBot';

const NavOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-primary-content p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-4 border-white/20"
      >
        <span className="material-symbols-outlined text-2xl font-bold">{isOpen ? 'close' : 'grid_view'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl w-72 p-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700 mb-2">
            <h3 className="text-xs font-black text-primary-dark uppercase tracking-widest">Navigation Hub</h3>
          </div>
          
          <div className="space-y-1">
            <Section title="Public Pages">
              <NavLink to="/" icon="home" current={location.pathname}>Landing Page</NavLink>
              <NavLink to="/search" icon="search" current={location.pathname}>Find a Nurse</NavLink>
              <NavLink to="/profile" icon="person" current={location.pathname}>Nurse Profile</NavLink>
            </Section>

            <Section title="Professional Tools">
              <NavLink to="/nurse-dashboard" icon="dashboard" current={location.pathname}>Nurse Dashboard</NavLink>
              <NavLink to="/ehr" icon="edit_note" current={location.pathname}>EHR Shift Report</NavLink>
            </Section>

            <Section title="Client Portal">
              <NavLink to="/family-portal" icon="family_restroom" current={location.pathname}>Family Portal</NavLink>
            </Section>

            <Section title="Operations Center">
              <NavLink to="/admin-dashboard" icon="analytics" current={location.pathname}>Executive Insights</NavLink>
              <NavLink to="/admin-financials" icon="payments" current={location.pathname}>Financial Control</NavLink>
            </Section>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-center">
            <button 
              onClick={() => document.documentElement.classList.toggle('dark')}
              className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">dark_mode</span>
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-2">
    <h4 className="text-[10px] font-bold text-gray-400 uppercase px-3 mb-1 tracking-tighter">{title}</h4>
    <div className="space-y-0.5">{children}</div>
  </div>
);

const NavLink: React.FC<{ to: string; icon: string; current: string; children: React.ReactNode }> = ({ to, icon, current, children }) => {
  const isActive = current === to;
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${
        isActive 
          ? 'bg-primary/20 text-primary-dark font-bold' 
          : 'hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300'
      }`}
    >
      <span className={`material-symbols-outlined text-[20px] ${isActive ? 'filled' : ''}`}>{icon}</span>
      {children}
    </Link>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<NurseProfile />} />
        <Route path="/nurse-dashboard" element={<NurseDashboard />} />
        <Route path="/ehr" element={<EHRReport />} />
        <Route path="/family-portal" element={<FamilyPortal />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-financials" element={<AdminFinancials />} />
      </Routes>
      <NavOverlay />
      <AIChatBot />
    </HashRouter>
  );
};

export default App;
