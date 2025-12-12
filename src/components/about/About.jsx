import React from "react";
import "./about.css";
import ProfileImage from "../../assets/profile-photo.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const About = () => {
  return (
    <section className="about section container" id="about">
      <h2 className="section__title">About</h2>
      <div className="about__grid">
        <div className="about__image-container">
          <img src={ProfileImage} alt="profile" className="about__image" />
          <div className="about__icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://scholar.google.com/citations?user=5_w8bm4AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogleScholar />
            </a>
            <a
              href="mailto:jiale.wang@uwaterloo.ca"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="about__text">
          <h1 className="about__title">
            AI Developer & Researcher, and Lifelong Learner.
          </h1>
          <p className="about__description">
            I'm a developer with a passion for building impactful software at
            the intersection of engineering and machine learning. From crafting
            AI-powered mobile apps to publishing research in automated software
            testing, I thrive in fast-paced environments where innovation meets
            practicality. I am always looking for new challenges and
            opportunities to grow as a developer.
          </p>

          <a
            href="/Amber_W_Resume.pdf"
            download
            className="about__resume-button"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
