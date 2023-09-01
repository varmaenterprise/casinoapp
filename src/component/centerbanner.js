import React from 'react';
import './centerbanner.css';


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
            <div className='col-md-6'>Image</div>
        </div>
    </div>
  );
}

export default Centerbanner;
