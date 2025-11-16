import React, { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'
import ProductCard from './components/ProductCard'
import Filters from './components/Filters'
import Quiz from './components/Quiz'

const API = import.meta.env.VITE_BACKEND_URL

function useCatalog(filters, search) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const params = new URLSearchParams()
    Object.entries(filters || {}).forEach(([k, v]) => { if (v !== undefined && v !== '') params.set(k, v) })
    if (search) params.set('q', search)
    fetch(`${API}/api/fragrances?${params.toString()}`)
      .then(r => r.json())
      .then(d => { if (mounted) { setItems(d); setLoading(false) } })
      .catch(() => setLoading(false))
    return () => { mounted = false }
  }, [filters, search])

  return { items, loading }
}

export default function App() {
  const [filters, setFilters] = useState({})
  const [search, setSearch] = useState('')
  const { items, loading } = useCatalog(filters, search)
  const [recs, setRecs] = useState([])

  useEffect(() => {
    // ensure sample data exists
    fetch(`${API}/api/seed`, { method: 'POST' }).catch(()=>{})
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar onSearch={setSearch} />
      <Hero />

      <div className="px-4 -mt-10">
        <div className="rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl p-3">
          <div className="flex items-center gap-2 text-xs text-neutral-300">
            <div className="h-2 w-2 rounded-full bg-amber-500" />
            Curated for connoisseurs — glassmorphism UI, smooth micro‑interactions, and a boutique experience.
          </div>
        </div>
      </div>

      <div className="mt-6 px-4">
        <Filters value={filters} onChange={setFilters} />
      </div>

      <Section id="catalog" title="Featured & New">
        {loading ? (
          <div className="col-span-2 text-center text-neutral-400 text-sm">Loading…</div>
        ) : (
          <>
            {items.map((it) => (
              <ProductCard key={it.id} item={it} onFavorite={() => {}} />
            ))}
          </>
        )}
      </Section>

      <Quiz onRecommendations={setRecs} />

      {recs.length > 0 && (
        <Section title="Your Matches">
          {recs.map((it) => (
            <ProductCard key={it.id} item={it} />
          ))}
        </Section>
      )}

      <footer className="px-4 py-10 text-center text-xs text-neutral-400">
        © Maison Luxe — Crafted for a luxurious digital boutique experience.
      </footer>
    </div>
  )
}
