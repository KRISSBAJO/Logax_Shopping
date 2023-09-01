import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/mylogo.jpg'; 
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Flowbite Logo" />
          </Link>
          <span>LogaXP</span>
        </div>
        <ul className="footer-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/licensing">Licensing</Link></li>
          <li><Link to="/contact">Contact</Link></li> {/* Add your Contact route here */}
        </ul>
      </div>
      <hr className="footer-divider" />
      <span className="footer-copy">&copy; 2023 <a href="https://google.com/">LogaXp&trade;</a>. All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;

