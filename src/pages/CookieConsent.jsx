import React, { useState, useEffect } from 'react';
import '../styles/CookieConsent.css';

const CookieConsent = () => {
  const [consent, setConsent] = useState(localStorage.getItem('cookie_consent'));

  useEffect(() => {
    if (!consent) {
      setConsent(null); // Show popup
    }
  }, [consent]);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setConsent('accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setConsent('declined');
  };

  return (
    <>
      {consent === null && (
        <div className="cookie-consent-banner">
          <p>This website uses cookies to enhance your experience. Do you accept?</p>
          <div className="cookie-buttons">
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
          </div>
        </div>
      )}

      {consent === 'declined' && (
        <div className="cookie-block-overlay">
          <div className="cookie-block-message">
            <h2>Access Denied</h2>
            <p>You must accept cookies to use this site.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
