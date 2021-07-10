import React from 'react';
import './styles.css';

function Footer () {

const currentYear = new Date().getFullYear();

    return <footer className="footer footer-dark bg-dark">
    <div>
      <i className="fab fa-twitter footer-icons"></i>
      <i className="fab fa-facebook-f footer-icons"></i>
      <i className="fab fa-instagram footer-icons"></i>
      <i className="fas fab fa-envelope footer-icons"></i>

      <p className="footer-text">© Copyright {currentYear} Anne Jokinen</p>
    </div>
  </footer>
}

export default Footer;