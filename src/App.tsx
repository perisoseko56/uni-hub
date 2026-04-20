import React from 'react';
import { AuthFlow } from './components/AuthFlow';
export function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-green-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* App Header / Logo placeholder */}
      <div className="mb-8 z-10 flex flex-col items-center">
        <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-green-600/20 transform rotate-3">
          <span className="text-white font-bold text-xl tracking-tighter">
            SC
          </span>
        </div>
        <h1 className="text-xl font-semibold text-slate-800 tracking-tight">
          Uni Hub
        </h1>
      </div>

      <div className="w-full z-10 flex items-center justify-center">
        <AuthFlow />
      </div>
    </div>);

}