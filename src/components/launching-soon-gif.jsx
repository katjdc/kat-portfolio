import Image from 'next/image'
import React from 'react'

import launchingSoonGIF from '@/components/assets/gif/launching-soon.gif'

export function LaunchingSoonGIF() {
  return (
    <Image
      src={launchingSoonGIF}
      alt="Launching Soon"
      width={500}
      height={500}
      unoptimized
    />
  )
}
