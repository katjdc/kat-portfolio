import Image from 'next/image'

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
