import React from 'react';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';

function MainHeader() {
  return (
    <div className='flex justify-start items-center p-4 bg-amber-950 text-neutral-900 px-10'>
      <div className='w-1/4'>
        <Logo />
      </div>
      <div className='w-1/2 flex justify-center'>
        <Navigation />
      </div>
    </div>
  )
}

export default MainHeader
