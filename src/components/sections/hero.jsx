import React from 'react'

export function Hero() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center text-center w-[90%] sm:w-[75%] mx-auto pt-20">
        <h1 className="mt-14 text-base sm:text-lg text-kat-primary font-semibold">
          Hello, Katrine Joy Dela Cruz here! I am a
        </h1>
        <hr className="w-12 sm:w-16 my-5 border-kat-primary" />
        <h2 className="text-6xl md:text-7xl xl:text-9xl font-bold mb-[14rem] xl:my-12 text-kat-primary font-heading">
          UI/UX DESIGNER
        </h2>
        <p className="mt-4 sm:mt-6 text-base md:text-lg font-semibold text-kat-primary">
          With 2+ years of proven track record in designing intuitive and
          user-friendly solutions for web & mobile. I focus on producing
          beautifully crafted digital products and creating exceptional digital
          experiences.
        </p>
        <button className="mt-8 px-4 sm:px-6 py-2 text-base sm:text-lg font-bold text-white bg-kat-primary rounded-xl hover:bg-kat-accent">
          Get in Touch
        </button>
      </div>
    </section>
  )
}
