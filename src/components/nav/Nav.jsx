import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-scroll";
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;
      let activeSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - sectionHeight * 0.5 &&
          scrollPosition < sectionTop + sectionHeight * 0.5
        ) {
          activeSection = `#${section.id}`;
        }
      });

      setActiveNav(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        to="portfolio"
        smooth={true}
        spy={true}
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
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
