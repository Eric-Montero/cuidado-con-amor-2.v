
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'M', val: 40 },
  { name: 'T', val: 65 },
  { name: 'W', val: 30 },
  { name: 'T', val: 85 },
  { name: 'F', val: 45 },
  { name: 'S', val: 20 },
  { name: 'S', val: 10 },
];

const NurseDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined font-black">medical_services</span>
          </div>
          <h2 className="text-xl font-black dark:text-white tracking-tight">Care Dashboard</h2>
        </div>
        <div className="flex items-center gap-6">
           <button className="relative text-gray-400 hover:text-primary"><span className="material-symbols-outlined">notifications</span><span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full"></span></button>
           <div className="flex items-center gap-3 border-l pl-6 border-gray-100 dark:border-gray-700">
              <div className="text-right hidden sm:block">
                 <p className="text-sm font-black dark:text-white">Sarah Jenkins</p>
                 <p className="text-xs text-primary font-bold">RN Specialist</p>
              </div>
              <img src="https://picsum.photos/seed/nurse/100" className="size-10 rounded-full border-2 border-primary" />
           </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto p-6 lg:p-10 space-y-8">
        <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/30 p-4 rounded-3xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-orange-500 text-3xl">warning</span>
            <div>
              <p className="font-black text-orange-900 dark:text-orange-200">Certification Alert</p>
              <p className="text-sm text-orange-700 dark:text-orange-300">Your CPR license expires in 5 days. Please update your documents.</p>
            </div>
          </div>
          <button className="bg-white dark:bg-orange-900/40 px-4 py-2 rounded-xl text-xs font-black shadow-sm">Update Now</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 space-y-8">
              {/* Hero Clock-In */}
              <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                 <div className="absolute right-0 top-0 h-full w-48 bg-primary opacity-5 rounded-l-full"></div>
                 <div className="space-y-4 relative z-10 text-center md:text-left">
                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">Active Shift</p>
                    <h2 className="text-5xl font-black dark:text-white tabular-nums">09:41 <span className="text-lg text-gray-400">AM</span></h2>
                    <p className="text-sm text-gray-500 font-bold flex items-center justify-center md:justify-start gap-2">
                       <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                       123 Healthcare Ave, Springfield
                    </p>
                 </div>
                 <button className="bg-primary text-primary-content h-20 w-full md:w-64 rounded-3xl font-black text-xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined text-3xl">timer</span>
                    Clock Out
                 </button>
              </div>

              {/* Upcoming Shifts */}
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black dark:text-white">Upcoming Assignments</h3>
                    <button className="text-sm font-black text-primary">View Calendar</button>
                 </div>
                 <div className="space-y-3">
                    {[1, 2].map(i => (
                      <div key={i} className="bg-white dark:bg-surface-dark p-5 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                         <div className="flex items-center gap-6">
                            <div className="bg-gray-50 dark:bg-background-dark p-4 rounded-2xl flex flex-col items-center">
                               <span className="text-xs font-black text-gray-400">OCT</span>
                               <span className="text-2xl font-black dark:text-white">{24 + i}</span>
                            </div>
                            <div>
                               <h4 className="font-black dark:text-white">Post-Op Support</h4>
                               <p className="text-sm text-gray-500">8:00 AM - 4:00 PM • Maria S.</p>
                            </div>
                         </div>
                         <div className="flex gap-2">
                            <button className="px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-xl text-xs font-black">Details</button>
                            <button className="size-10 bg-primary/10 text-primary flex items-center justify-center rounded-xl"><span className="material-symbols-outlined text-sm">map</span></button>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              {/* Earnings Widget */}
              <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm">
                 <h3 className="font-black text-lg mb-6 dark:text-white">Weekly Earnings</h3>
                 <div className="mb-8">
                    <p className="text-sm font-bold text-gray-400">Net Balance</p>
                    <div className="flex items-baseline gap-2">
                       <h4 className="text-4xl font-black dark:text-white">$1,240.00</h4>
                       <span className="text-primary font-black text-xs">↑ 12%</span>
                    </div>
                 </div>
                 <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={data}>
                          <Bar dataKey="val" radius={[4, 4, 4, 4]}>
                             {data.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={index === 3 ? '#13ec5b' : '#13ec5b33'} />
                             ))}
                          </Bar>
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
                 <button className="w-full mt-8 bg-secondary text-white py-4 rounded-2xl font-black text-sm hover:opacity-90 transition-all">Withdraw Payout</button>
              </div>

              {/* Quick Tasks */}
              <div className="bg-white dark:bg-surface-dark p-6 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm">
                 <h3 className="font-black text-lg mb-4 dark:text-white">Documentation</h3>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <span className="size-5 rounded-full border-2 border-primary mt-1"></span>
                       <div>
                          <p className="text-sm font-black dark:text-white">Update Vitals - Hector R.</p>
                          <p className="text-xs text-gray-400">Required before clock-out</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="size-5 rounded-full border-2 border-red-500 mt-1"></span>
                       <div>
                          <p className="text-sm font-black dark:text-white">SOAP Notes - John D.</p>
                          <p className="text-xs text-red-500 font-bold">Overdue by 2h</p>
                       </div>
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
};

export default NurseDashboard;
