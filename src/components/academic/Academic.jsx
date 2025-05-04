import React from "react";
import "./academic.css";
import PubCard from "./PubCard";
import EduCard from "./EduCard";
import waterlooLogo from "../../assets/edu/uwaterloo.png";
import queensLogo from "../../assets/edu/queens.png";
import { FaGraduationCap } from "react-icons/fa"; // optional
// import { motion, useInView, useAnimation } from "framer-motion"

const Publication = () => {
  const EduData = [
    {
      degree: "M.Math in Computer Science",
      school: "University of Waterloo",
      location: "Waterloo, Ontario",
      dateRange: "2024 – 2026",
      desc: "Research in ML for software engineering, testing automation, and NLP-based code analysis.",
      logo: waterlooLogo,
    },
    {
      degree: "B.Comp in Computing, Mathematics, and Analytics",
      school: "Queen’s University",
      location: "Kingston, Ontario",
      dateRange: "2019 – 2024",
      desc: "Studied algorithms, software architecture, databases, and statistics.",
      logo: queensLogo,
    },
  ];

  const Data = [
    {
      title:
        "Efficient Incremental Code Coverage Analysis for Regression Test Suites",
      authors: (
        <>
          <b>Jiale Amber Wang</b>, Kaiyuan Wang, Pengyu Nie
        </>
      ),
      venue: "ASE 2024",
      venueFull:
        "Proceedings of the 46th IEEE/ACM International Conference on Software Engineering",
      link: "https://doi.org/10.1145/3691620.3695551",
    },
    {
      title:
        "An Empirical Study of Developers’ Challenges in Implementing Workflows as Code",
      authors: (
        <>
          Jerin Yasmin, <b>Jiale Amber Wang</b>, Yuan Tian, Bram Adams
        </>
      ),
      venue: "JSS 2024",
      venueFull: "Journal of Systems and Software, 219, 112248.",
      link: "https://doi.org/10.1016/j.jss.2024.112248",
    },
  ];

  return (
    <section
      className="academic-main-container container section"
      id="publication"
    >
      <h2 className="section__title">Publication</h2>
      <div className="academic-container">
        <div className="publications-wrapper">
          {Data.map((val, id) => {
            return (
              <PubCard
                key={id}
                title={val.title}
                authors={val.authors}
                venue={val.venue}
                venueFull={val.venueFull}
                link={val.link}
              />
            );
          })}
        </div>
        <div className="edu-wrapper">
          <div className="edu-section">
            <div className="edu-header">
              <FaGraduationCap className="edu-icon" />
              <span className="edu-title">Education</span>
            </div>
            <div className="edu-list">
              {EduData.map((item, idx) => (
                <EduCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;
