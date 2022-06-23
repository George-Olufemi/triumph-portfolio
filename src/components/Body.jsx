import React from "react";
import '../App.css';

function Body() {
  return(
    <React.Fragment>
        <div className='text-white bg-black h-screen'>
            {/*  */}
            <div className="md:grid md:grid-row-3 md:grid-cols-3 md:px-64 pt-12 hidden">
                <div className="py-3 bg-gradient-to-b from-gray-700 via-gray-900 to-black rounded-l-full">
                    <h1 className="uppercase font-bold text-center text-lg tracking-wider">animated films</h1>
                </div>
                <div className="purple border-l-2 border-r-2 py-3">
                    <h1 className="uppercase font-bold text-center text-lg tracking-wider">2d animation</h1>
                </div>
                <div className="py-3 border-b border-r-0 bg-gradient-to-b from-gray-700 via-gray-900 to-black rounded-r-full">
                    <h1 className="uppercase font-bold text-center text-lg tracking-wider">contact</h1>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Body;
