import React from 'react'
import { IoLogoFigma } from 'react-icons/io5'
import { MdOutlineChecklist } from 'react-icons/md'
import {
  PiMagnifyingGlassLight,
  PiPenNib,
  PiShootingStar,
} from 'react-icons/pi'
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiCanva,
  SiJirasoftware,
  SiTrello,
} from 'react-icons/si'

export function Services() {
  return (
    <section id="services">
      <div className="flex flex-col items-center justify-center text-center w-[90%] sm:w-[75%] mx-auto pt-48">
        <h3 className="text-xl text-kat-primary font-bold">Services</h3>
        <p className="mt-4 sm:mt-6 mx-0 md:mx-6 text-normal font-normal text-kat-primary">
          Explore my design services, from user interface and experience to
          prototyping and testing. Let&apos;s craft exceptional digital
          experiences together.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center text-center">
          {/* UI/UX Design */}
          <div className="flex flex-col items-center">
            <PiShootingStar size={48} className="text-kat-accent mb-4" />
            <h4 className="text-lg font-bold text-kat-primary">UI/UX Design</h4>
            <p className="text-sm text-gray-600 mt-2">
              I specialize in web development and design, creating visually
              appealing, user-friendly digital experiences.
            </p>
          </div>
          {/* Branding */}
          <div className="flex flex-col items-center">
            <PiPenNib size={48} className="text-kat-accent mb-4" />
            <h4 className="text-lg font-bold text-kat-primary">Branding</h4>
            <p className="text-sm text-gray-600 mt-2">
              I&apos;m a branding expert, crafting unique visual identities that
              tell your story and resonate with your audience.
            </p>
          </div>
          {/* UX Research */}
          <div className="flex flex-col items-center">
            <PiMagnifyingGlassLight
              size={48}
              className="text-kat-accent mb-4"
            />
            <h4 className="text-lg font-bold text-kat-primary">UX Research</h4>
            <p className="text-sm text-gray-600 mt-2">
              I specialize in user experience research, collaborating on web
              development, and ensuring user-friendly digital products.
            </p>
          </div>
          {/* Usability Testing */}
          <div className="flex flex-col items-center">
            <MdOutlineChecklist size={48} className="text-kat-accent mb-4" />
            <h4 className="text-lg font-bold text-kat-primary">
              Usability Testing
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              I perform usability testing and optimize designs based on
              real-user feedback for seamless interactions.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      {/* Tools Section */}
      <div className="flex flex-col items-center justify-center text-center w-[90%] sm:w-[75%] mx-auto pt-20">
        <h3 className="text-xl font-bold text-kat-primary mb-8">Tools</h3>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          <IoLogoFigma size={48} className="text-kat-primary" />
          <SiAdobexd size={48} className="text-kat-primary" />
          <SiAdobephotoshop size={48} className="text-kat-primary" />
          <SiCanva size={48} className="text-kat-primary" />
          <SiJirasoftware size={48} className="text-kat-primary" />
          <SiTrello size={48} className="text-kat-primary" />
        </div>
      </div>
    </section>
  )
}
