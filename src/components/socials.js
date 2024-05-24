import Image from 'next/image'
import Link from 'next/link'

export function Socials() {
  return (
    <div className="flex flex-row gap-2 justify-center md:justify-start">
      <Link href={'https://www.linkedin.com/in/kjdelacruz'}>
        <Image
          src={`/assets/linkedin.svg`}
          alt="Kat Linkedin Account"
          width={64}
          height={64}
        />
      </Link>
      <Link href={'https://www.instagram.com/kat.uix'}>
        <Image
          src={`/assets/linkedin.svg`}
          alt="Kat Linkedin Account"
          width={64}
          height={64}
        />
      </Link>
    </div>
  )
}
