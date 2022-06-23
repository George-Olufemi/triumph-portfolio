import React from 'react';
import '../App.css';
import HeaderPic from '../HeaderPic/pitch-background.png';
import Ball from '../Ball/ball.png';
import Profile from './Profile';
import scroll from '../scroll/scroll.png'

function Head() {
  return (
    <React.Fragment>
        <div className='md:flex justify-end pt-5 md:pt-0'>
            <img className='header__image' src={HeaderPic} alt="Header Pic" />
        </div>
        {/* mobile */}
        <div className='block md:hidden'>
            <img className='header__ball w-12 md:w-32 absolute right-16 top-56' src={Ball} alt="Ball Pic" />
        </div>
        {/* lg */}
        <div className='hidden md:block'>
            <img className='header__ball2 w-16 md:w-32 absolute right-0 top-32' src={Ball} alt="Ball Pic" />
        </div>
        <Profile />
        <div className='flex justify-center items-center pt-40 md:pt-20'>
            <img className='w-10 md:w-16' src={scroll} alt="" />
        </div>
        <p className='text-center text-sm pt-2 pb-5'>pull up to see more</p>
    </React.Fragment>
  );
}

export default Head;