"use client"

import { useState, useMemo } from "react"
import { fruitsDatabase } from "@/lib/fruits-data"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { FruitCard } from "@/components/fruit-card"
import ScrollToTop from "@/components/scroll-to-top"
import { motion } from "framer-motion"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFruits = useMemo(() => {
    if (!searchQuery.trim()) {
      return fruitsDatabase
    }
    return fruitsDatabase.filter(
      (fruit) =>
        fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fruit.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fruit.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }, [searchQuery])

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Search Section */}
      <section className="py-8 bg-gradient-to-b from-primary/5 to-transparent border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <p className="text-center text-muted-foreground mb-4">Temukan buah favorit Anda dengan cepat</p>
            <div className="flex justify-center">
              <SearchBar />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fruits Grid Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFruits.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-4"
              >
                <p className="text-muted-foreground">
                  Menampilkan <span className="font-bold text-primary">{filteredFruits.length}</span> buah dari{" "}
                  <span className="font-bold text-primary">{fruitsDatabase.length}</span>
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFruits.map((fruit, idx) => (
                  <FruitCard key={fruit.id} fruit={fruit} index={idx} />
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-6xl mb-4"
              >
                🔍
              </motion.div>
              <p className="text-xl text-muted-foreground mb-4">Buah "{searchQuery}" tidak ditemukan</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchQuery("")}
                className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-medium"
              >
                Lihat Semua Buah
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      <ScrollToTop />
      <footer className="bg-primary/5 border-t border-border py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Fruit Guide",
                content:
                  "Panduan lengkap buah-buahan Indonesia dengan informasi manfaat kesehatan dan cara pengolahan.",
              },
              {
                title: "Kategori",
                items: ["Buah Tropis", "Buah Sitrus", "Buah Eksotis"],
              },
              {
                title: "Fitur",
                items: ["Pencarian Cepat", "Manfaat Kesehatan", "Cara Pengolahan"],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="font-bold text-foreground mb-3">{section.title}</h3>
                {section.content && <p className="text-sm text-muted-foreground">{section.content}</p>}
                {section.items && (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
          >
            <p>© 2025 Fruit Guide Indonesia. Dibuat dengan passion untuk kesehatan Anda.</p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
