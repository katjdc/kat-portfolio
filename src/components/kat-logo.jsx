import Image from 'next/image'
import React from 'react'

export function Logo() {
  return (
    <Image
      src={`/logo/kat-text-logo.svg`}
      alt="Kat Logo"
      width={120}
      height={120}
    />
  )
}
