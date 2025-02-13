import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex flex-col min-h-[60vh] w-full px-3   bg-[home-background]'>
        <h1 className='text-center text-3xl font-bold lg:text-6xl px-12 pt-16 mb-10'>
          Welcome to Developers Blog
        </h1>
        <p className='text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto px-12'>
          Discover a variety of articles and tutorials on topics such as web
          development, software engineering, and programming languages, all
          brought to you through a blog built with Next.js and{' '}
          <a
            href='https://go.clerk.com/fgJHKlt'
            className='text-teal-500 hover:underline'
            target='_blank'
          >
            Clerk
          </a>
          .
        </p>
        <Link
          href='/'
          className='text-lg flex justify-center text-white font-bold hover:underline mt-10'
        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700 mt-8'>
        CallToAction
      </div>
      <div className='p-3 flex flex-col gap-8 py-7'>
        <Link
          href={'/'}
          className='text-lg text-gray-800 hover:underline text-center'
        >
          View all posts
        </Link>
      </div>
    </>
  );
}