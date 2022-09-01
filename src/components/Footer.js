import React from 'react';
import Nimplay from '../images/nimplayFooter.png';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/nimplay" className="footer">
        <img src={Nimplay} alt="nimplay" className="footer-img" />
        <div>
          <p className="footer-text">By Nimrod Acosta</p>
          <p className="footer-text">&copy; 2022 Nimplay</p>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
