import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: IMG1,
      description : 'ReactJs',
      title: "Portfolio",
      github: "https://github.com/vanvien2802/portfolio_reactjs",
      demo: "",
    },
    {
      id: 2,
      image: IMG2,
      description : 'Reactjs + Tailwind',
      title: "ZingMp3",
      github: "https://github.com/vanvien2802/zingmp3",
      demo: "https://zingmp3-6zi7y9qbh-viennguyen280202.vercel.app/",
    },
    {
      id: 3,
      image: IMG3,
      description : 'Reactjs + Redux (Toolkit)',
      title: "Todo App",
      github: "https://github.com/vanvien2802/TodoApp-ReactJs",
      demo: "https://todo-app-react-js-beryl.vercel.app",
    },
    {
      id: 4,
      image: IMG4,
      description : 'Java (Socket + TCP)',
      title: "Remote Desktop",
      github: "https://github.com/vanvien2802/Remote_Desktop",
      demo: "",
    },
    {
      id: 5,
      image: IMG5,
      description : 'Java (Jsp - Servlet)',
      title: "Electronic Store",
      github: "https://github.com/vanvien2802/electronicsStore",
      demo: "",
    },
    {
      id: 6,
      image: IMG6,
      description : 'Java (Android)',
      title: "Restaurant App",
      github: "https://github.com/vanvien2802/RestaurantManager",
      demo: "https://www.youtube.com/watch?v=rN1fCQsYwvs",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map(({ id, image, description, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <h3>{title}</h3>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
