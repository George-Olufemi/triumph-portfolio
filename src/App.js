import React from 'react';
import Body from './components/Body';
import Head from './components/Head';

function App() {
  return (
    <React.Fragment>
      <div className='bg-black text-white'>
        <Head />
      <div className=''>
        <Body />
      </div>
      </div>
    </React.Fragment>
  );
}

export default App;
