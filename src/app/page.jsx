import React from 'react'

export default function Home() {
  return (
    <section>
      <div className="absolute bg-[url('/assets/yarn.svg')] bg-no-repeat bg-contain top-[9rem] left-[-4rem] xl:top-36 xl:left-10 w-[20rem] h-[20rem] xl:w-[30rem] xl:h-[30rem]"></div>
      <div className="absolute bg-[url('/assets/cat.svg')] bg-no-repeat bg-contain top-[5rem] right-[-12rem] xl:top-40 xl:right-8 w-[20rem] h-[20rem] xl:w-[30rem] xl:h-[30rem] origin-bottom -rotate-45 lg:origin-center lg:-rotate-0"></div>
      <div className="flex flex-col items-center justify-center text-center w-[75%] mx-auto">
        <h1 className="mt-14 text-lg text-kat-primary font-semibold">
          Hello, Katrine Joy Dela Cruz here! I am a
        </h1>
        <hr className="w-16 my-5 border-kat-primary" />
        <h2 className="text-6xl lg:text-9xl font-bold mt-32 mb-10 lg:my-4 text-kat-primary font-heading">
          UI/UX DESIGNER
        </h2>
        <p className="mt-6 text-lg font-semibold text-kat-primary">
          With 2+ years of making big ideas user-friendly. I focus on the design
          of software, web, and mobile design to produce beautifully crafted
          digital products.
        </p>
        <button className="mt-8 px-6 py-2 text-lg font-bold text-white bg-kat-primary rounded-xl hover:bg-kat-accent">
          Get in Touch
        </button>
      </div>
      <div className="absolute bg-[url('/assets/swirl.svg')] bg-no-repeat bg-contain top-[55rem] left-[4rem] xl:top-[45rem] xl:left-[38%] w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem]"></div>
    </section>
  )
}
