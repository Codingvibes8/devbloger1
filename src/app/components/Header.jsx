'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { dark, light } from '@clerk/themes'
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/app/components/ui/button'
import { Switch } from '../components/ui/switch'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  // Handle theme toggle
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
      <header className="h-16 sticky top-0 left-0 bg-blue-800 text-white w-full mx-auto px-6 sm:px-12 md:px-24 flex items-center justify-center">
        <div className="w-full mx-auto py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/guide.svg" alt="LockLoop" width={40} height={40} />
            <span className="text-white text-2xl font-bold font-serif">Developer Blogs</span>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center text-white">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="#project" className="hover:text-blue-400 transition-colors">Projects</Link>
            <div className="flex space-x-4">
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
                  <Button className="bg-yellow-700 py-2 px-6">
                    <SignIn/>
                  </Button>
                </Link>
              </SignedOut>
            </div>
            <div className="flex items-center space-x-2">
              <FaSun className="w-5 h-5" />
              <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={handleThemeToggle}
                  className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300"
              />
              <FaMoon className="w-5 h-5" />
            </div>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
            <div>
              <nav className="md:hidden bg-gray-500 p-4">
                <div className="flex flex-col space-y-4 text-black">
                  <Link href="/" className="hover:text-yellow-200 transition-colors">Home</Link>
                  <Link href="#about" className="hover:text-yellow-200 transition-colors">About</Link>
                  <Link href="#project" className="hover:text-yellow-200 transition-colors">Projects</Link>
                  <div className="flex gap-2">
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
                        <Button className="ring-1 ring-white rounded-2xl py-2 px-6 text-lg font-bold">
                          <SignIn/>
                        </Button>
                      </Link>
                    </SignedOut>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaSun className="w-5 h-5" />
                    <Switch
                        checked={theme === 'dark'}
                        onCheckedChange={handleThemeToggle}
                        className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300"
                    />
                    <FaMoon className="w-5 h-5" />
                  </div>
                </div>
              </nav>
            </div>
        )}
      </header>
  )
}

export default Header