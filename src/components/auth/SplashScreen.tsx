import React from 'react'
import { motion } from 'framer-motion'
export function SplashScreen() {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center py-20">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
        className="text-center"
      >
        <span className="text-5xl font-black tracking-tight">
          <span className="text-green-600">Student</span>
          <span className="text-slate-800">Companion</span>
        </span>
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="text-sm text-slate-400 mt-3 font-medium tracking-wide uppercase"
      >
        Your campus, connected
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.6,
        }}
        className="mt-10 flex gap-1.5"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
