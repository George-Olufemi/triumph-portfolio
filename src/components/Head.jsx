import React from 'react';
import '../App.css';
import HeaderPic from '../HeaderPic/pitch-background.png';
import Ball from '../Ball/ball.png';
import Profile from './Profile';
import scroll from '../scroll/scroll.png'

function Head() {
  return (
    <React.Fragment>
        <div className='justify-end pt-5 md:flex md:pt-0'>
            <img className='header__image' src={HeaderPic} alt="Header Pic" />
        </div>
        {/* mobile */}
        <div className='block md:hidden'>
            <img className='absolute w-12 header__ball md:w-32 right-16 top-56' src={Ball} alt="Ball Pic" />
        </div>
        {/* lg */}
        <div className='hidden md:block'>
            <img className='absolute right-0 w-16 header__ball2 md:w-32 top-32' src={Ball} alt="Ball Pic" />
        </div>
        <Profile />
        <div className='flex items-center justify-center pt-40 md:pt-20'>
            <img className='w-10 md:w-16' src={scroll} alt="" />
        </div>
        <p className='pt-2 pb-5 text-sm text-center'>click to see more</p>
    </React.Fragment>
  );
}

export default Head;