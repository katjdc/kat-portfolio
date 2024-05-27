import Link from 'next/link'

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'

export function Socials() {
  return (
    <div className="flex flex-row gap-2 justify-center md:justify-start">
      <Link href={'https://www.linkedin.com/in/kjdelacruz'}>
        <div className="border-kat-primary border rounded-full p-3 hover:bg-kat-mono-2">
          <AiFillLinkedin size={32} />
        </div>
      </Link>
      <Link href={'https://www.instagram.com/kat.uix'}>
        <div className="border-kat-primary border rounded-full p-3 hover:bg-kat-mono-2">
          <AiFillInstagram size={32} />
        </div>
      </Link>
    </div>
  )
}
