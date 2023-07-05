import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Link to="header" smooth={true} className="footer__logo">
        EGATOR
      </Link>

      <ul className="permalinks">
        <li>
          <Link to="header" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
