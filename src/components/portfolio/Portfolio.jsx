import React, { useState } from "react";
import "./portfolio.css";
import Manifold from "../../assets/pf-manifold.png";
import Airflow from "../../assets/pf-airflow.png";
import Borealis from "../../assets/pf-borealis.png";
import Smarize from "../../assets/pf-smarizer.png";
import WechatMini from "../../assets/pf-wechat.png";

const Portfolio = () => {
  const Menu = [
    {
      id: 3,
      image: WechatMini,
      title: "Wechat Mini-program that Connects Students",
      category: "Project",
      link: "https://github.com/Amber201604/aranyaka2"
    },
    {
      id: 3,
      image: Borealis,
      title: "Forecast Depression Level from Text Use ML Algorithms",
      category: "Project",
      link: "https://github.com/Caroline-xu/QWQ"
    },
    {
      id: 4,
      image: Smarize,
      title: "Smarize: Summarizing Youtube Video Content",
      category: "Project",
      link: "https://github.com/AmberWJL/QhacksSmarizer",
    },
    {
      id: 1,
      image: Manifold,
      title: "Manifold Hypothesis Testing for Common Datasets",
      category: "Research",
      link: "",
    },
    {
      id: 2,
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
