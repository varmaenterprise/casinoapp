import React from 'react';
import './buttonrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faShare ,faFilePen, faWallet, faTrophy} from '@fortawesome/free-solid-svg-icons'


function Buttonrow() {
  return (
   <div className='row' id="buttonrow">
    <div className='col-md-2'>
    <button type="button"  id="button"><FontAwesomeIcon icon={faFilePen} size="lg" style={{color: "#ffffff",padding:"2px",}} />Register</button>
    </div>
    <div className='col-md-1'>
    <FontAwesomeIcon icon={faShare} size="xl" style={{color: "#ffffff",}} /></div>
    <div className='col-md-2'>
    <button type="button"  id="button"><FontAwesomeIcon icon={faCircleCheck} size="lg" style={{color: "#ffffff",padding:"2px",}} />Verify</button>

    </div>
    <div className='col-md-1'>
    <FontAwesomeIcon icon={faShare} size="xl" style={{color: "#ffffff",}} />
    </div>
    <div className='col-md-2'>
    <button type="button"  id="button"><FontAwesomeIcon icon={faWallet} size="lg" style={{color: "#ffffff",padding:"2px",}} />Deposit</button>

    </div>
    <div className='col-md-1'>
    <FontAwesomeIcon icon={faShare} size="xl" style={{color: "#ffffff",}} />
    </div>
    <div className='col-md-2'>
    <button type="button"  id="button"><FontAwesomeIcon icon={faTrophy} size="lg" style={{color: "#ffffff",padding:"2px",}} />Win</button>

    </div>

   </div>
  );
}

export default Buttonrow;
