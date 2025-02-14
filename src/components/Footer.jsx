'use client';


import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border border-t-8 border-teal-500 bg-blue-800'>
      <div className='w-full max-w-7xl mx-auto flex justify-between items-center p-3'>
          <div className='flex items-center gap-1'>
              <Image src='/guide.svg' width={40} height={40} alt='logo'/>
              <span className='text-xl'>WebCloud</span>
          </div>
          <div className='flex space-x-4'>
            <Link href='/public' className='text-blue-100 transition-colors'>
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