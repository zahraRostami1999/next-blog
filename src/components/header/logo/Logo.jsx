import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-amber-100'>
        <Link href="/">NABAATBLOG</Link>
      </h1>
    </div>
  )
}

export default Logo
