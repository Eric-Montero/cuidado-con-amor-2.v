
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
           <div onClick={() => navigate('/')} className="flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-outlined text-primary text-3xl font-black">health_and_safety</span>
              <h2 className="text-xl font-black dark:text-white">Cuidado con Amor</h2>
           </div>
           <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="w-full flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 rounded-xl">
                 <span className="material-symbols-outlined text-gray-400">search</span>
                 <input className="w-full bg-transparent border-none h-11 focus:ring-0 text-sm dark:text-white" placeholder="Search by name, specialty, or condition..." />
              </div>
           </div>
           <div className="flex gap-4 items-center">
              <button className="h-10 px-6 rounded-xl bg-primary text-primary-content font-black">Sign Up</button>
           </div>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto p-6 lg:p-10 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-[300px] shrink-0 space-y-8">
           <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="font-black text-lg mb-6 dark:text-white">Filters</h3>
              <div className="space-y-6">
                <div>
                   <p className="font-bold text-sm text-gray-500 uppercase mb-3">Specialization</p>
                   <div className="space-y-3">
                      {['Alzheimer Care', 'Pediatric Care', 'Post-op Recovery', 'Palliative Support'].map(tag => (
                        <label key={tag} className="flex items-center gap-3 cursor-pointer group">
                           <input type="checkbox" className="size-5 rounded border-gray-300 text-primary focus:ring-primary" />
                           <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary">{tag}</span>
                        </label>
                      ))}
                   </div>
                </div>
                <hr className="border-gray-100 dark:border-gray-800"/>
                <div>
                   <p className="font-bold text-sm text-gray-500 uppercase mb-3">Experience</p>
                   <div className="space-y-3">
                      {['1-3 Years', '3-5 Years', '5-10 Years', '10+ Years'].map(lvl => (
                        <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                           <input type="radio" name="exp" className="size-5 border-gray-300 text-primary focus:ring-primary" />
                           <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-primary">{lvl}</span>
                        </label>
                      ))}
                   </div>
                </div>
              </div>
           </div>
        </aside>

        <main className="flex-1 space-y-6">
           <div className="flex items-center justify-between">
              <h1 className="text-2xl font-black dark:text-white">Nurses in your area</h1>
              <span className="text-sm text-gray-400 font-bold">124 Results</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map(id => (
                <div key={id} onClick={() => navigate('/profile')} className="group bg-white dark:bg-surface-dark rounded-3xl border border-gray-100 dark:border-gray-800 p-6 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all cursor-pointer flex flex-col h-full">
                   <div className="flex items-start gap-4 mb-6">
                      <div className="relative shrink-0">
                        <img src={`https://picsum.photos/seed/${id}/200`} className="size-20 rounded-2xl object-cover border-4 border-white dark:border-background-dark shadow-md" />
                        <div className="absolute -bottom-1 -right-1 size-5 bg-primary border-4 border-white dark:border-surface-dark rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-black text-lg dark:text-white">Maria Gonzalez</h3>
                        <p className="text-sm text-primary font-bold">RN • Geriatric Spec.</p>
                        <div className="flex items-center gap-1 text-yellow-500 mt-1">
                           <span className="material-symbols-outlined text-sm filled">star</span>
                           <span className="text-xs font-black">4.9 (52)</span>
                        </div>
                      </div>
                   </div>
                   <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-6">
                     Certified nurse with over 10 years of hospital experience. Passionate about providing dignified care...
                   </p>
                   <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div>
                         <span className="text-xs font-bold text-gray-400 uppercase">Rate</span>
                         <p className="text-lg font-black dark:text-white">$250 <span className="text-xs text-gray-400">/hr</span></p>
                      </div>
                      <button className="bg-primary/10 text-primary-dark font-black px-6 py-2 rounded-xl text-sm group-hover:bg-primary group-hover:text-primary-content transition-all">
                        Profile
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </main>
      </div>
    </div>
  );
};

export default Search;
