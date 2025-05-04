import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PubCard = (props) => {
  return (
    <div className="publication">
      <div className="publication-venue">{props.venue}</div>

      <div className="publication-right">
        <div className="publication-title">{props.title}</div>
        <div className="publication-authors">{props.authors}</div>
        <div className="publication-venue-full">{props.venueFull}</div>
        <div className="publication-link">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Read publication{" "}
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronRight}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PubCard;
