import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          {/* <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and ios mobile phone</p>
            <div className="app-logo">
              <img src="images/play-store.png" alt=""/>
              <img src="images/app-store" alt=""/>
            </div>
          </div> */}
          <div className="footer-col-2">
            <h1>JOHN STORE</h1>
            {/* <img src="images/john-white.png" alt=""/> */}
            <p>Positive thinking is the key to success!</p>
          </div>
          <div className="footer-col-3">
            <h3>Usefull links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2021 - JOHN STORE</p>
      </div>
    </div>
  );
}

export default Footer;