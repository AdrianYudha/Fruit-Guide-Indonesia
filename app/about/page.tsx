"use client"

import { Header } from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import { motion } from "framer-motion"

export default function AboutPage() {
  const features = [
    {
      title: "Database Lengkap",
      description: "Koleksi 47+ buah-buahan Indonesia dengan informasi detail mengenai manfaat kesehatan dan nutrisi.",
      icon: "📚",
    },
    {
      title: "Informasi Terpercaya",
      description: "Semua data dikurasi dari sumber ilmiah untuk memastikan akurasi informasi kesehatan.",
      icon: "✓",
    },
    {
      title: "Pencarian Mudah",
      description: "Fitur pencarian cepat untuk menemukan buah favorit berdasarkan nama atau manfaat kesehatan.",
      icon: "🔍",
    },
    {
      title: "Cara Pengolahan",
      description: "Panduan lengkap cara mengolah buah menjadi jus, selai, chips, dan produk lainnya.",
      icon: "👨‍🍳",
    },
    {
      title: "Responsif & Modern",
      description: "Desain modern yang responsif dan optimal di semua perangkat dari smartphone hingga desktop.",
      icon: "📱",
    },
    {
      title: "Animasi Smooth",
      description: "Pengalaman pengguna yang menyenangkan dengan animasi dan transisi yang halus.",
      icon: "✨",
    },
  ]

  const team = [
    {
      name: "Tim Pengembang",
      role: "Tech Development",
      description: "Membangun platform dengan teknologi terkini untuk pengalaman pengguna terbaik.",
    },
    {
      name: "Tim Nutrisi",
      role: "Nutrition Expert",
      description: "Ahli gizi yang mengkurasi informasi manfaat kesehatan setiap buah-buahan.",
    },
    {
      name: "Tim Desain",
      role: "UI/UX Design",
      description: "Menciptakan antarmuka yang indah, intuitif, dan user-friendly untuk semua pengguna.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tentang Fruit Guide Indonesia
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Fruit Guide Indonesia adalah platform edukasi yang didedikasikan untuk memperkenalkan kekayaan
                buah-buahan tropis Indonesia kepada masyarakat luas. Kami percaya bahwa setiap buah memiliki cerita unik
                tentang manfaat kesehatan dan potensi pengolahan yang luar biasa.
              </p>

              <p>
                Misi kami adalah menyediakan informasi yang komprehensif, terpercaya, dan mudah diakses tentang
                buah-buahan Indonesia. Dari manfaat kesehatan hingga cara pengolahan modern, kami ingin memberdayakan
                setiap individu untuk membuat pilihan makanan yang lebih sehat dan berkelanjutan.
              </p>

              <p>
                Platform ini dirancang dengan mempertimbangkan kebutuhan pengguna modern yang menginginkan akses cepat
                dan informasi berkualitas tinggi. Dengan teknologi terkini dan desain yang intuitif, kami memastikan
                pengalaman terbaik bagi semua pengunjung.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-foreground"
          >
            Mengapa Memilih Kami?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-primary/5 border border-border rounded-lg hover:bg-primary/10 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-foreground"
          >
            Tim Kami
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl font-bold text-white">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-4">Siap Jelajahi Dunia Buah-Buahan?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Mulai temukan buah favorit Anda dan pelajari manfaat kesehatannya sekarang.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Kembali ke Beranda
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ScrollToTop />
      <footer className="bg-primary/5 border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Fruit Guide Indonesia. Dibuat dengan passion untuk kesehatan Anda.</p>
        </div>
      </footer>
    </main>
  )
}
