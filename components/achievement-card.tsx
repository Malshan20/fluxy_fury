"use client"

import { motion } from "framer-motion"
import { Trophy, Calendar, DollarSign } from "lucide-react"
import type { Achievement } from "@/types/achievement"

interface AchievementCardProps {
  achievement: Achievement
  delay?: number
}

export default function AchievementCard({ achievement, delay = 0 }: AchievementCardProps) {
  const { title, description, prize, date } = achievement

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="group relative bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-yellow-500"></div>

      <div className="p-6">
        <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-full">
          <Trophy className="w-8 h-8 text-yellow-500" />
        </div>

        <h3 className="text-xl font-bold mb-4 text-center text-white">{title}</h3>

        <p className="text-gray-300 mb-6 text-center">{description}</p>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg">
            <DollarSign className="w-5 h-5 text-yellow-500" />
            <div>
              <p className="text-xs text-gray-400">Prize Pool</p>
              <p className="text-white font-medium">{prize}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-red-900/20 rounded-lg">
            <Calendar className="w-5 h-5 text-red-500" />
            <div>
              <p className="text-xs text-gray-400">Date</p>
              <p className="text-white font-medium">{date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full blur-[100px] opacity-30"></div>
    </motion.div>
  )
}
