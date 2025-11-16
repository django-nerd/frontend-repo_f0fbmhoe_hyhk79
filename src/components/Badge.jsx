import React from 'react'

export default function Badge({ children, className = '' }) {
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}
