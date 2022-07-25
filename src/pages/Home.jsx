import React from 'react';
import Body from '../components/Body';
import Head from '../components/Head';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <React.Fragment>
        <div className='text-white bg-black'>
        <Head />
        <Body />
        <Footer />
      </div>
    </React.Fragment>
  )
}
