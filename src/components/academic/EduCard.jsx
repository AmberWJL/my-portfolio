import React from "react";
import "./academic.css";

const EduCard = ({ logo, degree, school, dateRange, desc }) => {
  return (
    <div className="edu-entry">
      <img src={logo} alt={school} className="edu-entry-logo" />
      <div className="edu-entry-info">
        <div className="edu-entry-title">{degree}</div>
        <div className="edu-entry-top-row">
          <div className="edu-entry-sub">{school}</div>
          <div className="edu-entry-date">{dateRange}</div>
        </div>
        <div className="edu-entry-desc">{desc}</div>
      </div>
    </div>
  );
};

export default EduCard;
