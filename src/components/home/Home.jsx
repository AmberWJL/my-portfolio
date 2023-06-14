import React from "react";
import "./home.css";
import Me from "../../assets/avatar.png";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Amber Wang</h1>
        <p className="home_welcome">
        Hello <span class="wave">👋</span>, welcome to my
        site. I am a developer. I love to work on Web dev, Machine Learning & AI projects.
      </p>

        {/* <HeaderSocials /> */}

        
        <div className="scroll__down">
          <a href="#about" className="mouse__wrapper">
            <span className="home__scroll-name">Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </div>
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
