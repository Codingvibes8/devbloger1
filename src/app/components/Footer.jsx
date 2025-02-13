'use client';


import Image from 'next/image';
import Link from 'next/link';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <footer container className='border border-t-8 border-teal-500 bg-blue-800'>
      <div className='w-full max-w-7xl mx-auto flex justify-between items-center p-3'>
           <div className='flex items-center gap-1'>
             <span className='text-xl'>developer blogs</span> 
             <Image src='/guide.svg' width={40} height={40} alt='logo'/>
            </div>
               <div className='flex space-x-4'> 
            <Link href='/' className='text-blue-100 transition-colors'>
                Home
             </Link>
            <Link href='/about' className='text-blue-100 transition-colors'>
                  About
            </Link>
            <Link href='/project' className='hover:text-blue-100 transition-colors'>
                Projects
              </Link>
          </div>
        
      </div>
    </footer>
  );
}