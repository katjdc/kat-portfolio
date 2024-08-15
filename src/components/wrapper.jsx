import React from 'react'

export function Wrapper({ children }) {
  return (
    <div className="min-h-screen mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      {children}
    </div>
  )
}
