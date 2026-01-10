
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      <aside className="w-64 bg-white dark:bg-surface-dark border-r border-gray-100 dark:border-gray-800 flex flex-col p-6 space-y-8">
         <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary font-black text-3xl">medical_services</span>
            <h1 className="font-black text-xl dark:text-white tracking-tighter leading-none">CareAdmin</h1>
         </div>
         <nav className="space-y-2">
            <NavItem icon="dashboard" label="Dashboard" active />
            <NavItem icon="groups" label="Nurses" />
            <NavItem icon="face" label="Patients" />
            <NavItem icon="settings_suggest" label="Services" />
            <NavItem icon="payments" label="Financials" onClick={() => navigate('/admin-financials')} />
            <NavItem icon="verified" label="Quality Control" />
         </nav>
         <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3">
               <img src="https://picsum.photos/seed/admin/100" className="size-10 rounded-full" />
               <div>
                  <p className="text-sm font-black dark:text-white">Elena R.</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Super Admin</p>
               </div>
            </div>
         </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-8 lg:p-12 space-y-12">
         <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
               <h2 className="text-4xl font-black dark:text-white tracking-tight">Executive Dashboard</h2>
               <p className="text-gray-500 mt-2">Oversee platform health and clinical verification pipelines.</p>
            </div>
            <div className="flex gap-3">
               <button className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-6 py-2.5 rounded-2xl font-black text-sm shadow-sm">Export CSV</button>
               <button className="bg-primary text-primary-content px-6 py-2.5 rounded-2xl font-black text-sm shadow-xl shadow-primary/20">Add Service</button>
            </div>
         </header>

         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <KPIStat title="Active Services" value="1,240" trend="+5%" icon="medical_services" />
            <KPIStat title="Monthly Rev" value="$45,300" trend="+12%" icon="attach_money" />
            <KPIStat title="Verified Nurses" value="850" trend="20 Pending" icon="badge" warning />
            <KPIStat title="Satisfaction" value="4.8/5" trend="+1%" icon="reviews" />
         </div>

         <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 bg-white dark:bg-surface-dark rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
               <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between">
                  <h3 className="font-black text-xl dark:text-white">Verification Queue</h3>
                  <button className="text-sm font-black text-primary">View All</button>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead className="bg-gray-50/50 dark:bg-background-dark/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <tr>
                           <th className="px-8 py-4">Nurse</th>
                           <th className="px-8 py-4">Specialty</th>
                           <th className="px-8 py-4">Status</th>
                           <th className="px-8 py-4 text-right">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                        <VerificationRow name="Ana García" specialty="Pediatrics" date="Oct 24" status="Pending" img="https://picsum.photos/seed/ana/100" />
                        <VerificationRow name="Carlos Ruiz" specialty="Geriatrics" date="Oct 23" status="Under Review" img="https://picsum.photos/seed/carlos/100" />
                        <VerificationRow name="Maria Rodriguez" specialty="ER Care" date="Oct 22" status="Approved" img="https://picsum.photos/seed/maria2/100" />
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="bg-white dark:bg-surface-dark rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col h-[500px]">
               <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between">
                  <h3 className="font-black text-xl dark:text-white">Demand Heatmap</h3>
                  <span className="material-symbols-outlined text-gray-400">filter_list</span>
               </div>
               <div className="flex-1 m-8 rounded-[32px] bg-gray-100 dark:bg-background-dark relative overflow-hidden group">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPP1QciuNajYohImfPhnsIHkUzTQpQMVnC4HKnYDYJm0t8DwSUL_jTju9gtQZJCBwZWENESb0hwrIAKJixgOIQLtrTfRFGm-GAPl4c-LLTzXlSeqKahHJb2S5nwm7i-GsgpW-NlUn3WA-1MrBQeRqRF3j4LXDizTy7Sc99rz2DZrjdWKCMAcYsQuBq0GQ_JarzYT8nr03FpryY-Iqg66fWvl49zs9Q565xpiPdBhRhySAoxIhPKQt1pMoDmZh1304ZZEytLXyT_F-B" className="w-full h-full object-cover grayscale opacity-50 contrast-125" />
                  <div className="absolute top-1/4 left-1/3 size-20 bg-primary/40 rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-1/3 right-1/4 size-32 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
                     <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Top Growth Zone</p>
                     <p className="text-sm font-black dark:text-white">Centro Histórico (+14%)</p>
                  </div>
               </div>
            </div>
         </div>
      </main>
    </div>
  );
};

const NavItem: React.FC<{ icon: string; label: string; active?: boolean; onClick?: () => void }> = (props) => (
  <div onClick={props.onClick} className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer ${props.active ? 'bg-primary/20 text-primary-dark font-black' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 font-bold'}`}>
    <span className={`material-symbols-outlined ${props.active ? 'filled' : ''}`}>{props.icon}</span>
    <span className="text-sm">{props.label}</span>
  </div>
);

const KPIStat: React.FC<{ title: string; value: string; trend: string; icon: string; warning?: boolean }> = (props) => (
  <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
     <div className="flex items-center justify-between">
        <div className="size-12 rounded-2xl bg-gray-50 dark:bg-background-dark flex items-center justify-center text-primary">
           <span className="material-symbols-outlined">{props.icon}</span>
        </div>
        <span className={`text-[10px] font-black px-3 py-1 rounded-full ${props.warning ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{props.trend}</span>
     </div>
     <div>
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{props.title}</p>
        <h4 className="text-3xl font-black dark:text-white">{props.value}</h4>
     </div>
  </div>
);

const VerificationRow: React.FC<{ name: string; specialty: string; date: string; status: string; img: string }> = (props) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
     <td className="px-8 py-5">
        <div className="flex items-center gap-4">
           <img src={props.img} className="size-10 rounded-2xl object-cover" />
           <div>
              <p className="font-black text-sm dark:text-white">{props.name}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Applied {props.date}</p>
           </div>
        </div>
     </td>
     <td className="px-8 py-5 text-sm font-bold text-gray-500">{props.specialty}</td>
     <td className="px-8 py-5">
        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${props.status === 'Approved' ? 'bg-green-100 text-green-700' : props.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}`}>
           {props.status}
        </span>
     </td>
     <td className="px-8 py-5 text-right">
        <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">visibility</span></button>
     </td>
  </tr>
);

export default AdminDashboard;
