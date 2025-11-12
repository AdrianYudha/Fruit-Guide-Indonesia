"use client"

import { Header } from "@/components/header"
import ScrollToTop from "@/components/scroll-to-top"
import { motion } from "framer-motion"

export default function PartnersPage() {
  const partners = [
    {
      category: "Instansi Pemerintah",
      items: [
        {
          name: "Kementerian Pertanian",
          description: "Mendukung inisiatif promosi buah-buahan Indonesia ke tingkat internasional.",
        },
        {
          name: "Badan Standardisasi Nasional",
          description: "Memastikan standar kualitas dan keamanan produk buah-buahan Indonesia.",
        },
      ],
    },
    {
      category: "Organisasi Kesehatan",
      items: [
        {
          name: "Kementerian Kesehatan RI",
          description: "Memberikan panduan nutrisi dan data ilmiah tentang manfaat kesehatan buah.",
        },
        {
          name: "Asosiasi Ahli Gizi Indonesia",
          description: "Berkontribusi dalam validasi informasi nutrisi dan manfaat kesehatan.",
        },
      ],
    },
    {
      category: "Petani & Produsen",
      items: [
        {
          name: "Asosiasi Petani Buah Indonesia",
          description: "Mendukung pengembangan pertanian buah yang berkelanjutan dan menguntungkan.",
        },
        {
          name: "Pengrajin Produk Olahan Buah",
          description: "Berbagi pengetahuan tentang teknik pengolahan dan inovasi produk buah.",
        },
      ],
    },
    {
      category: "Pendidikan & Riset",
      items: [
        {
          name: "Universitas Pertanian Indonesia",
          description: "Menyediakan penelitian ilmiah tentang varitas dan manfaat buah tropis.",
        },
        {
          name: "Lembaga Riset Kesehatan",
          description: "Mendukung studi ilmiah tentang dampak kesehatan konsumsi buah-buahan.",
        },
      ],
    },
  ]

  const benefits = [
    {
      title: "Promosi Produk",
      description: "Platform kami membantu mitra mempromosikan produk buah dan olahannya kepada jutaan pengguna.",
      icon: "📢",
    },
    {
      title: "Edukasi Konsumen",
      description: "Kami membangun kesadaran konsumen tentang manfaat dan kualitas produk buah Indonesia.",
      icon: "📚",
    },
    {
      title: "Sinergi & Kolaborasi",
      description: "Menciptakan ekosistem yang saling menguntungkan antara produsen, konsumen, dan edukator.",
      icon: "🤝",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Partners Intro */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mitra Kami
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl">
              Fruit Guide Indonesia berkembang berkat dukungan dan kolaborasi dari berbagai mitra terpercaya.
              Bersama-sama, kami berkomitmen untuk mempromosikan kesehatan, kualitas, dan keberlanjutan dalam industri
              buah-buahan Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center text-foreground"
          >
            Keuntungan Berkolaborasi dengan Kami
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-primary/5 border border-border rounded-lg hover:bg-primary/10 transition-colors text-center"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {partners.map((category, categoryIdx) => (
            <motion.div
              key={categoryIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIdx * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="inline-block w-1 h-8 bg-gradient-to-b from-primary to-accent rounded mr-3"></span>
                {category.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((partner, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <h4 className="text-lg font-bold text-foreground mb-2">{partner.name}</h4>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground mb-4">Tertarik Menjadi Mitra Kami?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hubungi kami untuk informasi lebih lanjut tentang peluang kolaborasi dan kemitraan.
            </p>
            <motion.a
              href="mailto:partnership@fruitguideindonesia.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Hubungi Kami
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
