"use client"

import type React from "react"

import { motion } from "framer-motion"

interface BenefitCardProps {
  title: string
  benefits: string[]
  icon: React.ReactNode
  delay: number
}

export function BenefitCard({ title, benefits, icon, delay }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, shadow: "lg" }}
      className="bg-card rounded-xl border border-border p-6 shadow-md hover:shadow-lg transition-smooth"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay * 0.1 + 0.1 }}
        className="flex items-center gap-3 mb-4"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          className="text-2xl text-primary"
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </motion.div>

      <ul className="space-y-2">
        {benefits.map((benefit, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay * 0.1 + idx * 0.05 }}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: delay * 0.1 + idx * 0.05 + 0.1 }}
              className="text-primary font-bold mt-1 flex-shrink-0"
            >
              •
            </motion.span>
            <span>{benefit}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
