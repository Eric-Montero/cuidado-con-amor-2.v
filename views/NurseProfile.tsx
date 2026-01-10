
import React, { useState } from 'react';

const NurseProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
           <h2 className="text-xl font-black dark:text-white">Cuidado con Amor</h2>
           <button className="text-sm font-bold text-gray-500">Back to Search</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
           {/* Header Info */}
           <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="relative">
                <img src="https://picsum.photos/seed/profile/400" className="size-32 rounded-3xl object-cover shadow-2xl" />
                <div className="absolute -bottom-2 -right-2 bg-primary p-1.5 rounded-full border-4 border-white dark:border-surface-dark">
                   <span className="material-symbols-outlined text-primary-content text-sm font-black">check</span>
                </div>
              </div>
              <div className="space-y-4 text-center md:text-left flex-1">
                 <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <h1 className="text-3xl font-black dark:text-white">Maria Gonzalez, RN</h1>
                    <span className="bg-primary/10 text-primary-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 border border-primary/20">
                      <span className="material-symbols-outlined text-xs filled">verified</span> Verified
                    </span>
                 </div>
                 <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500 font-bold">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">medical_services</span> Registered Nurse</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">work_history</span> 8 Years Exp.</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">star</span> 4.9 (52 Reviews)</span>
                 </div>
              </div>
           </div>

           {/* Tabs */}
           <div className="space-y-8">
              <div className="flex border-b border-gray-100 dark:border-gray-800 gap-8">
                 {['Experience', 'Reviews', 'Availability'].map(tab => (
                   <button 
                    key={tab} 
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`pb-4 text-sm font-black transition-all ${activeTab === tab.toLowerCase() ? 'text-primary border-b-4 border-primary' : 'text-gray-400 hover:text-gray-600'}`}
                   >
                     {tab}
                   </button>
                 ))}
              </div>
              
              {activeTab === 'experience' && (
                <div className="space-y-12 animate-in fade-in slide-in-from-top-2 duration-300">
                   <section className="space-y-4">
                      <h2 className="text-2xl font-black dark:text-white">About Maria</h2>
                      <p className="text-gray-500 leading-relaxed text-lg">
                        I am a dedicated Registered Nurse with extensive experience in critical care and geriatric recovery. 
                        My focus is on providing dignified, high-quality care that respects the autonomy of my patients 
                        while ensuring strictly following medical protocols.
                      </p>
                   </section>

                   <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 space-y-4">
                         <h3 className="font-black text-gray-400 uppercase text-xs tracking-widest">Certifications</h3>
                         <div className="flex flex-wrap gap-2">
                            {['BLS Certified', 'ACLS Specialist', 'IV Therapy', 'Wound Management'].map(c => (
                              <span key={c} className="bg-primary/10 text-primary-dark px-3 py-1.5 rounded-xl text-xs font-black border border-primary/20">{c}</span>
                            ))}
                         </div>
                      </div>
                      <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 space-y-4">
                         <h3 className="font-black text-gray-400 uppercase text-xs tracking-widest">Specialties</h3>
                         <div className="flex flex-wrap gap-2">
                            {['Geriatrics', 'Post-Op Care', 'ICU Experience', 'Dementia Support'].map(s => (
                              <span key={s} className="bg-secondary/5 dark:bg-white/5 text-secondary dark:text-white px-3 py-1.5 rounded-xl text-xs font-black border border-gray-100 dark:border-gray-800">{s}</span>
                            ))}
                         </div>
                      </div>
                   </section>
                </div>
              )}
           </div>
        </div>

        {/* Sidebar Booking */}
        <div className="lg:col-span-4">
           <div className="sticky top-24 bg-white dark:bg-surface-dark p-8 rounded-[40px] shadow-2xl border border-primary/10 space-y-6">
              <div className="flex items-baseline justify-between mb-4">
                 <h4 className="text-3xl font-black dark:text-white">$25 <span className="text-sm text-gray-400">/hr</span></h4>
                 <div className="flex items-center gap-1 text-primary font-black"><span className="material-symbols-outlined text-sm filled">star</span> 4.9</div>
              </div>
              <div className="space-y-3">
                 <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 dark:bg-background-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                       <p className="text-[10px] font-black text-gray-400 uppercase">Check-in</p>
                       <p className="font-black text-sm dark:text-white">Oct 24</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-background-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                       <p className="text-[10px] font-black text-gray-400 uppercase">Check-out</p>
                       <p className="font-black text-sm dark:text-white">Oct 24</p>
                    </div>
                 </div>
                 <div className="bg-gray-50 dark:bg-background-dark p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <p className="text-[10px] font-black text-gray-400 uppercase">Shift Type</p>
                    <select className="w-full bg-transparent border-none p-0 font-black text-sm dark:text-white focus:ring-0">
                       <option>Day Shift (8hrs)</option>
                       <option>Night Shift (12hrs)</option>
                    </select>
                 </div>
              </div>
              <div className="bg-primary/10 p-6 rounded-3xl border border-primary/20 space-y-2">
                 <div className="flex justify-between text-sm"><span className="text-gray-500 font-bold">$25 x 8 hours</span> <span className="font-black dark:text-white">$200</span></div>
                 <div className="flex justify-between text-sm"><span className="text-gray-500 font-bold">Service Fee</span> <span className="font-black dark:text-white">$20</span></div>
                 <div className="pt-2 border-t border-primary/20 flex justify-between items-center"><span className="font-black text-lg dark:text-white">Total</span> <span className="font-black text-xl text-primary-dark">$220</span></div>
              </div>
              <button className="w-full bg-primary text-primary-content h-16 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Request Booking</button>
              <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-tighter">You won't be charged yet</p>
           </div>
        </div>
      </main>
    </div>
  );
};

export default NurseProfile;
