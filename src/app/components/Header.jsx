'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { dark, light } from '@clerk/themes';
import { SignIn,SignedIn, SignUp,SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/app/components/ui/button'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 left-0 bg-blue-800 text-white w-full mx-auto px-6 sm:px-12 md:px24 flex items-center justify-center">
      <div className="w-full mx-auto  py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/guide.svg" alt="LockLoop" width={40} height={40} />
          <span className='text-white text-2xl font-bold font-serif'>Developer Blogs</span>
        </Link>
        <nav className="hidden md:flex space-x-6 items-center text-white">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link href="#project" className="hover:text-blue-400 transition-colors">Projects</Link>
          <div className="flex space-x-4">
    
          <SignedIn>
          <UserButton
            userProfileUrl='/'
          />
        </SignedIn>
        <SignedOut>
          <Link href='/sign-in'>
            <Button className='bg-yellow-700 py-2 px-6'>
              Sign In
            </Button>
          </Link>
        </SignedOut>
           
          </div>
           <div>
            <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
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
           
          <div className='flex gap-2'>
       
       <SignedIn>
         <UserButton
           userProfileUrl='/'
         />
       </SignedIn>
       <SignedOut>
         <Link href='/sign-in' className=' hover:bg-red-700 bg-yellow-700 '>
           <Button className='ring-1 ring-white rounded-2xlpy-2 px-6 text-lg font-bold'>
             Sign In
           </Button>
         </Link>
       </SignedOut>
       
      </div>
          </div>
        </nav>
       
      </div>
    )}
    </header>
  )
}

export default Header