import Link from 'next/link'
import React from 'react'
import { HiMenu } from 'react-icons/hi'

import { Logo } from '@/components/kat-logo'
import { Socials } from '@/components/socials'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  return (
    <nav className="flex fixed w-full h-20 px-4 sm:px-8 xl:px-60 items-center justify-between z-50">
      <Sheet>
        <Link href="/" className="lg:hidden">
          <Logo />
          <span className="sr-only">Kat</span>
        </Link>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="ghost">
            <HiMenu className="h-6 w-6 text-kat-primary" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-kat-backdrop">
          <div className="flex flex-col h-full items-center gap-4">
            <Link
              className="w-full text-center py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="/#about"
            >
              About
            </Link>
            <Link
              className="w-full text-center py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="/#services"
            >
              Services
            </Link>
            <Link
              className="w-full text-center py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="/#works"
            >
              Works
            </Link>
            <Link
              className="w-full text-center py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="/#contact"
            >
              Contact
            </Link>
            <Link
              className="w-full text-center py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="https://drive.google.com/file/d/1tlYayDly4ZSCMF4Y4uctR0nwNQpoo_cP/view?usp=sharing"
            >
              Resume
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <Logo />
        <span className="sr-only">Kat</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/#about"
            >
              About
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/#services"
            >
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/#works"
            >
              Works
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="/#contact"
            >
              Contact
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="https://drive.google.com/file/d/1tlYayDly4ZSCMF4Y4uctR0nwNQpoo_cP/view?usp=sharing"
            >
              Resume
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden lg:flex">
        <Socials />
      </div>
    </nav>
  )
}
