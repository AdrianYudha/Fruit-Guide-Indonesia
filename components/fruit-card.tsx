"use client"

import Link from "next/link"
import type { Fruit } from "@/lib/fruits-data"
import { motion } from "framer-motion"

interface FruitCardProps {
  fruit: Fruit
  index: number
}

export function FruitCard({ fruit, index }: FruitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Link href={`/fruit/${fruit.id}`}>
        <div className="group h-full overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-smooth cursor-pointer border border-border/50 hover:border-primary/50">
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            <img
              src={fruit.image || "/placeholder.svg"}
              alt={fruit.name}
              className="h-full w-full object-cover transition-smooth group-hover:scale-110 duration-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"
            />
          </div>

          <div className="p-4">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.1 }}
              className="text-lg font-bold text-foreground group-hover:text-primary transition-smooth"
            >
              {fruit.name}
            </motion.h3>

            <p className="text-sm text-muted-foreground mb-3">{fruit.scientificName}</p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.15 }}
              className="inline-block"
            >
              <p className="text-xs text-secondary-foreground bg-secondary/20 rounded-full px-3 py-1">{fruit.season}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              <span className="font-semibold text-primary">{fruit.benefits.length}</span> Manfaat kesehatan
            </motion.div>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="absolute top-2 right-2 w-8 h-8 bg-primary/80 rounded-full blur-sm"
          />
        </div>
      </Link>
    </motion.div>
  )
}
