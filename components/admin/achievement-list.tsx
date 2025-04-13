"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Loader2, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Achievement } from "@/types/achievement"
import { motion, AnimatePresence } from "framer-motion"

export default function AdminAchievementList() {
  const { toast } = useToast()
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  useEffect(() => {
    fetchAchievements()
  }, [])

  const fetchAchievements = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/achievements")

      if (!response.ok) {
        throw new Error("Failed to fetch achievements")
      }

      const data = await response.json()
      setAchievements(data)
      setError(null)
    } catch (err) {
      console.error("Error fetching achievements:", err)
      setError("Failed to load achievements. Please try again.")

      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span>Error</span>
          </div>
        ),
        description: "Failed to load achievements. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this achievement?")) {
      return
    }

    try {
      setDeletingId(id)
      const response = await fetch(`/api/admin/achievements?id=${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to delete achievement")
      }

      toast({
        variant: "success",
        title: (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>Achievement Deleted</span>
          </div>
        ),
        description: "The achievement has been deleted successfully",
      })

      // Refresh the list
      fetchAchievements()
    } catch (error) {
      console.error("Error deleting achievement:", error)
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span>Error</span>
          </div>
        ),
        description: error instanceof Error ? error.message : "Failed to delete achievement",
      })
    } finally {
      setDeletingId(null)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-12 h-12 text-red-500 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={fetchAchievements} className="bg-red-600 hover:bg-red-700">
          Try Again
        </Button>
      </div>
    )
  }

  if (achievements.length === 0) {
    return (
      <div className="text-center py-20 bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg">
        <p className="text-gray-400 mb-4">No achievements found</p>
        <Button onClick={() => document.querySelector('[data-state="inactive"][value="add"]')?.click()}>
          Add Your First Achievement
        </Button>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg blur-xl"></div>
      <div className="relative bg-black/80 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-6 text-white">Manage Achievements</h2>

        <div className="space-y-4">
          <AnimatePresence>
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-black/50 border border-red-900/30 rounded-lg flex flex-col md:flex-row justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{achievement.description}</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-400">
                    <span>Prize: {achievement.prize}</span>
                    <span>Date: {achievement.date}</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-600 text-yellow-500 hover:bg-yellow-950 hover:text-yellow-400"
                      onClick={() => {
                        // For simplicity, we'll just show a toast
                        toast({
                          variant: "warning",
                          title: (
                            <div className="flex items-center gap-2">
                              <Pencil className="h-4 w-4" />
                              <span>Edit Feature</span>
                            </div>
                          ),
                          description: "Edit functionality would be implemented here in a full application",
                        })
                      }}
                    >
                      <Pencil className="h-4 w-4 mr-1" /> Edit
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-500 hover:bg-red-950 hover:text-red-400"
                      onClick={() => handleDelete(achievement.id)}
                      disabled={deletingId === achievement.id}
                    >
                      {deletingId === achievement.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
