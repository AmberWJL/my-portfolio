import React, { useState } from "react";
import "./portfolio.css";
import Work1 from "../../assets/pf-manifold.png";
import Work2 from "../../assets/pf-airflow.png";
import Work3 from "../../assets/pf-borealis.png";
import Work4 from "../../assets/pf-smarizer.png";

const Portfolio = () => {
  const Menu = [
    {
      id: 3,
      image: Work3,
      title: "Forecast Depression Level from Text Use ML Algorithms",
      category: "Project",
      link: "https://github.com/Caroline-xu/QWQ"
    },
    ,
    {
      id: 4,
      image: Work4,
      title: "Smarize: summarizing Youtube video content",
      category: "Project",
      link: "https://github.com/AmberWJL/QhacksSmarizer",
    },
    {
      id: 1,
      image: Work1,
      title: "Manifold Hypothesis Testing for Common Datasets",
      category: "Research",
      link: "",
    },
    {
      id: 2,
      image: Work2,
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
    <section className="work container section" id="work">
      <h2 className="section__title">Portfolio</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Project")}>
          Project
        </span>
        <span className="work__item" onClick={() => filterItem("Research")}>
          Research
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              {link !== "" ? (
                <a href={link} target="_blank" rel="noreferrer" className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </a>
              ) : (
                <p className="no__button">Ongoing</p>)
              }
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
