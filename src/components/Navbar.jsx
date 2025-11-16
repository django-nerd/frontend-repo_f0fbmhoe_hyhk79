import React from 'react'
import { ShoppingBag, Search } from 'lucide-react'

export default function Navbar({ onSearch }) {
  return (
    <div className="sticky top-0 z-30 px-4 pt-4">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-xl p-3 flex items-center gap-3">
        <div className="text-lg font-serif text-white tracking-wide">Maison Luxe</div>
        <div className="flex-1 relative">
          <input onChange={(e)=> onSearch?.(e.target.value)} placeholder="Search fragrances" className="w-full rounded-full bg-white/10 text-white placeholder:text-neutral-400 pl-9 pr-4 py-2 text-sm outline-none" />
          <Search className="h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <button className="ml-auto rounded-full bg-white/10 p-2 border border-white/10">
          <ShoppingBag className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  )
}
