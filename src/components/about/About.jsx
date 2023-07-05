import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";

import { FaAward } from "react-icons/fa";
import { GiTargetPrize } from "react-icons/gi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4th year student</small>
            </article>
            <article className="about__card">
              <GiTargetPrize className="about__icon" />
              <h5>GPA</h5>
              <small>3.35/4.0</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            With a deep passion for technology, I am gradually turning my dreams
            into reality while being a student. Currently, I am a 4th-year
            student at Danang University of Science and Technology. With the
            knowledge foundation I have acquired in school regarding programming
            languages, I have a basic understanding of front-end languages such
            as HTML-CSS, JavaScript, and some others. I have also self-studied
            and gained a basic knowledge of ReactJS. I believe in my ability to
            make a small contribution to your company.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
