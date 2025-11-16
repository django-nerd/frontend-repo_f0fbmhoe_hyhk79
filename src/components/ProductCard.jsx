import React from 'react'
import { Heart, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductCard({ item, onFavorite }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 overflow-hidden"
    >
      <div className="relative rounded-2xl h-full bg-neutral-900/60 backdrop-blur-xl p-3">
        <button onClick={() => onFavorite?.(item)} className="absolute right-3 top-3 p-2 rounded-full bg-black/40 backdrop-blur hover:bg-black/60">
          <Heart className="h-4 w-4 text-white/80" />
        </button>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gradient-to-br from-neutral-800/60 to-neutral-900/60">
          {item.thumbnail ? (
            <img src={item.thumbnail} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-neutral-500">Image</div>
          )}
        </div>
        <div className="mt-3">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-medium text-sm">{item.name}</h3>
            <span className="text-amber-400 text-sm font-semibold">${item.price}</span>
          </div>
          <p className="text-xs text-neutral-400">{item.brand}</p>
          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(item.rating_average || 0) ? 'text-yellow-400' : 'text-neutral-600'}`} fill="currentColor" />
            ))}
            <span className="text-[10px] text-neutral-400 ml-1">({item.rating_count || 0})</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
