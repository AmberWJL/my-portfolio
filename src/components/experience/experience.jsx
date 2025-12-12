import React from "react";
import ExperienceCard from "./experienceCard";
import rbcLogo from "../../assets/exp/rbc.png";
import uwaterlooLogo from "../../assets/exp/uwaterloo.png";
import ericssonLogo from "../../assets/exp/ericsson.png";
import queensLogo from "../../assets/exp/queens.png";
import xiaomiLogo from "../../assets/exp/xiaomi.png";
import cgiLogo from "../../assets/exp/cgi.jpg";
import "./experience.css";

const experiences = [
  {
    company: "CGI",
    title: "AI Software Engineer",
    date: "Sept 2025 - Dec 2025",
    logo: cgiLogo,
    description:
      "Developed an AI-driven code analysis platform with code embedding, code indexing, AST-Parsing, and built RAG pipeline, utilized LLMs for code understanding, architecture diagram generation, enabling BAs to drill into multiple layers of the codebase with business-friendly explanations.",
  },
  {
    company: "Royal Bank of Canada",
    title: "Machine Learning Developer",
    date: "May 2025 - Sept 2025",
    logo: rbcLogo,
    description:
      "Performed in-depth technical assessments of LLM-based developer tools including Cursor, Devin, and Windsurf, analyzing their performance in code understanding, test generation, and automation capabilities; Curated RBC representative coding tasks from internal repositories and benchmark agentic coding tools.",
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
