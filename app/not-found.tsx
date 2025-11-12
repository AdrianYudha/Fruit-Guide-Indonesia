"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Maaf, buah atau halaman yang Anda cari tidak tersedia. Kembali ke daftar buah kami dan jelajahi koleksi
          lengkap.
        </p>
        <Link href="/">
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-medium">
            Kembali ke Beranda
          </button>
        </Link>
      </motion.div>
    </main>
  )
}
