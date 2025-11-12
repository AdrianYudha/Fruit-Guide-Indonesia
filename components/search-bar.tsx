"use client"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { fruitsDatabase } from "@/lib/fruits-data"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState(fruitsDatabase)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.trim()) {
      const filtered = fruitsDatabase.filter(
        (fruit) =>
          fruit.name.toLowerCase().includes(value.toLowerCase()) ||
          fruit.scientificName.toLowerCase().includes(value.toLowerCase()),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults(fruitsDatabase)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative w-full max-w-md" ref={containerRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <input
          type="text"
          placeholder="Cari buah..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults(fruitsDatabase)
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && query && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
          >
            {results.length > 0 ? (
              results.map((fruit) => (
                <Link key={fruit.id} href={`/fruit/${fruit.id}`} onClick={() => setIsOpen(false)}>
                  <div className="px-4 py-3 hover:bg-muted transition-smooth border-b border-border last:border-0 cursor-pointer">
                    <p className="font-semibold text-foreground">{fruit.name}</p>
                    <p className="text-sm text-muted-foreground">{fruit.scientificName}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="px-4 py-6 text-center text-muted-foreground">Buah tidak ditemukan</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
