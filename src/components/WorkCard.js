import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      {/* <img src={props.imgsrc} alt= "Image"/> */}
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          {props.view && props.view.trim() !== "" && (
            <NavLink
              to={props.view}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
