"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Crown, Trophy, Target, Zap, Send } from "lucide-react"
import MouseTrail from "@/components/mouse-trail"
import ParallaxSection from "@/components/parallax-section"
import TeamCard from "@/components/team-card"
import AchievementCard from "@/components/achievement-card"
import MobileNav from "@/components/mobile-nav" 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AchievementsSection from "@/components/achievements-section"

export default function Home() {
  // Use state for scroll effects
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Calculate values based on scroll position
  const heroOpacity = Math.max(0, 1 - scrollY / 300)
  const heroScale = Math.max(0.9, 1 - scrollY / 3000)
  const heroY = Math.min(100, scrollY / 3)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    setMounted(true)
    window.addEventListener("scroll", handleScroll)

    // Preload images for better performance
    const imageUrls = [
      "/images/hero-bg.jpg",
      "/images/team-bg.jpg",
      "/images/achievements-bg.jpg",
      "/images/contact-bg.jpg",
      "/images/phoenix.png",
      "/images/shadow.jpg",
      "/images/viper.webp",
      "/images/elite.png",
      "/images/logo.png",
    ]

    if (typeof window !== "undefined") {
      imageUrls.forEach((url) => {
        const img = new window.Image()
        img.src = url
      })
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <main className="relative overflow-hidden bg-black text-white">
      <MouseTrail />

      {/* Mobile Navigation */}
      <MobileNav />

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-red-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Fluxy Fury Logo"
              width={50}
              height={50}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              FLUXY FURY
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["HOME", "ABOUT", "TEAM", "ACHIEVEMENTS", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wider hover:text-red-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <Button
            variant="outline"
            className="hidden md:flex border-red-600 text-red-500 hover:bg-red-950 hover:text-red-400"
            onClick={() => window.open("mailto:info@fluxyfury.com", "_blank")}
          >
            JOIN US
          </Button>
        </div>
      </nav>

      {/* Rest of the page content remains the same */}
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Hero Background" fill priority className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 z-10 flex flex-col items-center text-center"
          style={{
            opacity: heroOpacity,
            y: heroY,
            scale: heroScale,
            transition: "all 0.1s ease-out",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <Image src="/images/logo.png" alt="Fluxy Fury Logo" width={120} height={120} className="mx-auto mb-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            <span className="block">STORY BEGINS WITH</span>
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              FLUXY FURY
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-gray-300 mb-8"
          >
            Dominating the competitive Fortnite scene with unmatched skill, strategy, and determination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="#team">
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-none rounded-full px-8 py-6">
                OUR TEAM
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-500" />
        </div>
      </section>

      {/* About Section */}
      <ParallaxSection id="about" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg blur-xl"></div>
              <div className="relative bg-black/80 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
                <Image
                  src="/images/elite.png"
                  alt="Elite Fortnite Player"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                  ELITE FORTNITE ESPORTS TEAM
                </h2>

                <p className="text-gray-300 mb-6">
                  Founded in 2020, FLUXY FURY quickly rose to prominence in the competitive Fortnite scene. Our team
                  consists of elite players who have dominated tournaments worldwide with their exceptional skills,
                  strategic gameplay, and unwavering determination.
                </p>

                <p className="text-gray-300 mb-8">
                  We pride ourselves on innovation, constantly evolving our strategies and techniques to stay ahead of
                  the competition. Our commitment to excellence has earned us multiple championship titles and a
                  dedicated global fanbase.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-red-900/30 rounded-lg">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Championship Titles</h3>
                      <p className="text-sm text-gray-400">Multiple tournament victories</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-red-900/30 rounded-lg">
                      <Target className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Precision Gaming</h3>
                      <p className="text-sm text-gray-400">Unmatched accuracy and skill</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-red-900/30 rounded-lg">
                      <Crown className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Elite Status</h3>
                      <p className="text-sm text-gray-400">Recognized industry leaders</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-red-900/30 rounded-lg">
                      <Zap className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Rapid Adaptation</h3>
                      <p className="text-sm text-gray-400">Quick to master new metas</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Team Section */}
      <section id="team" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/team-bg.jpg" alt="Team Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
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
              OUR TEAM
            </h2>
            <p className="max-w-2xl mx-auto text-white">
              Meet the elite players who make up FLUXY FURY. Each member brings unique skills and expertise to dominate
              the Fortnite competitive scene.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamCard
              name="Phoenix"
              role="Team Captain"
              image="/images/phoenix.png"
              description="Strategic mastermind and shot-caller. Known for clutch plays and leadership."
              stats={{
                kills: 95,
                winRate: 78,
                tournaments: 42,
              }}
              delay={0.1}
            />

            <TeamCard
              name="Shadow"
              role="Fragger"
              image="/images/shadow.png"
              description="Aggressive player with incredible aim. Holds multiple elimination records."
              stats={{
                kills: 98,
                winRate: 72,
                tournaments: 38,
              }}
              delay={0.3}
            />

            <TeamCard
              name="Viper"
              role="Builder"
              image="/images/viper.png"
              description="Building and editing prodigy. Creates defensive structures in milliseconds."
              stats={{
                kills: 89,
                winRate: 75,
                tournaments: 36,
              }}
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Contact Section */}
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/contact-bg.jpg" alt="Contact Background" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
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
              CONTACT US
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Have questions or want to collaborate? Reach out to the FLUXY FURY team.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg blur-xl"></div>
              <div className="relative bg-black/80 border border-red-900/50 rounded-lg p-6 backdrop-blur-sm">
                <Image
                  src="/images/contact-image.png"
                  alt="Elite Fortnite Player"
                  width={500}
                  height={600}
                  className="w-full h-3/4 rounded-lg"
                />
              </div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>

                <p className="text-gray-300 mb-8">
                  Join our community and stay updated with the latest news, tournament schedules, and exclusive content
                  from FLUXY FURY.
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-red-900/20 rounded-lg border border-red-900/30">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 rounded-full">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">YouTube</h4>
                      <p className="text-sm text-gray-400">@FluxFuryOfficial</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-red-900/20 rounded-lg border border-red-900/30">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 rounded-full">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Twitch</h4>
                      <p className="text-sm text-gray-400">@FluxFury</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-red-900/20 rounded-lg border border-red-900/30">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 rounded-full">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.317 4.3698a19.791 19.791 0 00-4.885-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3857-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.0371A19.736 19.736 0 003.677 4.3698C.533 9.0457-.326 13.5799.0996 18.0578a20.163 20.163 0 006.0622 3.0295.077.077 0 00.0785-.0195c.427-.4853.7937-1.0022 1.098-1.5382a.076.076 0 00-.0411-.1055 13.107 13.107 0 01-1.8683-.8928.076.076 0 01-.0078-.1277c.1251-.0942.251-.1923.3693-.2913a.0763.0763 0 01.0775-.0103c3.9278 1.7933 8.18 1.7933 12.0614 0a.076.076 0 01.0785.0103c.1183.099.2442.1971.3693.2913a.076.076 0 01-.0078.1277 13.28 13.28 0 01-1.8683.8928.076.076 0 00-.0411.1055c.3043.536.671 1.0529 1.098 1.5382a.076.076 0 00.0785.0195 20.163 20.163 0 006.0622-3.0295c.456-4.5445-.8762-9.0273-3.579-13.688zM8.02 15.3311c-1.1825 0-2.1563-1.0857-2.1563-2.419 0-1.3332.9558-2.4189 2.1563-2.4189 1.21 0 2.1757 1.0952 2.1563 2.4189 0 1.3333-.9558 2.419-2.1563 2.419zm7.9747 0c-1.1825 0-2.1563-1.0857-2.1563-2.419 0-1.3332.9558-2.4189 2.1563-2.4189 1.21 0 2.1757 1.0952 2.1563 2.4189 0 1.3333-.9463 2.419-2.1563 2.419z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Discord</h4>
                      <p className="text-sm text-gray-400">discord.gg/fluxfury</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Fluxy Fury Logo"
                  width={40}
                  height={40}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                  FLUXY FURY
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                ELITE FORTNITE ESPORTS
                <br />
                DOMINATING THE COMPETITIVE SCENE WITH STRATEGY AND UNMATCHED SKILL
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Team", "Achievements", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li key="Terms of Service">
                  <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li key="Privacy Policy">
                  <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li key="Cookie Policy">
                  <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/images/footer.png"
                alt="ESRB Rating"
                width={200}
                height={800}
                className="max-w-[150px] mb-4 object-contain"
              />
              <p className="text-sm text-gray-400 text-center max-w-[180px]">
                Game Experience May Change During Online Play
              </p>
            </div>
          </div>

          <div className="border-t border-red-900/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© 2025 FLUXY FURY. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="https://www.youtube.com/@FluxyFury-c6u" target="_blank" className="text-gray-400 hover:text-red-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link href="https://twitch.com/FluxyFury" target="_blank" className="text-gray-400 hover:text-red-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
                </svg>
              </Link>
              <Link href="https://discord.com/invite/FluxyFury" target="_blank" className="text-gray-400 hover:text-red-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.3698a19.791 19.791 0 00-4.885-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3857-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.0371A19.736 19.736 0 003.677 4.3698C.533 9.0457-.326 13.5799.0996 18.0578a20.163 20.163 0 006.0622 3.0295.077.077 0 00.0785-.0195c.427-.4853.7937-1.0022 1.098-1.5382a.076.076 0 00-.0411-.1055 13.107 13.107 0 01-1.8683-.8928.076.076 0 01-.0078-.1277c.1251-.0942.251-.1923.3693-.2913a.0763.0763 0 01.0775-.0103c3.9278 1.7933 8.18 1.7933 12.0614 0a.076.076 0 01.0785.0103c.1183.099.2442.1971.3693.2913a.076.076 0 01-.0078.1277 13.28 13.28 0 01-1.8683.8928.076.076 0 00-.0411.1055c.3043.536.671 1.0529 1.098 1.5382a.076.076 0 00.0785.0195 20.163 20.163 0 006.0622-3.0295c.456-4.5445-.8762-9.0273-3.579-13.688zM8.02 15.3311c-1.1825 0-2.1563-1.0857-2.1563-2.419 0-1.3332.9558-2.4189 2.1563-2.4189 1.21 0 2.1757 1.0952 2.1563 2.4189 0 1.3333-.9558 2.419-2.1563 2.419zm7.9747 0c-1.1825 0-2.1563-1.0857-2.1563-2.419 0-1.3332.9558-2.4189 2.1563-2.4189 1.21 0 2.1757 1.0952 2.1563 2.4189 0 1.3333-.9463 2.419-2.1563 2.419z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}