import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { UserPlusIcon, ArrowLeftIcon } from 'lucide-react'
interface CreateProfileProps {
  onFinish: (name?: string) => void
  onBack: () => void
}
export function CreateProfile({ onFinish, onBack }: CreateProfileProps) {
  const [formData, setFormData] = useState({
    name: '',
    regNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    onFinish(formData.name)
  }
  const inputClass =
    'w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-white text-sm'
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-1 rounded-full bg-green-500" />
          <div className="w-8 h-1 rounded-full bg-green-500" />
          <div className="w-8 h-1 rounded-full bg-green-500" />
        </div>

        <div className="text-center mb-6">
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
            <UserPlusIcon className="w-7 h-7 text-green-600" />
          </motion.div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Almost there
          </h2>
          <p className="text-slate-500 text-sm">
            Set up your profile to join the community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. Jane Wanjiku"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="regNumber"
            >
              Registration Number
            </label>
            <input
              id="regNumber"
              name="regNumber"
              type="text"
              value={formData.regNumber}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. SCT221-0000/2022"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className={inputClass}
              placeholder="Pick something cool"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={inputClass}
                placeholder="••••••••"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="confirmPassword"
              >
                Confirm
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={inputClass}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all shadow-sm shadow-green-600/20"
            >
              Create Account
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full text-slate-500 hover:text-slate-700 font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
