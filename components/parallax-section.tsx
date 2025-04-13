"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function ParallaxSection({ children, id, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const [mounted, setMounted] = useState(false)

  const { scrollY } = useScroll()

  // Calculate the element's position and the window height on mount and resize
  useEffect(() => {
    const element = ref.current
    setMounted(true)

    const onResize = () => {
      if (element) {
        setElementTop(element.offsetTop)
        setClientHeight(window.innerHeight)
      }
    }

    onResize()
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // Parallax effect calculations
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    mounted ? ["0%", "30%"] : ["0%", "0%"],
  )

  return (
    <section id={id} ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </motion.div>
      <div className="relative z-10">{children}</div>
    </section>
  )
}
