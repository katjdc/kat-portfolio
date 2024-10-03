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
      path: '../components/assets/fonts/Nohemi-Thin.woff2',
      weight: '100',
    },
    {
      path: '../components/assets/fonts/Nohemi-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: '../components/assets/fonts/Nohemi-Light.woff2',
      weight: '300',
    },
    {
      path: '../components/assets/fonts/Nohemi-Regular.woff2',
      weight: '400',
    },
    {
      path: '../components/assets/fonts/Nohemi-Medium.woff2',
      weight: '500',
    },
    {
      path: '../components/assets/fonts/Nohemi-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../components/assets/fonts/Nohemi-Bold.woff2',
      weight: '700',
    },
    {
      path: '../components/assets/fonts/Nohemi-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../components/assets/fonts/Nohemi-Black.woff2',
      weight: '900',
    },
  ],
  variable: '--font-nohemi',
})

export { montserrat, nohemi }
