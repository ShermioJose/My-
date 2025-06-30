import React, { useState, useEffect } from 'react';
import '../styles/CookieConsent.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    const declinedAt = localStorage.getItem('cookie_declined_at');

    if (!consent) {
      if (!declinedAt) {
        setVisible(true);
      } else {
        const lastDecline = new Date(parseInt(declinedAt));
        const now = new Date();
        const minutesDiff = (now - lastDecline) / (1000 * 60);
        if (minutesDiff >= 1) {
          setVisible(true);
        } else {
          setDeclined(true);
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (declined && !localStorage.getItem('cookie_consent')) {
        e.preventDefault();
        e.stopPropagation();
        setWarningVisible(true);
        setTimeout(() => setWarningVisible(false), 3000);
      }
    };

    if (declined && !localStorage.getItem('cookie_consent')) {
      document.addEventListener('click', handleClick, true);
    }

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [declined]);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.removeItem('cookie_declined_at');
    setVisible(false);
    setDeclined(false);
  };

  const handleDecline = () => {
    localStorage.removeItem('cookie_consent');
    localStorage.setItem('cookie_declined_at', Date.now().toString());
    setVisible(false);
    setDeclined(true);
  };

  return (
    <>
      {visible && (
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
          Please accept cookies to continue using the website.
        </div>
      )}
    </>
  );
};

export default CookieConsent;
