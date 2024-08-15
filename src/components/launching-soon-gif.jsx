import Image from 'next/image'
import React from 'react'

export function LaunchingSoonGIF() {
  return (
    <Image
      src={`/assets/launching-soon.gif`}
      alt="Launching Soon"
      width={500}
      height={500}
      unoptimized
    />
  )
}
