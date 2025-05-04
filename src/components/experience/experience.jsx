import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ExperienceCard from "./experienceCard";
import rbcLogo from "../../assets/exp/rbc.png";
import uwaterlooLogo from "../../assets/exp/uwaterloo.png";
import ericssonLogo from "../../assets/exp/ericsson.png";
import queensLogo from "../../assets/exp/queens.png";
import xiaomiLogo from "../../assets/exp/xiaomi.png";
import "./experience.css";

const experiences = [
  {
    company: "Royal Bank of Canada",
    title: "Machine Learning Developer",
    date: "May 2025 - Current",
    logo: rbcLogo,
    description:
      "Contributed to the development of Generative AI tools by building prototypes and evaluating language models. Worked closely with teams to support internal use cases through research and hands-on implementation of machine learning workflows.",
  },
  {
    company: "University of Waterloo",
    title: "Research Assistant",
    date: "Jan 2024 - Current",
    logo: uwaterlooLogo,
    description:
      "Collaborated on research exploring the use of language models for software testing. Created tools to analyze code changes and support test maintenance, while applying iterative strategies to refine automated outputs.",
  },
  {
    company: "Ericsson Canada Inc.",
    title: "Automation Engineer",
    date: "Sept 2022 - Dec 2023",
    logo: ericssonLogo,
    description:
      "Developed internal automation tools to streamline workflows and reduce manual effort. Maintained systems that improved operational efficiency, including a web-based interface for tracking and visualizing process data.",
  },
  {
    company: "Queen’s University",
    title: "Teaching Assistant",
    date: "Sept 2021 - Aug 2023",
    logo: queensLogo,
    description:
      "Assisted in teaching computer science courses by reviewing code, providing feedback, and helping students understand core concepts. Supported both classroom learning and individual problem-solving.",
  },
  {
    company: "Xiaomi Technology Co.",
    title: "Advertising Data Analyst",
    date: "May 2021 – Aug 2021",
    logo: xiaomiLogo,
    description:
      "Supported global marketing efforts by analyzing campaign data and identifying performance patterns. Worked with teams to develop strategies that improved user engagement and client satisfaction.",
  },
];

const Experience = () => {
  return (
    <section className="works-main-container container section" id="works">
      <h2 className="section__title">Experience</h2>
      <div className="works-container">
        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
