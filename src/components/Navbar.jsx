import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import phoneIcon from '../assets/phone_icon.png';
import mailIcon from '../assets/mail_icon.png';
import googlePlay from '../assets/google_play.png';
import appStore from '../assets/app_store.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />

        <ul className="navbar-menu">
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/about" className="nav-link">ABOUT</Link></li>
          <li><Link to="/location" className="nav-link">DELIVERY LOCATION</Link></li>
        </ul>

        <div className="contact-info">
          <div className="contact-phone">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <span>+91 1234567</span>
          </div>
          <div className="contact-item">
            <img src={mailIcon} alt="Mail" className="contact-icon" />
            <span>masskarshoes@gmail.com</span>
          </div>
        </div>

        <div className="store-buttons">
          <a 
            href="https://play.google.com/store/apps/details?id=com.example.masskarshoes" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={googlePlay} alt="Google Play Store" className="store-img google-play" />
          </a>
          <a 
            href="https://apps.apple.com/app/id1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src={appStore} alt="Apple App Store" className="store-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
