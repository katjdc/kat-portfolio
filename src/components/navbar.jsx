import Link from 'next/link'
import React from 'react'
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
        <SheetContent side="left">
          <Link href="#">
            <Logo />
            <span className="sr-only">Kat</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="w-full py-2 font-moreSugar text-lg font-semibold"
              href="#"
            >
              Home
            </Link>
            <Link
              className="w-full py-2 font-moreSugar text-lg font-semibold"
              href="#"
            >
              About
            </Link>
            <Link
              className="w-full py-2 font-moreSugar text-lg font-semibold"
              href="#"
            >
              Services
            </Link>
            <Link
              className="w-full py-2 font-moreSugar text-lg font-semibold"
              href="#"
            >
              Portfolio
            </Link>
            <Link
              className="w-full py-2 font-moreSugar text-lg font-semibold"
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
              className="h-9 w-max justify-center rounded-md bg-white px-4 py-2 font-moreSugar text-kat-primary text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md bg-white px-4 py-2 font-moreSugar text-kat-primary text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              About
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md bg-white px-4 py-2 font-moreSugar text-kat-primary text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md bg-white px-4 py-2 font-moreSugar text-kat-primary text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              className="h-9 w-max justify-center rounded-md bg-white px-4 py-2 font-moreSugar text-kat-primary text-md font-bold transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
