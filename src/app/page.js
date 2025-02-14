import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <div className='relative flex flex-col min-h-[60vh] w-full px-3 bg-cover bg-center'
             style={{backgroundImage: "url('/bcg3.jpg')"}}>
            <div className={'absolute inset-0 top-0 left-0 w-full h-full bg-black/90'}></div>
            <div className={'flex flex-col w-full h-full'}>
            <h1 className='text-center text-white text-5xl font-bold font-serif lg:text-8xl px-12 pt-16 mb-10 z-30'>
                WebCloud
            </h1>
                <h2 className={'text-3xl md:text-4xl text-white font-serif text center flex justify-center z-30 font-semibold mb-10'}>
                    Web Developer Blogs
                </h2>
            <p className='z-30 text-white text-[18px] md:text-2xl max-w-2xl mx-auto px-12'>
                Unlock a world of insightful articles and hands-on tutorials in web development, software engineering, and programming languages.


            </p>
<div className='z-30 text-xl flex items-center justify-center rounded-2xl  text-white bg-blue-800 font-bold  mt-10 max-w-[200px]'>
    <Link href='/'>
        View all posts
    </Link>
</div>

            <div className='z-03 text-white p-3 bg-amber-900 dark:bg-slate-700 mt-8'>
                CallToAction
            </div>

        </div>


    </div>


</div>
)

}