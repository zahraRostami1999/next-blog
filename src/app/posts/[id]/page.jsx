import React from 'react';
import Image from 'next/image';
import { getPost } from '@/lib/Post';
import Link from 'next/link';

async function page({ params }) {
    const post = await getPost(params.id);
    post.content = post.content.trim().replace('\n', '<br />');
    return (
        <div className="mx-10 my-10 flex flex-col gap-10 justify-center">
            <header className="flex justify-center text-neutral-800">
                <div className="w-1/3 py-10 flex justify-center">
                    <Image src={post.image} width={500} height={400} className="rounded" />
                </div>
                <div className="w-1/2 flex justify-center p-10">
                    <div className="h-1/2 flex flex-wrap gap-8">
                        <div className="text-4xl font-bold w-full text-amber-600">{post.title}</div>
                        <div className="text-xl w-full text-amber-900">{post.author}</div>
                        <div className="text-xl w-full text-neutral-700">{post.summary}</div>
                    </div>
                </div>
            </header>
            <main className="w-full flex justify-center">
                <div className="w-2/3 bg-amber-100 px-10 py-10 rounded text-neutral-800 text-xl">
                    <p dangerouslySetInnerHTML={{
                        __html: post.content
                    }}></p>
                    <div className='my-10'>
                        <Link href="/posts" className='bg-orange-500 px-4 py-2 rounded text-lg hover:bg-orange-600'>Other Posts</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page
