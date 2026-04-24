import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheckIcon, ArrowLeftIcon } from 'lucide-react'
interface OTPVerificationProps {
  email: string
  onVerify: () => void
  onBack: () => void
}
export function OTPVerification({
  email,
  onVerify,
  onBack,
}: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])
  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return
    const newOtp = [...otp]
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }
  }
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const otpString = otp.join('')
    if (otpString.length === 6) {
      onVerify()
    }
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-green-900 p-8 rounded-2xl shadow-xl border border-green-800 text-white">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-1 rounded-full bg-green-400" />
          <div className="w-8 h-1 rounded-full bg-green-400" />
          <div className="w-8 h-1 rounded-full bg-green-700" />
        </div>

        <div className="text-center mb-8">
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              delay: 0.1,
            }}
            className="w-14 h-14 bg-green-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <ShieldCheckIcon className="w-7 h-7 text-green-400" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-3">Check your inbox</h2>
          <p className="text-green-100/80 text-sm leading-relaxed">
            We sent a 6-digit code to
            <br />
            <span className="font-semibold text-white">
              {email || 'your email'}
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-center gap-2 sm:gap-3">
            {otp.map((digit, index) => (
              <motion.input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold bg-green-800/50 border-2 border-green-700 rounded-xl focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all outline-none text-white placeholder-green-700"
                placeholder="·"
              />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={otp.join('').length !== 6}
              className="w-full bg-green-500 hover:bg-green-400 disabled:bg-green-800 disabled:text-green-600/50 text-green-950 font-bold py-3 rounded-lg transition-colors shadow-lg shadow-green-900/50"
            >
              Verify & Continue
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full text-green-300 hover:text-green-200 font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Change email
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}