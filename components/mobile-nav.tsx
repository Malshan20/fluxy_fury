"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu, ChevronRight, Home, Users, Trophy, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest("#mobile-menu") && !target.closest("#menu-toggle")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle navigation item click
  const handleNavClick = () => {
    setIsOpen(false)
  }

  const menuItems = [
    { name: "HOME", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "ABOUT", href: "#about", icon: <Users className="w-5 h-5" /> },
    { name: "TEAM", href: "#team", icon: <Users className="w-5 h-5" /> },
    { name: "ACHIEVEMENTS", href: "#achievements", icon: <Trophy className="w-5 h-5" /> },
    { name: "CONTACT", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ]

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <>
      {/* Mobile menu button - UPDATED to be more visible */}
      <button
        id="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 shadow-[0_0_15px_rgba(220,38,38,0.5)] backdrop-blur-sm"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-black border-l border-red-900/30 z-50 shadow-xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="h-full flex flex-col overflow-y-auto">
              {/* Header */}
              <div className="p-6 border-b border-red-900/30">
                <div className="flex items-center gap-3">
                  <Image src="/images/logo.png" alt="Fluxy Fury Logo" width={40} height={40} className="w-10 h-10" />
                  <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                    FLUXY FURY
                  </span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-red-900/20 transition-colors group"
                        onClick={handleNavClick}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-red-900/30 rounded-lg text-red-500 group-hover:bg-red-900/50 transition-colors">
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-red-900/30">
                <motion.div variants={itemVariants}>
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-none"
                     onClick={() => window.open("mailto:info@fluxyfury.com", "_blank")}>
                    JOIN US
                  </Button>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-600 to-yellow-500 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
