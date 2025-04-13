"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import AdminAchievementForm from "@/components/admin/achievement-form"
import AdminAchievementList from "@/components/admin/achievement-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export default function AdminPage() {
  const { toast } = useToast()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  // Simple authentication for demo purposes
  // In a real app, you would use Supabase Auth or another auth provider
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password check - in a real app, use proper authentication
    if (password === "admin123") {
      setIsAuthenticated(true)
      setError("")
      // Store in session storage so it persists during the session
      sessionStorage.setItem("adminAuthenticated", "true")

      // Show success toast
      toast({
        variant: "success",
        title: (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            <span>Login Successful</span>
          </div>
        ),
        description: "Welcome to the admin dashboard",
      })
    } else {
      setError("Invalid password")

      // Show error toast
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span>Authentication Failed</span>
          </div>
        ),
        description: "The password you entered is incorrect",
      })
    }
  }

  useEffect(() => {
    // Check if already authenticated in this session
    if (sessionStorage.getItem("adminAuthenticated") === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Toaster />
        <div className="w-full max-w-md p-8 space-y-8 bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              Admin Login
            </h1>
            <p className="mt-2 text-gray-400">Enter your password to access the admin area</p>
          </div>

          {error && <div className="p-3 bg-red-900/30 text-red-400 rounded-md text-sm">{error}</div>}

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-red-900/50 bg-black/50 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster />
      <header className="bg-black/50 backdrop-blur-md border-b border-red-900/30 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Website</span>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            Achievement Management
          </h1>
          <Button
            variant="outline"
            onClick={() => {
              sessionStorage.removeItem("adminAuthenticated")
              setIsAuthenticated(false)
              toast({
                title: "Logged out",
                description: "You have been logged out successfully",
              })
            }}
            className="border-red-600 text-red-500 hover:bg-red-950 hover:text-red-400"
          >
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="add" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/50 border border-red-900/30">
            <TabsTrigger value="add" className="data-[state=active]:bg-red-900/30">
              Add Achievement
            </TabsTrigger>
            <TabsTrigger value="manage" className="data-[state=active]:bg-red-900/30">
              Manage Achievements
            </TabsTrigger>
          </TabsList>
          <TabsContent value="add">
            <div className="max-w-2xl mx-auto">
              <AdminAchievementForm />
            </div>
          </TabsContent>
          <TabsContent value="manage">
            <AdminAchievementList />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
