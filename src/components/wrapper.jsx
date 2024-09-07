import React from 'react'

export function Wrapper({ children }) {
  return (
    <div className="min-h-screen w-full max-w-screen-xl mx-auto">
      {children}
    </div>
  )
}
