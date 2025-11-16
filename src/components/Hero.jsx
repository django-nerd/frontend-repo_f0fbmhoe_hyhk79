import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-[#0b0b0c]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 pointer-events-none"></div>

      <div className="relative z-10 h-full flex flex-col items-center justify-end pb-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-serif tracking-wide"
        >
          The Fragrance of Creativity
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-3 max-w-md text-sm text-neutral-300"
        >
          Discover artisanal scents curated for modern connoisseurs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex gap-3"
        >
          <a href="#catalog" className="rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 text-black font-semibold px-5 py-2 shadow-lg shadow-yellow-500/20">
            Shop Collection
          </a>
          <a href="#quiz" className="rounded-full border border-white/20 backdrop-blur bg-white/10 text-white px-5 py-2">
            Find Your Scent
          </a>
        </motion.div>
      </div>
    </section>
  )
}
