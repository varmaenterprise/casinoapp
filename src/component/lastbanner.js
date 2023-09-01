import React from 'react';
import './lastbanner.css';
import MarqueeComponent from './marquee';



function Lastbanner() {
  return (
    <div className='container' id="container">
        <div className='row'>
        <div className='col-md-6'>Image</div>

            <div className='col-md-6'>
                <div className='row'>
                    <h3 id="h3">Play Anytime,Anywhere !</h3>
                    <MarqueeComponent/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Lastbanner;
