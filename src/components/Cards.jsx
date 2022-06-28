import React from "react";
import '../App.css';
import asset1 from '../asset1/3d Stairs_2 mtcheww.mp4';
import timeanimation from '../asset1/time animation.mp4';
import aroundui from '../asset1/aroundui.mp4';
import carsandanimation_2 from '../asset1/cars and animation_2.mp4';
import colorfulgradients from '../asset1/colorful gradients.mp4';
import Comp1 from '../asset1/Comp 1.mp4';
import FinalMoney from '../asset1/Final Money.mp4';
import final2 from '../asset1/final_2.mp4';
import futurepay from '../asset1/future pay_2_1.mp4';
import Geekleemanimationkoreanchinese from '../asset1/Geekleem animation-korean-chinese.mp4';
import inyourname from '../asset1/in your name2_1.mp4';
import greatgoat from '../asset1/GREAT GOAT.mp4';
import justapeing from '../asset1/just apeing_3.mp4';
import cryptocrunchredo from '../asset1/crypto crunch redo.mp4';
import Footer from "./Footer";
//import ReactPlayer from 'react-player'
//import startu1 from '../asset1/startu-_1.mp4';

function Cards() {
  return(
    <React.Fragment>
        <div className="card__body h-auto">
            <div className="md:grid md:grid-cols-2 md:grid-row-4 gap-4 px-10 py-10">
                <div className="pb-5">
                  <video className="rounded-lg" src={asset1} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg h-96 w-full "  src={timeanimation} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg"  src={aroundui} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg" height="50px" src={carsandanimation_2} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg" height="" src={colorfulgradients} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg h-72 w-full" height="" src={Comp1} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg" height="" src={FinalMoney} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg" height="" src={final2} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg" height="" src={futurepay} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg" height="" src={Geekleemanimationkoreanchinese} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg" height="" src={inyourname} controls />
                </div>
                {/* <div className="pb-5">
                  <video className="rounded-lg" src={startu1} controls />
                </div> */}
                <div className="pb-5">
                  <video className='rounded-lg h-96 w-full' src={greatgoat} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg h-96 w-full" height="" src={justapeing} controls />
                </div>
                <div className="pb-5">
                  <video className="rounded-lg h-96 w-full" height="" src={cryptocrunchredo} controls />
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
  );
}

export default Cards;
