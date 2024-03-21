import React from 'react';
import './Footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">our services</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">affiliate program</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">shipping</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">order status</a></li>
              <li><a href="#">payment options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li><a href="#">Iphone</a></li>
              <li><a href="#">Samsung</a></li>
              <li><a href="#">Redmi</a></li>
              <li><a href="#">Nokia</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaWhatsapp /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FiInstagram /></a>
            </div>
          </div>
        </div>

        <div className='copyright'>
            <span>&copy; {new Date().getFullYear()} PhoneTech. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;