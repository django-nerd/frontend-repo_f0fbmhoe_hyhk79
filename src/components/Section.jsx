import React from 'react'

export default function Section({ title, children, id }) {
  return (
    <section id={id} className="px-4 py-6">
      <div className="flex items-end justify-between">
        <h2 className="text-white font-serif text-xl">{title}</h2>
        <a href="#" className="text-xs text-amber-400">View all</a>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {children}
      </div>
    </section>
  )
}
