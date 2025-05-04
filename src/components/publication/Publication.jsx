import React from "react";
import "./publication.css";
import Card from "./publicationCard";
// import { motion, useInView, useAnimation } from "framer-motion"

const Publication = () => {
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
      className="publications-main-container container section"
      id="publication"
    >
      <h2 className="section__title">Publication</h2>
      <div className="publications-container">
        <div className="publications-wrapper">
          {Data.map((val, id) => {
            return (
              <Card
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
      </div>
    </section>
  );
};

export default Publication;
