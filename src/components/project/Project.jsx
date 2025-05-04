import React, { useState } from "react";
import "./project.css";
import Manifold from "../../assets/pf-manifold.png";
import Airflow from "../../assets/pf-airflow.png";
import Borealis from "../../assets/pf-borealis.png";
import Smarize from "../../assets/pf-smarizer.png";
import WechatMini from "../../assets/pf-wechat.png";
import cs332 from "../../assets/pf-cs332.jpg";
import CasuallyCool from "../../assets/pf-casuallycool.jpg";
const Project = () => {
  const Menu = [
    {
      image: CasuallyCool,
      title: "Web App for a Dance Club in Queen's University",
      category: "Project",
      link: "https://github.com/Nina0917/casuallycool_web",
    },
    {
      image: WechatMini,
      title: "Wechat Mini-Program that Connects Students",
      category: "Project",
      link: "https://github.com/Amber201604/aranyaka2",
    },
    {
      image: Borealis,
      title: "Forecast Depression Level from Text Using ML Algorithms",
      category: "Project",
      link: "https://github.com/Caroline-xu/QWQ",
    },
    {
      image: cs332,
      title: "Covid Vaccination Management Web App",
      category: "Project",
      link: "https://github.com/AmberWJL/CISC332FinalProject",
    },
    {
      image: Smarize,
      title: "Smarize: Summarizing Youtube Video Content",
      category: "Project",
      link: "https://github.com/AmberWJL/QhacksSmarizer",
    },

    {
      image: Manifold,
      title: "Manifold Hypothesis Testing for Common Datasets",
      category: "Research",
      link: "",
    },
    {
      image: Airflow,
      title: "Challenges Developers Encounter when Using Apache Airflow",
      category: "Research",
      link: "",
    },
  ];

  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Projects</h2>
      {/* <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Project")}>
          Project
        </span>
        <span className="work__item" onClick={() => filterItem("Research")}>
          Research
        </span>
      </div> */}

      <div className="work__container grid">
        {items.map((elem) => {
          const { image, title, category, link } = elem;
          return (
            <div className="work__card">
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              {link !== "" ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="work__button"
                >
                  <i className="icon-link work__button-icon"></i>
                </a>
              ) : (
                <p className="no__button">Ongoing</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
