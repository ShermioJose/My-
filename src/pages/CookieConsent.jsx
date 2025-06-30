// src/components/CookieConsent.jsx
import React, { useState, useEffect } from 'react';
import '../styles/CookieConsent.css';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

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
        }
      }
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    localStorage.removeItem('cookie_declined_at');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.removeItem('cookie_consent');
    localStorage.setItem('cookie_declined_at', Date.now().toString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent-banner">
      <p>This website uses cookies to enhance your experience. Do you accept?</p>
      <div className="cookie-buttons">
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
