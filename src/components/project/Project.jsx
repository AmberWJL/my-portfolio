import React from "react";
import "./project.css";

const Project = () => {
  const Menu = [
    {
      image: require("../../assets/pf-casuallycool.jpg"),
      title: "Dance Club Web App",
      description:
        "Built a responsive web app for Queen's University Dance Club to manage members, events, and content.",
      tags: ["React", "Firebase", "TailwindCSS"],
      link: "https://github.com/Nina0917/casuallycool_web",
    },
    {
      image: require("../../assets/pf-wechat.png"),
      title: "Wechat Mini-Program",
      description:
        "Developed a mini-program to connect students with shared interests using location-based services and messaging.",
      tags: ["Mini Program", "Node.js", "MongoDB"],
      link: "https://github.com/Amber201604/aranyaka2",
    },
    {
      image: require("../../assets/pf-borealis.png"),
      title: "Mental Health Prediction",
      description:
        "Used NLP and machine learning to predict depression levels based on user-generated text.",
      tags: ["Python", "Scikit-learn", "NLP"],
      link: "https://github.com/Caroline-xu/QWQ",
    },
    {
      image: require("../../assets/pf-cs332.jpg"),
      title: "Vaccination Management System",
      description:
        "A web-based system to manage COVID-19 vaccination records, user roles, and appointment bookings.",
      tags: ["Java", "JSP", "MySQL"],
      link: "https://github.com/AmberWJL/CISC332FinalProject",
    },
    {
      image: require("../../assets/pf-smarizer.png"),
      title: "Smarize: YouTube Summarizer",
      description:
        "Built a tool to extract and summarize the main points from YouTube videos using speech-to-text and GPT.",
      tags: ["React", "OpenAI", "AssemblyAI"],
      link: "https://github.com/AmberWJL/QhacksSmarizer",
    },
    {
      image: require("../../assets/pf-manifold.png"),
      title: "Manifold Hypothesis Testing",
      description:
        "Explored and tested the manifold hypothesis using real-world datasets. Focused on intrinsic dimensionality.",
      tags: ["Python", "NumPy", "Research", "Research", "Research"],
      link: "",
    },
    // {
    //   image: require("../../assets/pf-airflow.png"),
    //   title: "Usability of Apache Airflow",
    //   description:
    //     "Investigated the challenges faced by developers when integrating Apache Airflow into data pipelines.",
    //   tags: ["Research", "Airflow", "Data Engineering"],
    //   link: "",
    // },
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
