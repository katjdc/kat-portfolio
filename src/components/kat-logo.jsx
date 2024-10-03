import Image from 'next/image'
import React from 'react'

import katLogo from '@/components/assets/logo/kat-text-logo.svg'

export function Logo() {
  return <Image src={katLogo} alt="Kat Logo" width={120} height={120} />
}
