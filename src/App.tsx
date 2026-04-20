import React from 'react';
import { AuthFlow } from './components/auth/AuthFlow';
export function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-green-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="w-full z-10 flex items-center justify-center">
        <AuthFlow />
      </div>
    </div>);

}