import React from "react";

const ExperienceCard = ({ logo, company, title, date, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-left">
        <img src={logo} alt={company} className="timeline-logo" />
      </div>
      <div className="timeline-center">
        <div className="timeline-marker" />
      </div>
      <div className="timeline-right">
        <div className="timeline-card">
          <div className="timeline-header">
            <h3 className="timeline-title">{title}</h3>
            <div className="timeline-date">{date}</div>
          </div>
          <div className="timeline-company">{company}</div>
          <div className="timeline-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
