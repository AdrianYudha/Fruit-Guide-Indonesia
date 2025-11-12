"use client"

import { fruitsDatabase } from "@/lib/fruits-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Leaf, Beaker, Droplet } from "lucide-react"
import { motion } from "framer-motion"
import ScrollToTop from "@/components/scroll-to-top"
import { BenefitCard } from "@/components/benefit-card"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function FruitDetailPage({ params }: PageProps) {
  const { id } = await params
  const fruit = fruitsDatabase.find((f) => f.id === id)

  if (!fruit) {
    notFound()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50 sticky top-0 z-40 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth w-fit"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Kembali ke Daftar</span>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-transparent border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Image */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="relative w-full max-w-sm h-96 rounded-2xl overflow-hidden shadow-xl"
              >
                <img src={fruit.image || "/placeholder.svg"} alt={fruit.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl font-bold text-foreground mb-2"
                >
                  {fruit.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground italic"
                >
                  {fruit.scientificName}
                </motion.p>
              </div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-secondary/10 rounded-lg p-4 border border-secondary/20"
              >
                <h3 className="font-semibold text-foreground mb-2">Musim Panen</h3>
                <p className="text-secondary-foreground">{fruit.season}</p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Vitamin", value: fruit.nutrition.vitamin, color: "primary" },
                  { label: "Mineral", value: fruit.nutrition.mineral, color: "accent" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-${item.color}/10 rounded-lg p-3 border border-${item.color}/20`}
                  >
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Benefits Section */}
      <section className="py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3"
          >
            <Leaf className="h-8 w-8 text-primary" />
            Manfaat Utama
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fruit.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 4 }}
                className="bg-card rounded-lg border border-border p-4 shadow-md hover:shadow-lg transition-smooth"
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.1 }}
                    className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"
                  />
                  <p className="text-foreground">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Methods Section */}
      <section className="py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3"
          >
            <Beaker className="h-8 w-8 text-accent" />
            Cara Pengolahan
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fruit.processing.map((item, idx) => (
              <BenefitCard key={idx} title={item.name} benefits={item.benefits} icon="🥤" delay={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Parts Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3"
          >
            <Droplet className="h-8 w-8 text-secondary" />
            Bagian-Bagian Buah
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fruit.parts.map((part, idx) => (
              <BenefitCard key={idx} title={part.name} benefits={part.benefits} icon="🌿" delay={idx} />
            ))}
          </div>
        </div>
      </section>
      <ScrollToTop />
    </main>
  )
}
