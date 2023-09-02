import React from 'react';
import './centerbanner.css';
import sixthimage from '../images/6.png';

function Centerbanner() {
  return (
    <div className='container' id="container">
        <div className='row'>
            <div className='col-md-6'>
                <h3 id="h31">PLAY BIG </h3>
                <h3 id="h3">BIG WINNER! </h3>
                <br/>
<div id="buttonbox"> 
<button type="button"  id="button">Sports</button>
<button type="button"  id="button">Casino</button>
</div>
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
  <img src={sixthimage} alt="Image Description" className="img-flid" />
</div>

        </div>
    </div>
  );
}

export default Centerbanner;
