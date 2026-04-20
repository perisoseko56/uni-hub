import React, { useEffect, useState, useRef } from 'react';
interface OTPVerificationProps {
  email: string;
  onVerify: () => void;
  onBack: () => void;
}
export function OTPVerification({
  email,
  onVerify,
  onBack
}: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    // Allow only last char if they paste or type fast
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    // Move to next input if value is entered
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
  index: number,
  e: React.KeyboardEvent<HTMLInputElement>) =>
  {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 6) {
      onVerify();
    }
  };
  return (
    <div className="w-full max-w-md mx-auto bg-green-900 p-8 rounded-2xl shadow-xl border border-green-800 text-white">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-3">Verify your email</h2>
        <p className="text-green-100/80 text-sm leading-relaxed">
          A one time code was sent to <br />
          <span className="font-medium text-white">
            {email || 'your email'}
          </span>
          <br />
          please insert to verify
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex justify-center gap-2 sm:gap-3">
          {otp.map((digit, index) =>
          <input
            key={index}
            ref={(el) => inputRefs.current[index] = el}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold bg-green-800/50 border border-green-700 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-400/50 transition-all outline-none text-white placeholder-green-700"
            placeholder="0" />

          )}
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            disabled={otp.join('').length !== 6}
            className="w-full bg-green-500 hover:bg-green-400 disabled:bg-green-800 disabled:text-green-600/50 text-green-950 font-bold py-3 rounded-lg transition-colors shadow-lg shadow-green-900/50">
            
            Verify Code
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full bg-transparent hover:bg-green-800/50 text-green-300 font-medium py-2.5 rounded-lg transition-colors">
            
            Cancel
          </button>
        </div>
      </form>
    </div>);

}