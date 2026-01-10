
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border-light bg-surface-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-secondary dark:text-white">
            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">health_and_safety</span>
            </div>
            <h2 className="text-xl font-black">Cuidado con Amor</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-600 dark:text-gray-300">
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">For Families</a>
            <a href="#" className="hover:text-primary transition-colors">For Nurses</a>
          </nav>
          <div className="flex gap-3">
             <button className="hidden sm:block h-10 px-6 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all">Log In</button>
             <button 
              onClick={() => navigate('/search')}
              className="h-10 px-6 rounded-xl bg-primary text-primary-content font-bold shadow-lg hover:bg-primary-hover transition-all"
             >
               Find Care
             </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#f8fcf9] dark:bg-background-dark py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:flex items-center gap-16">
          <div className="flex-1 space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary-dark uppercase">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              The #1 Choice for At-Home Nursing
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] dark:text-white">
              Elite Nursing Care, <br/><span className="text-primary">In Your Home.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
              Connect with licensed, fully vetted nursing professionals. Compassionate support for surgery recovery, elderly care, and specialized needs.
            </p>
            <div className="bg-white dark:bg-surface-dark p-2 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 sm:flex gap-2 max-w-lg">
              <div className="flex-1 flex items-center px-4 gap-3">
                <span className="material-symbols-outlined text-gray-400">location_on</span>
                <input className="w-full border-none bg-transparent h-12 focus:ring-0 dark:text-white" placeholder="Zip Code" />
              </div>
              <button onClick={() => navigate('/search')} className="bg-primary text-primary-content h-12 px-8 rounded-xl font-black transition-all hover:scale-[1.02]">
                Start Search
              </button>
            </div>
          </div>
          <div className="hidden lg:block flex-1 relative">
             <div className="aspect-square rounded-3xl bg-gray-100 overflow-hidden shadow-2xl relative z-10">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPeecNk-1JKfjJ1aQGbEQztEM_mNksojH-67OeYCfKLNcQO2GBYrz_vwY-VW1MKekFI3Xdsm4fkkdjoa2S_ZqRQmLz1TvAGIPU7Z3JYfW4TwNjlHvFTRCa2qQnkB54KsnpNJFNOfzQb3ZmJN920G6CuqH6pp2o7v1Ch7qoTh36gwQ4lfybURQWXjGmS20uyN4Z4h23w_OB8Ytc6aV5v3G_IDBQCJNJGNCSOp77WAb3cCCorSL_m31EK1_A4X00l7ln9mE8yQjcPUEw" alt="Nurse" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white dark:bg-surface-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
             <h2 className="text-4xl font-black dark:text-white">Our Specialized Services</h2>
             <p className="text-gray-500">Expert care tailored to every unique stage of recovery and life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <ServiceCard icon="medical_services" title="Post-Op Recovery" color="blue" desc="Professional wound management and medication oversight." />
             <ServiceCard icon="psychology" title="Alzheimer's Care" color="purple" desc="Compassionate memory support and daily routine help." />
             <ServiceCard icon="diversity_1" title="Companionship" color="orange" desc="Dignified help with daily activities and emotional support." />
             <ServiceCard icon="spa" title="Palliative Care" color="teal" desc="Comfort-focused care for chronic or end-of-life needs." />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">health_and_safety</span>
              <span className="text-xl font-black">Cuidado con Amor</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm">Professional nursing care delivered with empathy and rigor directly to your home.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="text-sm text-gray-500 space-y-2">
                <li><a href="#" className="hover:text-primary">Find a Nurse</a></li>
                <li><a href="#" className="hover:text-primary">For Families</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-sm text-gray-500 space-y-2">
                <li><a href="#" className="hover:text-primary">Privacy</a></li>
                <li><a href="#" className="hover:text-primary">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: string; title: string; desc: string; color: string }> = ({ icon, title, desc, color }) => (
  <div className="group p-8 rounded-3xl bg-gray-50 dark:bg-background-dark border border-transparent hover:border-primary/50 hover:shadow-xl transition-all cursor-pointer">
    <div className={`size-14 rounded-2xl bg-white dark:bg-surface-dark shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors`}>
      <span className="material-symbols-outlined group-hover:text-primary-content">{icon}</span>
    </div>
    <h3 className="text-xl font-black mb-3 dark:text-white">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default Home;
