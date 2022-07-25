import React from "react";
import '../App.css';
//import Cards from "./Cards";
import { Link, Outlet } from "react-router-dom";

function Body() {
  return(
    <React.Fragment>
        <div className='h-auto text-white bg-black'>
            {/*  */}
            <div className="pt-12 pb-10  md:grid md:grid-row-3 md:grid-cols-3 md:px-64">
                <Link to="/animated-film">    
                    <div className="py-3 rounded-l-full cursor-pointer bg-gradient-to-b from-gray-700 via-gray-900 to-black">
                        <h1 className="text-lg font-bold tracking-wider text-center uppercase">animated films</h1>
                    </div>
                </Link>
                <Link to="twodimensionanimation">    
                    <div className="py-3 border-l-2 border-r-2 cursor-pointer purple">
                        <h1 className="text-lg font-bold tracking-wider text-center uppercase">2d animation</h1>
                    </div>
                </Link>
                <Link to="contact">    
                    <div className="py-3 border-b border-r-0 rounded-r-full cursor-pointer bg-gradient-to-b from-gray-700 via-gray-900 to-black">
                        <h1 className="text-lg font-bold tracking-wider text-center uppercase">contact</h1>
                    </div>
                </Link>
            </div>
            {/* <Cards /> */}
            <Outlet />
        </div>
    </React.Fragment>
  );
}

export default Body;
