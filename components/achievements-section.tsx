"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import AchievementCard from "./achievement-card"
import type { Achievement } from "@/types/achievement"
import { Button } from "@/components/ui/button"

export default function AchievementsSection() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("/api/achievements")

        if (!response.ok) {
          throw new Error("Failed to fetch achievements")
        }

        const data = await response.json()
        setAchievements(data)
      } catch (err) {
        console.error("Error fetching achievements:", err)
        setError("Failed to load achievements. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchAchievements()
  }, [])

  const showMoreAchievements = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/achievements-bg.jpg"
          alt="Achievements Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            OUR ACHIEVEMENTS
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            A legacy of excellence. Our trophy cabinet showcases our dominance in the competitive Fortnite scene.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500">{error}</p>
            <Button
              onClick={() => window.location.reload()}
              className="mt-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900"
            >
              Try Again
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.slice(0, visibleCount).map((achievement, index) => (
                <AchievementCard key={achievement.id} achievement={achievement} delay={index * 0.2} />
              ))}
            </div>

            {visibleCount < achievements.length && (
              <div className="flex justify-center mt-12">
                <Button
                  onClick={showMoreAchievements}
                  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-none px-8 py-6"
                >
                  LOAD MORE ACHIEVEMENTS
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
