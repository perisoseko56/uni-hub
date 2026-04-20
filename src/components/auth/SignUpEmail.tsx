import React, { useState } from 'react';
interface SignUpEmailProps {
  onNext: (email: string) => void;
  onBack: () => void;
}
export function SignUpEmail({ onNext, onBack }: SignUpEmailProps) {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('.jkuat')) {
      onNext(email);
    } else {
      // Basic validation visual feedback could go here
      alert('Please use a valid .jkuat student email');
    }
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Input your student email
        </h2>
        <p className="text-slate-500 text-sm px-4">
          To begin creating an account, input your .jkuat student email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1.5">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="email">
            
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50"
            placeholder="student@students.jkuat.ac.ke"
            required />
          
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm shadow-green-600/20">
            
            Next
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 font-medium py-2.5 rounded-lg transition-colors">
            
            Back to Login
          </button>
        </div>
      </form>
    </div>);

}