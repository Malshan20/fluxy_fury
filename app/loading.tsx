"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-600/20 to-yellow-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-600/20 to-yellow-500/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Crown SVG with animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-500"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <motion.path
              d="M12 1L15 5L19 2L17 9.5L21 12L17 14.5L19 22H5L7 14.5L3 12L7 9.5L5 2L9 5L12 1Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fill: "rgba(234, 179, 8, 0)" }}
              animate={{
                pathLength: 1,
                fill: "rgba(234, 179, 8, 0.8)",
              }}
              transition={{
                pathLength: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, delay: 1, ease: "easeInOut" },
              }}
            />

            {/* Gems on the crown */}
            <motion.circle
              cx="12"
              cy="6"
              r="1.2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              fill="#ef4444"
              className="animate-pulse"
            />
            <motion.circle
              cx="7.5"
              cy="10"
              r="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              fill="#ef4444"
              className="animate-pulse"
            />
            <motion.circle
              cx="16.5"
              cy="10"
              r="1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              fill="#ef4444"
              className="animate-pulse"
            />
          </motion.svg>

          {/* Glow effect */}
          <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-30 rounded-full"></div>
        </motion.div>

        {/* FLUXY FURY text */}
        <motion.h1
          className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          FLUXY FURY
        </motion.h1>

        {/* Loading text with dots animation */}
        <motion.div
          className="text-white text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>Loading</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", delay: 0.4 }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-red-600 to-yellow-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-gray-400 text-sm mt-2">{progress}%</p>
      </div>
    </div>
  )
}
