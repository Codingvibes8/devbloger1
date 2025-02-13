import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <div className='relative flex flex-col min-h-[60vh] w-full px-3 bg-cover bg-center'
             style={{backgroundImage: "url('/bcg3.jpg')"}}>
            <div className={'absolute inset-0 top-0 left-0 w-full h-full bg-black/65'}></div>
            <div className={'flex flex-col w-full h-full'}>
            <h1 className='text-center text-white text-3xl font-bold lg:text-6xl px-12 pt-16 mb-10 z-50'>
                 Developer Blog
            </h1>
            <p className='z-50 text-white text-lg md:text-2xl max-w-2xl mx-auto px-12'>
                Unlock a world of insightful articles and hands-on tutorials in web development, software engineering, and programming languages.


            </p>
<div className='z-50 text-xl flex items-center justify-center rounded-2xl  text-white bg-blue-800 font-bold  mt-10 max-w-[200px]'>
    <Link href='/'>
        View all posts
    </Link>
</div>

            <div className='z-50text-white p-3 bg-amber-900 dark:bg-slate-700 mt-8'>
                CallToAction
            </div>

        </div>


    </div>


</div>
)

}