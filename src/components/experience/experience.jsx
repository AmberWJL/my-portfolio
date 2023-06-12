
import React from "react";
import "./experience.css";
import Card from "./Card";

const Experience = () => {
  const Data = [
    {
      id: 1,
      year: "Sept 2019 - Present",
      title: "Undergraduate Student",
      company: "- Queen’s University",
      desc: "Specialized major in Computing, Mathematics and Analytics.",
      position: "left",
      icon: "https://i.ibb.co/X72MdTW/graduation-cap-outline.png",
      color: "rgba(179, 228, 247, 1)"
    },
    {
      id: 2,
      year: "May 2023 - Present",
      title: "Tech Analyst",
      company: "- inQUbate",
      desc: "Utilized AI, ML, and DL skills to construct minimum viable products aligned with UN SDGs.",
      position: "right",
      icon: "https://i.ibb.co/6BNkcDk/briefcase.png",
      color: "rgba(189, 235, 198, 1)",
    },
    {
      id: 2,
      year: "Sept 2022 - Present",
      title: "Automation Scripting Developer",
      company: "- Ericsson Canada Inc.",
      desc: "Developed, deployed and maintained automated workflows/tools/web page, reduced manual processes.",
      position: "left",
      icon: "https://i.ibb.co/6BNkcDk/briefcase.png",
      color: "rgba(189, 235, 198, 1)",
    },

    {
      id: 3,
      year: "Sept 2021 - Present",
      title: "Teaching Assistant",
      company: "- Queen’s University",
      desc: "Instructed students and assessed assignments for courses including Discrete Mathematics, Data Structure and Java.",
      position: "right",
      icon: "https://i.ibb.co/6BNkcDk/briefcase.png",
      color: "rgba(189, 235, 198, 1)",
    },
    {
      id: 4,
      year: "May 2021 - Aug 2021",
      title: "Advertising Data Analyst",
      company: "- Xiaomi Inc.",
      desc: "Created and managed advertising campaigns on Xiaomi Devices. Analyzed and optimized promotion data.",
      position: "left",
      icon: "https://i.ibb.co/6BNkcDk/briefcase.png",
      color: "rgba(189, 235, 198, 1)"
    },
  ]
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {Data.map((val, id) => {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  color={val.color}
                  title={val.title}
                  company={val.company}
                  year={val.year}
                  desc={val.desc}
                  position={val.position}
                />
              );
          })}
        </div>
    </section>
  );
};

export default Experience;
