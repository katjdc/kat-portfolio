import React from 'react'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Works } from '@/components/sections/works'
import { Wrapper } from '@/components/wrapper'

export default function Home() {
  return (
    <main className="relative overflow-hidden xl:overflow-visible">
      <Navbar />
      <Wrapper>
        <Hero />
        <Services />
        <Works />
        <div className="absolute bg-[url('/assets/yarn.svg')] bg-no-repeat bg-contain top-[20rem] left-[-5%] md:top-[16rem] md:left-[18%] xl:top-36 xl:left-0 w-[16rem] h-[16rem] md:w-[20rem] md:h-[20rem] xl:w-[30rem] xl:h-[30rem]"></div>
        <div className="absolute bg-[url('/assets/cat.svg')] bg-no-repeat bg-contain top-[15rem] right-[-30%] md:top-[10rem] md:right-[-4%] xl:top-40 xl:right-0 w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] xl:w-[30rem] xl:h-[30rem] origin-bottom -rotate-45 xl:origin-center xl:-rotate-0"></div>
        <div className="absolute bg-[url('/assets/swirl.svg')] bg-no-repeat bg-contain top-[54rem] left-[20%] md:top-[45rem] md:left-[30%] xl:top-[50rem] xl:left-[37%] w-[15rem] h-[15rem] md:w-[22rem] md:h-[22rem] lg:w-[25rem] lg:h-[52rem]"></div>
        <Footer />
      </Wrapper>
    </main>
  )
}
