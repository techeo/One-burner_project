import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaGlobe, FaChevronDown } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/images/Mask Group.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [isOpen, setIsOpen] = useState(false);

  const togggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="footer">
      <div className="logo_lang">
      <Link to='/' className="logo">
          <img src={logo} alt="One Burner" className="logo-img"/>
        </Link>
        <div className="dropdown">
          <button className="dropdown-button" onClick={togggleDropdown}>
            <FaGlobe className='icon-world'/>
              English  
            <FaChevronDown className='icon-arrow'/>
          </button>
          {isOpen && (
          <ul className="dropdown-content">
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">French</a>
            </li>
            <li>
              <a href="#">Spanish</a>
            </li>
          </ul>
          )}
        </div>
      </div>
      <div className="footer-content">
      <div className="contact-col">
        <p className="addy">No 1 CRM solution in Africa</p>
        <div className="links-container">
          <a href="#">Terms of Use</a>
          <span className="seperator"> | </span>
          <a href="#">Privacy Policy</a>
        </div>
        <p className="get-touch">Get in touch</p>
        <p className="number">+234-80-000-0000</p>
        <div className="social-links">
          <a href="www.facebook.com" target='_blank' rel='noopener noreferral'><FaFacebook /></a>
          <a href="www.twitter.com" target='_blank' rel='noopener noreferral'><FaTwitter /></a>
          <a href="www.linkedin.com" target='_blank' rel='noopener noreferral'><FaLinkedin /></a>
          <a href="www.youtube.com" target='_blank' rel='noopener noreferral'><FaYoutube /></a>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-col">
          <p className="head">PRODUCT</p>
          <ul className="links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Trust</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Oneburner Parteners</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="head">COMPANY</p>
          <ul className="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">In the News</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="head">ONEBURNER FOR TEAMS</p>
          <ul className="links">
            <li><a href="#">Engineering</a></li>
            <li><a href="#">Financial Services</a></li>
            <li><a href="#">CRM and Sales</a></li>
            <li><a href="#">IT</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Human Relations</a></li>
            <li><a href="#">Project Management</a></li>
            <li><a href="#">Remote Work</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <p className="head">RESOURCES</p>
          <ul className="links">
            <li><a href="#">Community</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Template</a></li>
            <li><a href="#">Video Tutorials</a></li>
            <li><a href="#">Professional Services</a></li>
            <li><a href="#">Knowledge Base</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Webinar</a></li>
            <li><a href="#">Find a Partener</a></li>
          </ul>
        </div>
      </div>
      </div>
      <hr />
      <div className="copyright">
        &copy; {currentYear} Oneburner.com. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer