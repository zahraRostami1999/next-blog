import React from 'react';
import Link from 'next/link';
import { getPosts } from '@/lib/Post';
import BlogGride from '@/components/blog/blog-gride/BlogGride';

async function page() {
    const data = await getPosts();
    return (
        <>
            <div className='px-20'>
                <header className="flex flex-col gap-6 md:gap-8 lg:gap-10  md:text-left my-10 w-3/5">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-orange-500">Unlock a World of Moments: Capturing the Beauty in  <span className="text-amber-900">Everyday Life</span></h1>
                    <p className="text-lg md:text-lg text-neutral-700">Every day is filled with unique moments waiting to be noticed and cherished. Here, I'll be documenting my personal journey of finding and reflecting on these glimpses of beauty, hoping to inspire you to discover the magic in your own everyday life.</p>
                    <Link href="/posts/create" className="inline-block px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md transition duration-300 w-1/3 text-center">Share Your Moment
                    </Link>
                </header>
                <main>
                    <div className=' '>
                        <h1 className='text-3xl font-bold my-10'>All Posts</h1>
                        <BlogGride posts={data} />
                    </div>
                </main>
            </div>
        </>
    )
}

export default page;
