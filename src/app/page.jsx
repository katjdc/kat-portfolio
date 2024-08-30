import React from 'react'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center w-[75%] mx-auto">
      {/* <div className="absolute top-0 left-0 w-40 h-40 bg-[url('/assets/left-yarn.svg')] bg-no-repeat bg-contain"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-[url('/assets/right-cat.svg')] bg-no-repeat bg-contain"></div> */}
      <h1 className="mt-14 text-lg text-kat-primary font-semibold">
        Hello, Katrine Joy Dela Cruz here! I am a
      </h1>
      <hr className="w-16 my-5 border-kat-primary"/>
      <h2 className="text-6xl md:text-9xl font-bold my-4 text-kat-primary font-heading">
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
    </section>
  )
}
