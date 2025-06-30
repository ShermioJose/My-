import React, { useState, useEffect } from 'react';
import '../styles/CookieConsent.css';

const CookieConsent = () => {
  const [consent, setConsent] = useState(localStorage.getItem('cookie_consent'));
  const [warningVisible, setWarningVisible] = useState(false);

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
    setWarningVisible(true);
    setTimeout(() => setWarningVisible(false), 4000); // Show warning for 4 seconds
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

      {warningVisible && (
        <div className="cookie-warning-popup">
          You must accept cookies to use all features.
        </div>
      )}
    </>
  );
};

export default CookieConsent;
