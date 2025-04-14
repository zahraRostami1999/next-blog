import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function BlogItem({ title, id, image, summary, author }) {
    console.log(image);
    
    return (
        <div className=''>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 w-full">
                <div className="relative w-full h-48">
                    <img src={image} alt="123" />
                    {/* <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcoffee&psig=AOvVaw2IC0SjmpqkdDaH7GEO5E0k&ust=1744734907477000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjmhpn614wDFQAAAAAdAAAAABAE" alt={title} width={500} height={300} className="w-full h-full object-cover" /> */}
                    {/* <Image src={image} alt={title} layout="fill" objectFit="cover" /> */}
                </div>
                <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-xl font-bold text-neutral-800">{title}</h2>
                    <p className="text-gray-600 text-sm">{summary}</p>
                    <p className="text-gray-500 text-xs">Created by: <span className="font-medium text-amber-700">{author}</span></p>
                </div>
                <div className='text-neutral-900 p-4 mb-3'>
                    <Link href={`/posts/${id}`} className='bg-orange-400 px-3 py-2 rounded'>View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogItem;
