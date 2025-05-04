import React, { useState } from "react";
import "./about.css";
import Photo from "../../assets/profile-photo.png";

const About = () => {
  const Skills = [
    {
      id: 1,
      category: "Full Stack Development",
      percentage: "90%",
      color: "Full_Stack",
      skills:
        "Python, Java, JavaScript, HTML/CSS, C/C++, PHP, MySQL, Express.js, Microsoft Azure, React, Linux, MongoDB",
    },
    {
      id: 2,
      category: "Machine Learning & AI",
      percentage: "90%",
      color: "ML",
      skills:
        "Scikit-learn, TensorFlow, PyTorch, Matplotlib, Machine Learning Algorithms, Mathematics and Statistics",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Photo} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm Amber Wang, a Computer Science student graduating in 2024. I
              have experience in full stack web development, machine learning,
              and AI. I'm a quick learner and thrive in team environments. Feel
              free to explore my protfolio and download my resume!
            </p>
            <a href="/Amber_Wang_Resume.pdf" download={true} className="btn">
              Resume
            </a>
          </div>
          <div className="about__skills grid">
            {Skills.map(({ id, category, percentage, color, skills }) => (
              <div className="skill_container">
                <div
                  className="skills__data"
                  key={id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="skills__titles">
                    <h3 className="skills__name">{category}</h3>
                    <span className="skills__number">{percentage}</span>
                  </div>
                  <div className="skills__bar">
                    <span className={`skills__percentage ${color}`}></span>
                  </div>
                </div>
                {/* {isHovered && <div className="hover_to_show">tech skills</div>} */}
                {isHovered && (
                  <div className="hover_to_show">
                    <div class="skills-grid">
                      {skills.split(", ").map((skill, index) => (
                        <div className={`skill-item ${color}-bg`} key={index}>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
