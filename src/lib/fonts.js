import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

// Define your variable fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

// Custom local font
const nohemi = localFont({
  src: [
    {
      path: './../../public/fonts/Nohemi-Thin.woff2',
      weight: '100',
    },
    {
      path: './../../public/fonts/Nohemi-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: './../../public/fonts/Nohemi-Light.woff2',
      weight: '300',
    },
    {
      path: './../../public/fonts/Nohemi-Regular.woff2',
      weight: '400',
    },
    {
      path: './../../public/fonts/Nohemi-Medium.woff2',
      weight: '500',
    },
    {
      path: './../../public/fonts/Nohemi-SemiBold.woff2',
      weight: '600',
    },
    {
      path: './../../public/fonts/Nohemi-Bold.woff2',
      weight: '700',
    },
    {
      path: './../../public/fonts/Nohemi-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: './../../public/fonts/Nohemi-Black.woff2',
      weight: '900',
    },
  ],
  variable: '--font-nohemi',
})

export { montserrat, nohemi }
