import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="footer" >
      <div className="footer-content">
        <p> 2024 WheelsOnRent </p>
        <p> wheels.on.rent@gmail.com </p>
        <p> +381 64 565 4321 </p>
        <div className="social-links">
          <p> Contact us on: </p>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;