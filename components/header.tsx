"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/partners", label: "Mitra" },
  ]

  return (
    <header className="bg-gradient-to-b from-primary/10 to-transparent border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer flex flex-col items-center min-w-[120px]"
            >
              Fruit Guide
              <span className="text-xs font-normal bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-[-5px] text-center w-full">Indonesia</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ color: "#000000" }}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-6 h-0.5 bg-primary transition-all"></div>
            <div className="w-6 h-0.5 bg-primary transition-all"></div>
            <div className="w-6 h-0.5 bg-primary transition-all"></div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col gap-4 py-4 border-t border-border"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                <motion.span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </motion.nav>
        )}


      </div>
    </header>
  )
}
