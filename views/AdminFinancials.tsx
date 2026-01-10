
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { name: 'Week 1', gross: 4000, net: 2400 },
  { name: 'Week 2', gross: 3000, net: 1398 },
  { name: 'Week 3', gross: 2000, net: 9800 },
  { name: 'Week 4', gross: 2780, net: 3908 },
  { name: 'Week 5', gross: 1890, net: 4800 },
  { name: 'Week 6', gross: 2390, net: 3800 },
  { name: 'Week 7', gross: 3490, net: 4300 },
];

const AdminFinancials: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      {/* Mini Sidebar for Admin */}
      <aside className="w-20 lg:w-64 bg-white dark:bg-surface-dark border-r border-gray-100 dark:border-gray-800 flex flex-col p-4">
         <div className="flex items-center gap-3 px-2 mb-10">
            <span className="material-symbols-outlined text-primary font-black text-3xl">payments</span>
            <span className="hidden lg:block font-black text-xl tracking-tighter">Finance Hub</span>
         </div>
         <nav className="flex-1 space-y-2">
            <NavIcon icon="analytics" label="Overview" active />
            <NavIcon icon="account_balance" label="Ledger" />
            <NavIcon icon="settings_suggest" label="Commission" />
         </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-6 lg:p-10">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight dark:text-white">Commission Control</h1>
            <p className="text-gray-500 mt-2">Oversee platform revenue and manage operational fees.</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 px-6 py-2 rounded-xl font-bold text-sm shadow-sm">Export Report</button>
            <button className="bg-secondary text-white px-6 py-2 rounded-xl font-bold text-sm shadow-xl">Audit Payouts</button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
           {/* Fee Settings */}
           <div className="xl:col-span-1 bg-white dark:bg-surface-dark p-8 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-black text-lg mb-4 dark:text-white">Platform Fee</h3>
                <p className="text-sm text-gray-500 mb-8">Set the commission percentage taken from each nurse booking.</p>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-2xl text-gray-300">%</span>
                  <input type="number" defaultValue="20" className="w-full bg-gray-50 dark:bg-background-dark border-none h-20 rounded-3xl px-8 text-4xl font-black dark:text-white focus:ring-2 focus:ring-primary transition-all" />
                </div>
                <button className="w-full bg-primary text-primary-content font-black py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Update Strategy</button>
                <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last change: 12 days ago</p>
              </div>
           </div>

           {/* Metrics Grid */}
           <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard title="Gross Revenue" value="$452,000" trend="+12.5%" icon="payments" color="blue" />
              <StatCard title="Net Platform Profit" value="$90,400" trend="+8.2%" icon="account_balance_wallet" color="green" />
              <StatCard title="Pending Payouts" value="$12,500" trend="Action Needed" icon="pending_actions" color="red" />
              
              {/* Revenue Graph */}
              <div className="md:col-span-3 bg-white dark:bg-surface-dark p-8 rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm h-[400px]">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="font-black text-lg dark:text-white">Revenue Analysis</h3>
                    <select className="bg-transparent border-none font-bold text-gray-500 text-sm focus:ring-0">
                       <option>Last 30 Days</option>
                       <option>Year to Date</option>
                    </select>
                 </div>
                 <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorGross" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#13ec5b" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#13ec5b" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip />
                        <Area type="monotone" dataKey="gross" stroke="#13ec5b" fillOpacity={1} fill="url(#colorGross)" strokeWidth={4} />
                        <Area type="monotone" dataKey="net" stroke="#0d1b12" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
                      </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>
           </div>
        </div>

        {/* Recent Ledger */}
        <div className="mt-12 bg-white dark:bg-surface-dark rounded-[40px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
           <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex items-center justify-between">
              <h3 className="font-black text-xl dark:text-white">Transaction Ledger</h3>
              <button className="text-sm font-black text-primary">View Full History</button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 dark:bg-background-dark/50 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-4">ID & Date</th>
                    <th className="px-8 py-4">Parties</th>
                    <th className="px-8 py-4 text-right">Total</th>
                    <th className="px-8 py-4 text-right">Fee (20%)</th>
                    <th className="px-8 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  <LedgerRow id="#TRX-9982" date="Oct 24" family="John Doe" nurse="Emma W." total="$250.00" fee="$50.00" status="Processed" />
                  <LedgerRow id="#TRX-9983" date="Oct 24" family="Sarah M." nurse="Raj K." total="$1,200.00" fee="$240.00" status="Pending" />
                </tbody>
              </table>
           </div>
        </div>
      </main>
    </div>
  );
};

const NavIcon: React.FC<{ icon: string; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <div className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all ${active ? 'bg-primary text-primary-content font-black shadow-lg' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5'}`}>
    <span className="material-symbols-outlined">{icon}</span>
    <span className="hidden lg:block text-sm">{label}</span>
  </div>
);

const StatCard: React.FC<{ title: string; value: string; trend: string; icon: string; color: string }> = ({ title, value, trend, icon, color }) => (
  <div className="bg-white dark:bg-surface-dark p-6 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
    <div className="flex items-center justify-between">
       <div className={`size-12 rounded-2xl bg-gray-50 dark:bg-background-dark flex items-center justify-center`}>
          <span className="material-symbols-outlined text-primary">{icon}</span>
       </div>
       <span className={`text-[10px] font-black px-2 py-1 rounded-full ${trend.includes('+') ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{trend}</span>
    </div>
    <div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{title}</p>
      <h4 className="text-2xl font-black dark:text-white tabular-nums">{value}</h4>
    </div>
  </div>
);

const LedgerRow: React.FC<{ id: string; date: string; family: string; nurse: string; total: string; fee: string; status: string }> = (props) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
    <td className="px-8 py-5">
      <p className="text-sm font-black dark:text-white">{props.id}</p>
      <p className="text-xs text-gray-400 font-bold">{props.date}</p>
    </td>
    <td className="px-8 py-5">
      <div className="flex gap-4">
         <div className="text-xs">
            <p className="font-bold text-gray-400 uppercase">Family</p>
            <p className="font-black dark:text-white">{props.family}</p>
         </div>
         <div className="text-xs">
            <p className="font-bold text-gray-400 uppercase">Nurse</p>
            <p className="font-black dark:text-white">{props.nurse}</p>
         </div>
      </div>
    </td>
    <td className="px-8 py-5 text-right font-black dark:text-white tabular-nums">{props.total}</td>
    <td className="px-8 py-5 text-right font-bold text-primary tabular-nums">{props.fee}</td>
    <td className="px-8 py-5 text-center">
       <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${props.status === 'Processed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
          {props.status}
       </span>
    </td>
  </tr>
);

export default AdminFinancials;
