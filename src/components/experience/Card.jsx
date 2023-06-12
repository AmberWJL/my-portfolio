import React from "react";

const Card = (props) => {
  return (
    <div 
    className={`timeline__container ${props.position}`} 
    style={{ "--icon-image": `url(${props.icon})`, "--icon-color": `${props.color}` }
  }
    ><span className="timeline__date">{props.year}</span>
      <div className="timeline__content">
        <h2 className="timeline__title">{props.title}</h2>
        <p className="timeline__company">{props.company}</p>
        <p className="timeline__text">{props.desc}</p>
      </div>
    </div>

  );
};

export default Card;
