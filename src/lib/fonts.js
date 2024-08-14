import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

// define your variable fonts
const montserrat = Montserrat({ subsets: ['latin'] })

// CUSTOM LOCAL FONT
const moreSugar = localFont({ src: './../../public/assets/MoreSugar.woff2' })

export { montserrat, moreSugar }
