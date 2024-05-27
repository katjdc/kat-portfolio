import { Logo } from '@/components/kat-logo'
import { LaunchingSoonGIF } from '@/components/launching-soon-gif'
import { Socials } from '@/components/socials'
import Link from 'next/link'

export default function Soon() {
  return (
    <main>
      <div className="w-full h-full md:h-screen px-5 pb-40 md:px-28 md:py-16 bg-kat-secondary">
        <div className="flex flex-row justify-center pt-2 lg:mt-0">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 lg:mb-0">
            <LaunchingSoonGIF />
          </div>
          <div className="text-kat-primary md:w-1/2 px-8 md:p-0">
            <h1 className="text-[2rem] md:text-[4rem] font-bold mb-5 lg:my-10">
              Under Construction
            </h1>
            <p className="text-lg mb-10">
              Thank you for visiting my portfolio! I&apos;m currently working on
              something amazing and will be launching soon. Feel free to reach
              out to me at{' '}
              <Link
                href={'mailto:katrinejdc@gmail.com'}
                className="font-semibold"
              >
                katrinejdc@gmail.com 
              </Link>
              {' '}for any inquiries or collaborations.
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </main>
  )
}
