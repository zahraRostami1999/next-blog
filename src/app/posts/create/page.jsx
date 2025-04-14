"use client"
import React from 'react';

function page() {
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [summary, setSummary] = React.useState('');
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState(null);

    const handleSubmit = async (e) => {
        const newPost = {
            id: Date.now(),
            title,
            image,
            author,
            summary,
            content,
        };

        const response = await fetch('http://localhost:8000/Posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });
        if (response.ok) {
            console.log("Post created!");
        } else {
            console.error("Failed to create post.");
        }
    }

    return (
        <>
            <div className='flex p-10 justify-center'>
                <div className='w-1/2'>
                    <h1 className='text-3xl font-bold text-amber-800 my-10'>
                        Create Post
                    </h1>
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                        <label htmlFor="title">Your Post Title: </label>
                        <input type="text" placeholder='Title' name='title' onChange={(e) => setTitle(e.target.value)} className='border border-neutral-900 rounded p-2' />
                        <label htmlFor="author">Your Post Author:</label>
                        <input type="text" placeholder='Author' name='author' onChange={(e) => setAuthor(e.target.value)} className='border border-neutral-900 rounded p-2' />
                        <label htmlFor="summary">Your Post Summary:</label>
                        <textarea placeholder='Summary' name='summary' onChange={(e) => setSummary(e.target.value)} className='border border-neutral-900 rounded p-2' />
                        <label htmlFor="content">Your Post Content:</label>
                        <textarea placeholder='Contetent' name='content' onChange={(e) => setContent(e.target.value)} className='border border-neutral-900 rounded p-2' />
                        <label htmlFor="image">Your Post Image:</label>
                        <input type="text" name='image' onChange={(e) => setImage(e.target.value)} className='border border-neutral-900 rounded p-2' />
                        <button type="submit" className='bg-orange-400 px-3 py-2 rounded'>Share Post</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default page;
