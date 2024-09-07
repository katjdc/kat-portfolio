import React from 'react'

import { montserrat, nohemi } from '@/lib/fonts'

import '@/styles/globals.css'

export const metadata = {
  title: 'Katrine Joy Dela Cruz - UI/UX Designer',
  description:
    "Hello! I'm a UI/UX Designer that takes user interface to the next level. I focus on the design of software, web, and mobile design to produce beautifully crafted digital products.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className} ${nohemi.variable}`}>
      <body className="bg-kat-backdrop">{children}</body>
    </html>
  )
}
