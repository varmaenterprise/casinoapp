import React from 'react';
import './lastbanner.css';
import MarqueeComponent from './marquee';
import image from '../images/15.png';



function Lastbanner() {
  return (
    <div className='container' id="container">
        <div className='row'>
        <div className='col-md-6 d-flex justify-content-center align-items-center'>
        <img src={image} alt="Image Description" className="img-fleid" />
          </div>

            <div className='col-md-6'>
                <div className='row'>
                    <h3 id="h33">Play Anytime,Anywhere !</h3>
                    <br/>
                    <MarqueeComponent/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Lastbanner;
