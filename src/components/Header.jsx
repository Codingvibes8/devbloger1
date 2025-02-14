'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

import { useTheme } from 'next-themes'
import { dark, light } from '@clerk/themes'
import {  SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../components/ui/button'

import { Input } from '../components/ui/input'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()



  return (
      <header className="sticky top-0 left-0 bg-blue-800 text-white w-full h-16 z-50 px-8 md:px-16 lg:px-24">
        <div className=" mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link href="/public" className="flex items-center space-x-2">
                <Image src="/guide.svg" alt="logo" width={40} height={40} />
                <div className="flex flex-col">
                  <span className="text-white text-xl font-bold font-serif">WebCloud</span>
                  <span className="text-blue-300 text-xs font-bold">Web Dev Blogs</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center flex-1 justify-between max-w-3xl mx-8">
              <div className="flex items-center space-x-6 flex-1">
                <Link href="/public" className="hover:text-blue-400 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
                <Link href="/project" className="hover:text-blue-400 transition-colors">Projects</Link>
              </div>

              <Input
                  placeholder="Search..."
                  className="w-48 lg:w-64 mx-4 bg-white border-none focus-visible:ring-2 focus-visible:ring-black"
              />
            </nav>

            {/* Desktop Auth & Theme Section */}
            <div className="md:flex items-center space-x-4">
              <SignedIn>
                <UserButton
                    appearance={{
                      baseTheme: theme === 'light' ? light : dark,
                    }}
                    userProfileUrl="/"
                />
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in">
                  <Button className="bg-yellow-700 hover:bg-yellow-600">
                    Sign In
                  </Button>
                </Link>
              </SignedOut>
            </div>
          </div>


          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="z-40 absolute h-[80vh] top-16 left-0 right-0 bg-yellow-800 md:hidden p-4 space-y-4">
                <h1 className={'text-4xl text-yellow-300 font-serif font-bold flex items-center text-center justify-center pt-20 mb-10'}>WebCloud</h1>
                <Input
                    placeholder="Search..."
                    className="w-full bg-white border-none focus-visible:ring-2 focus-visible:ring-black"
                />

                <nav className="flex flex-col space-y-4">
                  <Link href="/public" className="hover:text-blue-400 transition-colors w-full p-4 hover:bg-red-600">Home</Link>
                  <Link href="/about" className="hover:text-blue-400 transition-colors w-full p-4 hover:bg-red-600">About</Link>
                  <Link href="/project" className="hover:text-blue-400 transition-colorsw-full p-4 hover:bg-red-600">Projects</Link>

                    <SignedOut>
                        <Button className="z-50text-black bg-white hover:bg-yellow-600 w-full">
                          Sign In
                        </Button>
                    </SignedOut>


                </nav>
              </div>
          )}
        </div>
      </header>
  )
}

export default Header