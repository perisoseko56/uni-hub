import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MailIcon, ArrowLeftIcon } from 'lucide-react'
interface SignUpEmailProps {
  onNext: (email: string) => void
  onBack: () => void
}
export function SignUpEmail({ onNext, onBack }: SignUpEmailProps) {
  const [emailPrefix, setEmailPrefix] = useState('')
  const domain = '@students.jkuat.ac.ke'
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailPrefix.trim()) return
    onNext(emailPrefix.trim() + domain)
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-1 rounded-full bg-green-500" />
          <div className="w-8 h-1 rounded-full bg-slate-200" />
          <div className="w-8 h-1 rounded-full bg-slate-200" />
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
            className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <MailIcon className="w-7 h-7 text-green-600" />
          </motion.div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Let's get you started
          </h2>
          <p className="text-slate-500 text-sm px-4">
            Enter your JKUAT student email to join the community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="email-prefix"
            >
              Student Email
            </label>
            <div className="flex items-stretch rounded-lg border border-slate-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-200 transition-all overflow-hidden">
              <input
                id="email-prefix"
                type="text"
                value={emailPrefix}
                onChange={(e) => setEmailPrefix(e.target.value)}
                className="flex-1 min-w-0 px-4 py-3 outline-none text-slate-700 bg-white text-sm"
                placeholder="your.name"
                required
              />
              <span className="inline-flex items-center px-3 py-3 bg-green-600 text-white text-sm font-semibold whitespace-nowrap select-none">
                {domain}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all shadow-sm shadow-green-600/20 flex items-center justify-center gap-2"
            >
              Continue
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full text-slate-500 hover:text-slate-700 font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
