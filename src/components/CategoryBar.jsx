import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/CategoryBar.css';
import AuthPopup from '../pages/AuthPopup';
import Account from '../pages/Account';

const CategoryBar = ({ searchTerm, setSearchTerm, userName, setUserName }) => {
  const [showAuth, setShowAuth] = useState(false);
  const [showAccount, setShowAccount] = useState(false);


  const handleLogout = () => {
    setUserName(null);
    setShowAccount(false);
  };

  return (
    <>
      <div className="category-bar">
        <div className="category-center">
          <ul className="category-menu">
            <li><Link to="/men" className='category-link'>MENS</Link></li>
            <li><Link to="/women" className='category-link'>WOMENS</Link></li>
            <li><Link to="/kids" className='category-link'>KIDS</Link></li>
            <li><Link to="/new" className='category-link'>NEW COLLECTIONS</Link></li>
          </ul>
        </div>

        <div className="category-right">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍</button>

          {userName ? (
            <div
              className="account-info"
              onClick={() => setShowAccount(true)}
              style={{ cursor: 'pointer' }}
            >
              <span className="account-icon">👤</span>
              <span className="account-icon">{userName}</span>
            </div>
          ) : (
            <button className="login-button" onClick={() => setShowAuth(true)}>
              LOGIN/SIGNUP
            </button>
          )}
        </div>
      </div>

      {showAuth && (
        <AuthPopup
          onClose={() => setShowAuth(false)}
          setUserName={setUserName}
        />
      )}

      {showAccount && (
        <Account
          onClose={() => setShowAccount(false)}
          userName={userName}
          onLogout={handleLogout}
        />
      )}
    </>
  );
};

export default CategoryBar;
