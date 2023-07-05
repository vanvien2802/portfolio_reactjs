import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");
  return (
    <nav>
      <Link
        to="header"
        smooth={true}
        spy={true}
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="about"
        smooth={true}
        spy={true}
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="experience"
        smooth={true}
        spy={true}
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </Link>
      <Link
        to="services"
        smooth={true}
        spy={true}
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      <Link
        to="contact"
        smooth={true}
        spy={true}
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
