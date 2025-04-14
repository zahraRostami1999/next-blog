import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <div>
      <ul className='flex gap-10 text-xl text-amber-200'>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Navigation
