// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // Construct the WhatsApp URL with the provided phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button onClick={handleWhatsAppClick}>
      <img src="whatsapp-icon.png" alt="WhatsApp" />
    </button>
  );
};

export default WhatsAppButton;
