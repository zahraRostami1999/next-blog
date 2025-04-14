import React from 'react'
import BlogItem from '../blog-item/BlogItem'

function BlogGride({ posts }) {
    return (
        <div>
            <div className='flex'>
                <ul className='flex flex-row flex-wrap justify-center gap-10 p-10'>
                    {posts.map((post) => (
                        <li key={post.id} className="flex w-1/3">
                            <BlogItem title={post.title} id={post.id} image={post.image} summary={post.summary} author={post.author} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BlogGride;
