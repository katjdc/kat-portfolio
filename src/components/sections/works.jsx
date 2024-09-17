import Link from 'next/link'
import React from 'react'
import { HiMiniArrowUpRight } from 'react-icons/hi2'

export function Works() {
  return (
    <section id="works">
      <div className="flex flex-col items-center justify-center text-center w-[90%] sm:w-[75%] mx-auto pt-28">
        <h3 className="text-xl text-kat-primary font-bold">Works</h3>
        <p className="mt-4 sm:mt-6 mx-0 md:mx-6 text-normal font-normal text-kat-primary">
          My projects reflect a deep understanding of design principles and a
          commitment to enhancing user engagement and satisfaction.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative mt-12 mx-auto space-y-16 w-[80%]">
        {/* Project - Cally AI (Personal Project*/}
        <div className="bg-[#EEF4FF] relative flex flex-col-reverse h-[35rem] md:h-[25rem] p-8 rounded-xl shadow-lg overflow-hidden">
          {/* Background Div */}
          <div className="absolute inset-0 z-0">
            {/* Upper Left Circle */}
            <div className="bg-[#6193BD] absolute top-[-20%] left-[-15%]  lg:top-[-35%] lg:left-[-20%] w-[30%] h-[30%] lg:w-[50%] lg:h-[50%] rounded-full"></div>
            {/* Lower Right Circle */}
            <div className="bg-[#6193BD] absolute bottom-[-125%] right-[-15%] lg:bottom-[-75%] lg:right-[-20%] w-[40%] h-[140%] lg:h-[175%] rounded-full"></div>
          </div>
          <div className="relative w-auto lg:w-[25rem] mt-8 lg:my-8 z-10">
            <h4 className="text-[#285376] text-xl md:text-2xl font-bold">
              Cally AI{' '}
              <span className="text-sm font-normal">(Personal Project)</span>
            </h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-[#285376] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                UI/UX
              </span>
              <span className="text-[#285376] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                Landing Page
              </span>
              <span className="text-[#285376] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                AI Product
              </span>
            </div>
            <p className="my-8 text-[#285376] text-sm mx-0 md:mr-20">
              A modern landing page design to highlight the AI phone agent and
              its key features, boosting user engagement and conversion.
            </p>
            <Link
              className="bg-[#6193BD] hover:bg-[#285376] px-4 py-3 text-sm text-white rounded-xl"
              href="https://bit.ly/cally-ai-design"
            >
              View Prototype
              <HiMiniArrowUpRight className="inline-block ml-2" />
            </Link>
          </div>
          <div className="relative z-10">
            <div className="absolute top-[-10.5rem] right-[-5rem] lg:top-[2rem] lg:right-[1rem] xl:top-[-1rem] xl:right-[1rem] w-[380px] h-[180px] lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[400px] bg-[url('/assets/laptop-cally.png')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[-8.5rem] right-[-2rem] lg:top-[4rem] lg:right-[1rem] xl:top-[1rem] xl:right-[1rem] w-[100px] h-[200px] lg:w-[150px] lg:h-[290px] xl:w-[180px] xl:h-[320px] bg-[url('/assets/mobile-cally.png')] bg-no-repeat bg-contain"></div>
          </div>
        </div>

        {/* Project - Narrative Tech (Work Project) */}
        <div className="bg-[#F4FCFC] relative flex flex-col-reverse h-[35rem] md:h-[25rem] p-8 rounded-xl shadow-lg overflow-hidden">
          {/* Background Div */}
          <div className="absolute inset-0 z-0">
            {/* Upper Left Circle */}
            <div className="bg-[#659CA3] absolute top-[-20%] left-[-15%]  lg:top-[-35%] lg:left-[-20%] w-[30%] h-[30%] lg:w-[50%] lg:h-[50%] rounded-full"></div>
            {/* Lower Right Circle */}
            <div className="bg-[#659CA3] absolute bottom-[-125%] right-[-15%] lg:bottom-[-75%] lg:right-[-20%] w-[40%] h-[140%] lg:h-[175%] rounded-full"></div>
          </div>
          <div className="relative w-auto lg:w-[25rem] mt-8 lg:my-8 z-10">
            <h4 className="text-[#416A70] text-xl md:text-2xl font-bold">
              Narrative Tech{' '}
              <span className="text-sm font-normal">(Work Project)</span>
            </h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-[#416A70] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                UI/UX
              </span>
              <span className="text-[#416A70] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                Marketing Page
              </span>
              <span className="text-[#416A70] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                Software Services
              </span>
            </div>
            <p className="my-8 text-[#416A70] text-sm mx-0 md:mr-20">
              A software development company that offers custom solutions to
              enhance business operations, guiding clients through its offerings
              and value propositions.
            </p>
            <Link
              className="bg-[#659CA3] hover:bg-[#416A70] px-4 py-3 text-sm text-white rounded-xl"
              href="https://bit.ly/nt-marketingwebsiteprototype"
            >
              View Prototype
              <HiMiniArrowUpRight className="inline-block ml-2" />
            </Link>
          </div>
          <div className="relative z-10">
            <div className="absolute top-[-10.5rem] right-[-5rem] lg:top-[2rem] lg:right-[1rem] xl:top-[-1rem] xl:right-[1rem] w-[380px] h-[180px] lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[400px] bg-[url('/assets/laptop-nt.png')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[-8.5rem] right-[-2rem] lg:top-[4rem] lg:right-[1rem] xl:top-[1rem] xl:right-[1rem] w-[100px] h-[200px] lg:w-[150px] lg:h-[290px] xl:w-[180px] xl:h-[320px] bg-[url('/assets/mobile-nt.png')] bg-no-repeat bg-contain"></div>
          </div>
        </div>

        {/* Project - Veritru (Capstone Project) */}
        <div className="bg-[#EDF0F9] relative flex flex-col-reverse h-[35rem] md:h-[25rem] p-8 rounded-xl shadow-lg overflow-hidden">
          {/* Background Div */}
          <div className="absolute inset-0 z-0">
            {/* Upper Left Circle */}
            <div className="bg-[#D9DFF2] absolute top-[-20%] left-[-15%]  lg:top-[-35%] lg:left-[-20%] w-[30%] h-[30%] lg:w-[50%] lg:h-[50%] rounded-full"></div>
            {/* Lower Right Circle */}
            <div className="bg-[#D9DFF2] absolute bottom-[-125%] right-[-15%] lg:bottom-[-75%] lg:right-[-20%] w-[40%] h-[140%] lg:h-[175%] rounded-full"></div>
          </div>
          <div className="relative w-auto lg:w-[25rem] mt-8 lg:my-8 z-10">
            <h4 className="text-[#424A72] text-xl md:text-2xl font-bold">
              Veritru{' '}
              <span className="text-sm font-normal">(Capstone Project)</span>
            </h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-[#424A72] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                UI/UX
              </span>
              <span className="text-[#424A72] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                Blockchain
              </span>
              <span className="text-[#424A72] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                Web3
              </span>
            </div>
            <p className="my-8 text-[#424A72] text-sm mx-0 md:mr-20">
              Veritru is a web3 application for fact-checking that leverages
              blockchain technology to securely and transparently store news
              articles, combating misinformation or fake news.
            </p>
            <Link
              className="bg-[#6872A0] hover:bg-[#424A72] px-4 py-3 text-sm text-white rounded-xl"
              href="https://veritru.vercel.app"
            >
              View Website
              <HiMiniArrowUpRight className="inline-block ml-2" />
            </Link>
          </div>
          <div className="relative z-10">
            <div className="absolute top-[-12rem] right-[-5rem] lg:top-[2rem] lg:right-[1rem] xl:top-0 xl:right-[1rem] w-[380px] h-[180px] lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[400px] bg-[url('/assets/laptop-veritru.png')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[-10rem] right-[-2rem] lg:top-[4rem] lg:right-[1rem] xl:top-[2rem] xl:right-[1rem] w-[100px] h-[200px] lg:w-[150px] lg:h-[290px] xl:w-[180px] xl:h-[320px] bg-[url('/assets/mobile-veritru.png')] bg-no-repeat bg-contain"></div>
          </div>
        </div>

        {/* ONGOING PROJECT */}
        {/* Project - Veritru (Capstone Project) */}
        <div className="bg-[#EBF4F3] relative flex flex-col-reverse h-[35rem] md:h-[25rem] p-8 rounded-xl shadow-lg overflow-hidden">
          {/* Background Div */}
          <div className="absolute inset-0 z-0">
            {/* Upper Left Circle */}
            <div className="bg-[#C7D4BE] absolute top-[-20%] left-[-15%]  lg:top-[-35%] lg:left-[-20%] w-[30%] h-[30%] lg:w-[50%] lg:h-[50%] rounded-full"></div>
            {/* Lower Right Circle */}
            <div className="bg-[#C7D4BE] absolute bottom-[-125%] right-[-15%] lg:bottom-[-75%] lg:right-[-20%] w-[40%] h-[140%] lg:h-[175%] rounded-full"></div>
          </div>
          <div className="relative w-auto lg:w-[50rem] mt-8 lg:my-8 z-10">
            <h4 className="text-[#4D5C41] text-xl md:text-2xl font-bold">
              Verdant Glow{' '}
              <span className="text-sm font-normal">(Personal Project)</span>
            </h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-[#4D5C41] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                UI/UX
              </span>
              <span className="text-[#4D5C41] bg-[#D9DEEE] text-xs font-semibold px-3 py-1 rounded-full">
                E-Commerce
              </span>
            </div>
            <p className="my-8 text-[#4D5C41] text-sm mx-0 md:mr-20">
              An online boutique offering handcrafted scented candles with a
              website that provides a seamless shopping experience in a white
              and green theme reflecting purity and nature.
            </p>
            <Link
              className="bg-[#BBBBBB] cursor-default px-4 py-3 text-sm text-white rounded-xl"
              href="#"
            >
              Coming Soon
              <HiMiniArrowUpRight className="inline-block ml-2" />
            </Link>
          </div>
          {/* <div className="relative z-10">
            <div className="absolute top-[-12rem] right-[-5rem] lg:top-[2rem] lg:right-[1rem] xl:top-0 xl:right-[1rem] w-[380px] h-[180px] lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[400px] bg-[url('/assets/laptop-veritru.png')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[-10rem] right-[-2rem] lg:top-[4rem] lg:right-[1rem] xl:top-[2rem] xl:right-[1rem] w-[100px] h-[200px] lg:w-[150px] lg:h-[290px] xl:w-[180px] xl:h-[320px] bg-[url('/assets/mobile-veritru.png')] bg-no-repeat bg-contain"></div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
