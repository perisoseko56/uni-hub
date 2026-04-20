import React, { useState } from 'react';
interface CreateProfileProps {
  onFinish: (name?: string) => void;
  onBack: () => void;
}
export function CreateProfile({ onFinish, onBack }: CreateProfileProps) {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    onFinish(formData.name);
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Create Profile
        </h2>
        <p className="text-slate-500 text-sm">
          Please provide the following details to finish creating your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="name">
            
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50"
            required />
          
        </div>

        <div className="space-y-1.5">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="username">
            
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50"
            required />
          
        </div>

        <div className="space-y-1.5">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="password">
            
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50"
            required />
          
        </div>

        <div className="space-y-1.5">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="confirmPassword">
            
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50"
            required />
          
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm shadow-green-600/20">
            
            Finish
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 font-medium py-2.5 rounded-lg transition-colors">
            
            Back
          </button>
        </div>
      </form>
    </div>);

}