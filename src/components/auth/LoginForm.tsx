import React, { useState } from 'react';
interface LoginFormProps {
  onNavigate: (step: 'signup-email' | 'forgot-password') => void;
  onLogin: () => void;
}
export function LoginForm({ onNavigate, onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', {
      username,
      password
    });
    onLogin();
  };
  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-green-700 mb-2">Login</h2>
        <p className="text-slate-500 text-sm">
          Welcome back to your student portal
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="username">
            
            Username or Email
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700"
            placeholder="Enter your username"
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700"
            placeholder="••••••••"
            required />
          
        </div>

        <div className="flex items-center justify-between pt-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-green-600 focus:ring-green-500 cursor-pointer" />
            
            <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
              Remember me
            </span>
          </label>
          <button
            type="button"
            onClick={() => onNavigate('forgot-password')}
            className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
            
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors mt-4 shadow-sm shadow-green-600/20">
          
          Sign in
        </button>
      </form>

      <div className="mt-8 text-center text-sm text-slate-600">
        Don't have an account?{' '}
        <button
          onClick={() => onNavigate('signup-email')}
          className="text-green-600 hover:text-green-700 font-semibold transition-colors">
          
          Sign up
        </button>
      </div>
    </div>);

}