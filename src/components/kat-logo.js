import Image from 'next/image'

export function Logo() {
  return (
    <Image
      src={`/logo/kat-text-logo.svg`}
      alt="Kat Logo"
      width={150}
      height={150}
    />
  )
}
