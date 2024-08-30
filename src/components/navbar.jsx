import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { HiOutlineMenu } from 'react-icons/hi'

import { Logo } from '@/components/kat-logo'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Navbar() {
  return (
    <nav className="flex h-20 w-full shrink-0 items-center justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <HiOutlineMenu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-kat-backdrop">
          <Link href="/">
            <Logo />
            <span className="sr-only">Kat</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="w-full py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="#"
            >
              Home
            </Link>
            <Link
              className="w-full py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="#"
            >
              About
            </Link>
            <Link
              className="w-full py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="#"
            >
              Services
            </Link>
            <Link
              className="w-full py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="#"
            >
              Portfolio
            </Link>
            <Link
              className="w-full py-2 font-heading text-lg font-semisemibold text-kat-primary focus:text-kat-accent data-[active]:bg-kat-accent data-[state=open]:bg-kat-accent"
              href="#"
            >
              Contact
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
              href="#"
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              About
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md px-4 py-2 font-heading text-kat-primary text-md font-semibold transition-colors hover:text-kat-accent focus:text-kat-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-kat-accent/50 data-[state=open]:bg-kat-accent/50 dark:text-white dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:text-kat-accent dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex">
        <Link className="mr-6 hidden lg:flex" href="#">
          <AiFillLinkedin
            size={32}
            className="text-kat-primary dark:text-white hover:text-kat-accent"
          />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link className="mr-6 hidden lg:flex" href="#">
          <AiFillInstagram
            size={32}
            className="text-kat-primary dark:text-white hover:text-kat-accent"
          />
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
    </nav>
  )
}
