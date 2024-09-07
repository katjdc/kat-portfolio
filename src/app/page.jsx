import React from 'react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Wrapper } from '@/components/wrapper'

export default function Home() {
  return (
    <main className="relative overflow-hidden md:overflow-visible">
      <Navbar />
      <Wrapper>
        <Hero />
        <Services />
        <div className="absolute bg-[url('/assets/yarn.svg')] bg-no-repeat bg-contain top-[20rem] left-[-5%] xl:top-36 xl:left-0 w-[16rem] h-[16rem] xl:w-[30rem] xl:h-[30rem]"></div>
        <div className="absolute bg-[url('/assets/cat.svg')] bg-no-repeat bg-contain top-[15rem] right-[-30%] xl:top-40 xl:right-0 w-[20rem] h-[20rem] xl:w-[30rem] xl:h-[30rem] origin-bottom -rotate-45 lg:origin-center lg:-rotate-0"></div>
        <div className="absolute bg-[url('/assets/swirl.svg')] bg-no-repeat bg-contain top-[48rem] left-[20%] xl:top-[50rem] xl:left-[37%] w-[16rem] h-[16rem] md:w-[25rem] md:h-[25rem]"></div>
        <Footer />
      </Wrapper>
    </main>
  )
}
