import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // WhatsApp هنا من Brands
import { faComment, faXmark } from '@fortawesome/free-solid-svg-icons'; // الباقي من Solid
import './whatsapp.css';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    window.open(`https://wa.me/201012696180`, '_blank');
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-container">
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="popup-header">
            <h3>تواصل معنا على واتساب</h3>
            <button className="close-btn" onClick={togglePopup}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="popup-content">
            <div className="contact-info">
              <p>رقم الواتساب:</p>
              <p className="phone-number">01012696180+</p>
            </div>
            <p>متاح للرد من الساعة 9 صباحاً حتى 10 مساءً</p>
          </div>
          <button className="whatsapp-action-btn" onClick={openChat}>
            <FontAwesomeIcon icon={faWhatsapp} />
            بدء المحادثة
          </button>
        </div>
      )}

      <div className={`whatsapp-btn ${isOpen ? 'open' : ''}`} onClick={togglePopup}>
        <div className="whatsapp-icon">
          <FontAwesomeIcon icon={isOpen ? faXmark : faWhatsapp} />
        </div>
        <div className="pulse-ring"></div>
        <div className="pulse-ring delay"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;