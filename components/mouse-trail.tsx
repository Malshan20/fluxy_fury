"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function MouseTrail() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailsRef = useRef<HTMLDivElement[]>([])
  const numTrails = 20

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e

      // Update main cursor
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`
        cursorRef.current.style.top = `${clientY}px`
      }

      // Update trails with delay
      trailsRef.current.forEach((trail, index) => {
        setTimeout(() => {
          if (trail) {
            trail.style.left = `${clientX}px`
            trail.style.top = `${clientY}px`
          }
        }, index * 40)
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Create array for trails
  const trails = Array.from({ length: numTrails }, (_, i) => (
    <motion.div
      key={i}
      ref={(el) => {
        if (el) trailsRef.current[i] = el
      }}
      className="fixed pointer-events-none w-5 h-5 rounded-full bg-red-500 opacity-0 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.2, 0],
        scale: [0, 1, 0],
        background: ["rgba(220, 38, 38, 0.8)", "rgba(234, 179, 8, 0.5)", "rgba(220, 38, 38, 0.2)"],
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.1 * i,
      }}
      style={{
        left: 0,
        top: 0,
        filter: "blur(2px)",
      }}
    />
  ))

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none w-8 h-8 rounded-full border-2 border-red-500 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
      {trails}
    </>
  )
}
