
import React from 'react';

const EHRReport: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="bg-secondary text-white px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">local_hospital</span>
          <h1 className="text-lg font-black tracking-tighter">Digital Shift Report</h1>
        </div>
        <div className="flex items-center gap-4">
           <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-primary">Shift Supervisor</p>
              <p className="text-sm font-bold">Dr. Sarah Jenkins</p>
           </div>
           <button className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-black flex items-center gap-2 animate-pulse shadow-lg shadow-red-500/30">
              <span className="material-symbols-outlined text-sm">warning</span>
              Emergency ABCDE
           </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 lg:p-10 space-y-10">
        {/* Patient Header */}
        <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-6">
              <img src="https://picsum.photos/seed/patient/150" className="size-24 rounded-3xl object-cover shadow-xl" />
              <div>
                <h2 className="text-3xl font-black dark:text-white">Maria Gonzalez</h2>
                <p className="text-sm font-bold text-gray-500">DOB: 12/05/1945 (79 yrs) • ID: #MG-8821</p>
              </div>
           </div>
           <div className="bg-gray-50 dark:bg-background-dark px-6 py-4 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <div>
                 <p className="text-[10px] font-black text-gray-400 uppercase">Current Shift</p>
                 <p className="text-sm font-black dark:text-white">Oct 24, 07:00 - 19:00</p>
              </div>
           </div>
        </div>

        {/* Vitals Grid */}
        <section className="space-y-6">
           <h3 className="text-xl font-black flex items-center gap-3 dark:text-white"><span className="material-symbols-outlined text-primary">monitor_heart</span> Vital Signs</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <VitalInput label="Blood Pressure (mmHg)" placeholder="120/80" icon="blood_pressure" />
              <VitalInput label="Temperature (°C)" placeholder="36.5" icon="device_thermostat" />
              <VitalInput label="Heart Rate (BPM)" placeholder="72" icon="favorite" />
              <VitalInput label="O2 Saturation (%)" placeholder="98" icon="air" />
           </div>
        </section>

        {/* Medication Log */}
        <section className="space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="text-xl font-black flex items-center gap-3 dark:text-white"><span className="material-symbols-outlined text-primary">pill</span> Medication Log</h3>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-[10px] font-black uppercase">2 Scheduled</span>
           </div>
           <div className="bg-white dark:bg-surface-dark rounded-[40px] border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-background-dark/50 border-b border-gray-100 dark:border-gray-800 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-5">Time</th>
                    <th className="px-8 py-5">Medication</th>
                    <th className="px-8 py-5">Dosage</th>
                    <th className="px-8 py-5 text-center">Given</th>
                    <th className="px-8 py-5 text-right">Proof</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-black text-sm dark:text-white">08:00 AM</td>
                    <td className="px-8 py-6">
                       <p className="font-black text-sm dark:text-white">Metformin</p>
                       <p className="text-xs text-gray-400 font-bold">With meals</p>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-gray-500">500mg</td>
                    <td className="px-8 py-6 text-center">
                       <input type="checkbox" defaultChecked className="size-6 rounded-lg text-primary focus:ring-primary border-gray-200" />
                    </td>
                    <td className="px-8 py-6 text-right">
                       <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 ml-auto"><span className="material-symbols-outlined text-xs filled">check_circle</span> Uploaded</button>
                    </td>
                  </tr>
                </tbody>
              </table>
           </div>
        </section>

        {/* SOAP Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <section className="space-y-6">
              <h3 className="text-xl font-black flex items-center gap-3 dark:text-white"><span className="material-symbols-outlined text-primary">edit_note</span> Evolution (SOAP)</h3>
              <div className="bg-white dark:bg-surface-dark p-6 rounded-[40px] border border-gray-100 dark:border-gray-800 h-64 shadow-sm">
                 <textarea className="w-full h-full bg-transparent border-none focus:ring-0 resize-none text-sm dark:text-white placeholder:text-gray-300" placeholder="Patient alert and oriented x3. Progressing well..." />
              </div>
           </section>
           <section className="space-y-6">
              <h3 className="text-xl font-black flex items-center gap-3 dark:text-white"><span className="material-symbols-outlined text-primary">dermatology</span> Wound Care</h3>
              <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] border-2 border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center h-64 group hover:border-primary transition-all cursor-pointer">
                 <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
                 </div>
                 <p className="font-black dark:text-white">Upload Wound Photo</p>
                 <p className="text-xs text-gray-400 font-bold">Standard clinical assessment required</p>
              </div>
           </section>
        </div>

        {/* Footer Actions */}
        <footer className="pt-10 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-end gap-4">
           <button className="h-14 px-10 rounded-2xl border border-gray-200 dark:border-gray-700 font-black dark:text-white hover:bg-gray-50 transition-all w-full sm:w-auto">Save Draft</button>
           <button className="h-14 px-10 rounded-2xl bg-primary text-primary-content font-black shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto">Finalize Shift Report</button>
        </footer>
      </main>
    </div>
  );
};

const VitalInput: React.FC<{ label: string; placeholder: string; icon: string }> = ({ label, placeholder, icon }) => (
  <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4 hover:border-primary transition-colors">
     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
     <div className="flex items-center gap-3">
        <input className="w-full bg-transparent border-none p-0 text-3xl font-black dark:text-white focus:ring-0 placeholder:text-gray-100" placeholder={placeholder} />
        <span className="material-symbols-outlined text-gray-300">{icon}</span>
     </div>
  </div>
);

export default EHRReport;
