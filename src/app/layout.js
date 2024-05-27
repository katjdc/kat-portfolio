import './globals.css'
import { montserrat } from '@/lib/fonts'

export const metadata = {
  title: 'Katrine Joy Dela Cruz - UI/UX Designer',
  description:
    "Hello! I'm a UI/UX Designer that takes user interface to the next level. I focus on the design of software, web, and mobile design to produce beautifully crafted digital products.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
