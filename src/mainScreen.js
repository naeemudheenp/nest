import React from 'react';
import Bg from './assets/bg.png'
export default function MainScreen(){
    return(
        <div className="mainScreen">
            <div className="mainScreen__text">
                ENJOY YOUR TIME <br></br>WITH NEST.
            </div>
            <div className="mainScreen_img">
                <img src={Bg} ></img>
            </div>
        </div>
    
    );
}