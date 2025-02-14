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
import { Switch } from '@/app/components/ui/switch'
import { Input } from '@/app/components/ui/input'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
      <header className="sticky top-0 left-0 bg-blue-800 text-white w-full h-16 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link href="/" className="flex items-center space-x-2">
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
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
                <Link href="#project" className="hover:text-blue-400 transition-colors">Projects</Link>
              </div>

              <Input
                  placeholder="Search..."
                  className="w-48 lg:w-64 mx-4 bg-white/20 border-none focus-visible:ring-2 focus-visible:ring-white"
              />
            </nav>

            {/* Desktop Auth & Theme Section */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaSun className="w-5 h-5" />
                <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={handleThemeToggle}
                    className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300"
                />
                <FaMoon className="w-5 h-5" />
              </div>

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
              <div className="z-40 absolute h-[80vh] top-16 left-0 right-0 bg-red-900 md:hidden p-4 space-y-4">
                <Input
                    placeholder="Search..."
                    className="w-full bg-white/20 border-none focus-visible:ring-2 focus-visible:ring-white"
                />

                <nav className="flex flex-col space-y-4">
                  <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                  <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
                  <Link href="#project" className="hover:text-blue-400 transition-colors">Projects</Link>

                  <div className="flex items-center justify-between pt-4 border-t border-blue-600">
                    <div className="flex items-center space-x-2">
                      <FaSun className="w-5 h-5" />
                      <Switch
                          checked={theme === 'dark'}
                          onCheckedChange={handleThemeToggle}
                          className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-300"
                      />
                      <FaMoon className="w-5 h-5" />
                    </div>

                    <SignedOut>
                      <Link href="/sign-in">
                        <Button className="bg-yellow-700 hover:bg-yellow-600">
                          Sign In
                        </Button>
                      </Link>
                    </SignedOut>
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}

export default Header