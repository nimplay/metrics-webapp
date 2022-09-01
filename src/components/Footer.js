import React from 'react';
import Nimplay from '../images/nimplayFooter.png';

function Footer() {
  return (
    <footer>
      <img src={Nimplay} alt="" className="footer-img" />
      <div>
        <p className="footer-text">By Nimrod Acosta</p>
        <p className="footer-text">&copy; 2022 Nimplay</p>
      </div>
    </footer>
  );
}

export default Footer;
