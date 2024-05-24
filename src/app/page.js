import { Logo } from '@/components/kat-logo'
import { LaunchingSoonGIF } from '@/components/launching-soon-gif'
import { Socials } from '@/components/socials'

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen p-5 md:p-24 bg-kat-secondary">
        <div className="flex flex-row justify-center mt-10 lg:mt-0">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 lg:mb-0">
            <LaunchingSoonGIF />
          </div>
          <div className="text-kat-primary md:w-1/2">
            <h1 className="text-[2rem] md:text-[5rem] font-bold mb-5 lg:my-10">
              Launching Soon
            </h1>
            <p className="text-lg mb-5 lg:mb-10">
              Thank you for visiting my portfolio! I&apos;m currently working on
              something amazing and will be launching soon. Feel free to reach
              out to me at contact@example.com for any inquiries or
              collaborations.
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </main>
  )
}
