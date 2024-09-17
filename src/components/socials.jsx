import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export function Socials() {
  return (
    <>
      <Link href={'https://www.linkedin.com/in/kjdelacruz'} className="mr-6">
        <AiFillLinkedin
          size={32}
          className="text-kat-primary dark:text-white hover:text-kat-accent"
        />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link href={'https://www.instagram.com/kat.uix'} className="mr-6">
        <AiFillInstagram
          size={32}
          className="text-kat-primary dark:text-white hover:text-kat-accent"
        />
        <span className="sr-only">Instagram</span>
      </Link>
    </>
  )
}
