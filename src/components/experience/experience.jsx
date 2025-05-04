import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import ExperienceCard from "./experienceCard";
import "./experience.css";

const experiences = [
  {
    company: "Royal Bank of Canada",
    title: "Machine Learning Developer",
    date: "May 2025 - Current",
    logo: "./rbc.png",
    description:
      "Built and iterated on Generative AI prototypes using Python, JavaScript, and vector databases. Researched and tested LLM tools to recommend solutions for internal use cases. Contributed to Agile sprints by coding, testing, and deploying ML workflows and features.",
  },
  {
    company: "University of Waterloo",
    title: "Research Assistant",
    date: "Jan 2024 - Current",
    logo: "./uwaterloo.png",
    description:
      "Co-authored a paper on maintaining test cases using LLMs in Java. Developed Python scripts for mining and preprocessing code-test updates from GitHub. Implemented fine-tuning and multi-round refinement techniques to automate test case updates.",
  },
  {
    company: "Ericsson Canada Inc.",
    title: "Automation Engineer",
    date: "Sept 2022 - Dec 2023",
    logo: "./ericsson.png",
    description:
      "Built 10+ automated workflows with Power Automate, Azure, and Python, reducing manual tasks by 90%. Developed an internal email server for license requests serving 400+ users. Created a web app with React.js to visualize problem-solving chains.",
  },
  {
    company: "Queen’s University",
    title: "Teaching Assistant",
    date: "Sept 2021 - Aug 2023",
    logo: "./queens.png",
    description:
      "Taught 200+ students across Data Structures, CS II, and Discrete Math. Reviewed Python and Java assignments, resolving 200+ bugs. Provided detailed feedback and supported student understanding via forums and email.",
  },
  {
    company: "Xiaomi Technology Co.",
    title: "Advertising Data Analyst",
    date: "May 2021 – Aug 2021",
    logo: "./xiaomi.png",
    description:
      "Managed international ad campaigns and produced performance reports. Used SQL for promotional data analysis, achieving 2–3× higher conversions. Provided promotional advice with 100% client satisfaction.",
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
