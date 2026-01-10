
import React from 'react';

const FamilyPortal: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
           <span className="material-symbols-outlined text-primary text-3xl font-black">family_restroom</span>
           <h1 className="text-xl font-black dark:text-white tracking-tighter">Family Portal</h1>
        </div>
        <div className="flex items-center gap-4">
           <button className="size-10 rounded-full bg-gray-50 dark:bg-background-dark flex items-center justify-center"><span className="material-symbols-outlined text-gray-500">notifications</span></button>
           <img src="https://picsum.photos/seed/sarah/100" className="size-10 rounded-full border-2 border-primary/20" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 lg:p-10 space-y-8">
        <div className="flex flex-col lg:flex-row gap-8">
           <div className="flex-1 space-y-8">
              {/* Patient Status Hero */}
              <div className="bg-white dark:bg-surface-dark p-10 rounded-[40px] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center gap-10">
                 <div className="relative">
                    <img src="https://picsum.photos/seed/hector/200" className="size-32 rounded-[40px] object-cover shadow-2xl" />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-content px-3 py-1 rounded-full text-[10px] font-black shadow-lg">STABLE</div>
                 </div>
                 <div className="space-y-3 text-center md:text-left flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                       <h2 className="text-2xl font-black dark:text-white">Hector Rivera</h2>
                       <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                    </div>
                    <p className="text-lg font-bold text-gray-600 dark:text-gray-300 italic">"Dad is resting comfortably after lunch. His mood is very cheerful today."</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      Updated 5 mins ago by Nurse Elena
                    </p>
                 </div>
              </div>

              {/* Vitals Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 <MiniStat label="Heart Rate" value="72 bpm" icon="favorite" trend="Normal" />
                 <MiniStat label="Blood Pressure" value="120/80" icon="blood_pressure" trend="Stable" />
                 <MiniStat label="O2 Sat" value="98%" icon="air" trend="Excellent" />
                 <MiniStat label="Mood" value="Cheerful" icon="mood" trend="Positive" />
              </div>

              {/* Journey Timeline */}
              <div className="space-y-6">
                 <h3 className="text-xl font-black dark:text-white">Patient Journey</h3>
                 <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm relative">
                    <div className="absolute left-10 top-10 bottom-10 w-0.5 bg-primary/20"></div>
                    <div className="space-y-12">
                       <TimelineItem time="12:30 PM" title="Lunch Served" desc="Grilled chicken with rice. Ate 100% of meal." icon="restaurant" />
                       <TimelineItem time="10:00 AM" title="Medication Given" desc="Morning dosage of Metformin completed." icon="check_circle" active />
                       <TimelineItem time="08:00 AM" title="Shift Start" desc="Nurse Elena arrived and completed initial vitals." icon="login" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Sidebar Widgets */}
           <div className="w-full lg:w-80 space-y-8">
              {/* Next Visit */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-[40px] shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
                 <h3 className="font-black dark:text-white">Next Visit</h3>
                 <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/seed/elena/100" className="size-12 rounded-2xl" />
                    <div>
                       <p className="font-black text-sm dark:text-white">Nurse Elena</p>
                       <p className="text-xs text-primary font-bold">Tomorrow, 9:00 AM</p>
                    </div>
                 </div>
              </div>

              {/* Chat Widget */}
              <div className="bg-secondary p-6 rounded-[40px] shadow-2xl h-[400px] flex flex-col border border-primary/20">
                 <h3 className="text-white font-black mb-4 flex items-center justify-between">Care Team Chat <span className="size-2 bg-primary rounded-full animate-ping"></span></h3>
                 <div className="flex-1 overflow-y-auto space-y-4 no-scrollbar mb-4">
                    <div className="bg-white/5 p-4 rounded-3xl rounded-tl-none text-xs text-gray-300">Elena: Hector is sleeping now.</div>
                    <div className="bg-primary/20 p-4 rounded-3xl rounded-tr-none text-xs text-white ml-auto max-w-[80%]">Thanks Elena! See you tomorrow.</div>
                 </div>
                 <div className="relative">
                    <input className="w-full bg-white/10 border-none h-12 rounded-2xl px-4 text-xs text-white placeholder:text-gray-500 focus:ring-1 focus:ring-primary" placeholder="Send message..." />
                    <button className="absolute right-2 top-2 size-8 bg-primary rounded-xl flex items-center justify-center text-primary-content"><span className="material-symbols-outlined text-sm">send</span></button>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

const MiniStat: React.FC<{ label: string; value: string; icon: string; trend: string }> = (props) => (
  <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-2 group hover:border-primary transition-all">
    <div className="flex items-center gap-2 text-gray-400 group-hover:text-primary transition-colors">
       <span className="material-symbols-outlined text-[20px]">{props.icon}</span>
       <p className="text-[10px] font-black uppercase tracking-widest">{props.label}</p>
    </div>
    <p className="text-xl font-black dark:text-white">{props.value}</p>
    <p className="text-[10px] text-green-500 font-black uppercase">{props.trend}</p>
  </div>
);

const TimelineItem: React.FC<{ time: string; title: string; desc: string; icon: string; active?: boolean }> = (props) => (
  <div className="flex gap-8 relative z-10">
     <div className={`size-10 rounded-full flex items-center justify-center shrink-0 shadow-lg ${props.active ? 'bg-primary text-primary-content' : 'bg-white dark:bg-background-dark text-gray-300 border-2 border-gray-100 dark:border-gray-800'}`}>
        <span className="material-symbols-outlined text-sm">{props.icon}</span>
     </div>
     <div>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">{props.time}</span>
        <h4 className="font-black text-lg dark:text-white leading-tight">{props.title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{props.desc}</p>
     </div>
  </div>
);

export default FamilyPortal;
