import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function Contact() {
  return (
    <section id="contact">
      <div className="flex items-center justify-center w-[90%] sm:w-[75%] mx-auto pt-28 pb-16">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl text-kat-primary font-bold">Get in Touch</h3>
            <p className="mt-6 mb-10 sm:mt-8 sm:mb-16 text-normal font-normal text-kat-primary">
              I&apos;m passionate about crafting exceptional user experiences
              and eager to explore new opportunities and collaborations. If
              you&apos;re interested in discussing a project or design ideas,
              feel free to reach out. I look forward to connecting!
            </p>
            <div className="flex items-center mb-4">
              <MdEmail className="w-6 h-6 mr-2 text-kat-primary" />
              <span className="text-base font-medium">katrinejdc@gmail.com</span>
            </div>
            <button className="w-40 mt-8 px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold text-white bg-kat-primary rounded-xl hover:bg-kat-accent">
              Contact Me
            </button>
          </div>

          {/* Right Side - Circle & Sparkles */}
          <div className="relative flex items-center justify-center">
            <div className="w-[25rem] h-[25rem] bg-gray-300 rounded-full bg-[url('../components/assets/img/kat-profile.jpg')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[1rem] right-[-3rem] text-kat-primary">
              <FaStar className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
