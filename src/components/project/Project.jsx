import React from "react";
import "./project.css";

const Project = () => {
  const Menu = [
    {
      image: require("../../assets/proj/speakease.png"),
      title: "AI Language Learning App",
      description:
        "Developed an AI-based language learning mobile application that aims to enhance pronunciation correctness and conversional skills.",
      tags: ["TypeScript", "React Native", "Node"],
      link: "https://www.youtube.com/watch?v=kTqgac8nIwQ",
    },
    {
      image: require("../../assets/proj/pf-casuallycool.jpg"),
      title: "Dance Club Web App",
      description:
        "Built a responsive web app for Queen's University Dance Club to manage members, events, and content.",
      tags: ["JavaScript", "React", "Docker"],
      link: "https://github.com/Nina0917/casuallycool_web",
    },
    {
      image: require("../../assets/proj/pf-wechat.png"),
      title: "Wechat Mini-Program",
      description:
        "Developed a mini-program to connect students with shared interests using location-based services and messaging.",
      tags: ["JavaScript", "CSS", "MongoDB"],
      link: "https://github.com/Amber201604/aranyaka2",
    },
    {
      image: require("../../assets/proj/pf-borealis.png"),
      title: "Mental Health Prediction",
      description:
        "Used NLP and machine learning to predict depression levels based on user-generated text.",
      tags: ["Python", "Scikit-learn", "NLP"],
      link: "https://github.com/Caroline-xu/QWQ",
    },
    {
      image: require("../../assets/proj/pf-cs332.jpg"),
      title: "Vaccination Management System",
      description:
        "A web-based system to manage COVID-19 vaccination records, user roles, and appointment bookings.",
      tags: ["PHP", "MySQL"],
      link: "https://github.com/AmberWJL/CISC332FinalProject",
    },
    {
      image: require("../../assets/proj/pf-smarizer.png"),
      title: "Smarize: YouTube Summarizer",
      description:
        "Built a tool to extract and summarize the main points from YouTube videos using speech-to-text and GPT.",
      tags: ["Python", "AssemblyAI", "Streamlit"],
      link: "https://github.com/AmberWJL/QhacksSmarizer",
    },
    {
      image: require("../../assets/proj/pf-manifold.png"),
      title: "Manifold Hypothesis Testing",
      description:
        "Explored and tested the manifold hypothesis using real-world datasets. Focused on intrinsic dimensionality.",
      tags: ["Python", "Research"],
      link: "",
    },
  ];

  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Projects</h2>
      <div className="new__project__grid">
        {Menu.map(({ image, title, description, tags, link }, index) => (
          <div className="new__project__card" key={index}>
            <img src={image} alt={title} className="new__project__image" />
            <div className="new__project__content">
              <h3 className="new__project__title">{title}</h3>
              <p className="new__project__description">{description}</p>
              <div className="new__project__tags">
                {tags.map((tag, i) => (
                  <span key={i} className="new__project__tag">
                    {tag}
                  </span>
                ))}
              </div>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="new__project__link"
                >
                  <i className="icon-link"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
