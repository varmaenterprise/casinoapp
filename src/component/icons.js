import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp ,faTwitter} from '@fortawesome/free-brands-svg-icons'


function Icons() {
  return (
   <div className='row'>
    
    <div className='col-md-1'>
    <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{color: "red",}} /></div>
    
    <div className='col-md-1'>
    <FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "red",}} />
    </div>
       </div>
  );
}

export default Icons;
