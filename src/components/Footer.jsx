import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaDribbble, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">Masskar</h2>
        <div className="footer-socials">
          <span>CONNECT WITH US</span>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaGooglePlusG />
            <FaInstagram />
            <FaDribbble />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h4>CATEGORY</h4>
          <ul>
            <li>Men</li><br/>
            <li>Women</li><br/>
            <li>Kids</li><br/>
          </ul>
        </div>
        <div className="footer-column">
          <h4>POLICY INFO</h4>
          <ul>
            <li>FAQ</li><br/>
            <li>Cancellation</li><br/>
            <li>Returns & Refund</li><br/>
            <li>Payments & Privacy</li><br/>
          </ul>
        </div>
        <div className="footer-column">
          <h4>MASSKAR</h4>
          <ul>
            <li>About Us</li><br/>
            <li>Feedback</li><br/>
            <li>Delivery Locations</li><br/>
          </ul>
        </div>
        <div className="footer-column">
          <h4>CONTACT</h4>
          <ul>
            <li><FaPhone /> 50343443</li><br/>
            <li><FaEnvelope /> info@masskaronline.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
