"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, Trophy, Target, Award } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
  stats: {
    kills: number
    winRate: number
    tournaments: number
  }
}

export default function TeamMember({ name, role, image, description, stats }: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg overflow-hidden"
    >
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold mb-1 text-white">{name}</h3>
          <p className="text-red-500 font-medium">{role}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
          >
            Player Stats
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>

          <div className="flex gap-2">
            {["twitter", "instagram", "twitch"].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com/${name.toLowerCase()}`}
                className="bg-black/50 backdrop-blur-sm border border-red-900/30 p-1.5 rounded-lg hover:bg-red-900/30 transition-colors"
              >
                <Image src={`/images/${platform}.svg`} alt={platform} width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 p-4 rounded-lg">
              <Target className="w-6 h-6 text-red-500 mb-2" />
              <h4 className="text-lg font-bold">{stats.kills}%</h4>
              <p className="text-xs text-gray-400">Accuracy</p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 p-4 rounded-lg">
              <Trophy className="w-6 h-6 text-yellow-500 mb-2" />
              <h4 className="text-lg font-bold">{stats.winRate}%</h4>
              <p className="text-xs text-gray-400">Win Rate</p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 p-4 rounded-lg">
              <Award className="w-6 h-6 text-red-500 mb-2" />
              <h4 className="text-lg font-bold">{stats.tournaments}</h4>
              <p className="text-xs text-gray-400">Tournaments</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full blur-[100px] opacity-30"></div>
    </motion.div>
  )
}
