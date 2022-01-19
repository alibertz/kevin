import React from "react";
import "../MainContent.css";

const ProjectCard = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="info">
          <h2>{props.project.header}</h2>

          <div className="stats">
            <div>
              <div className="title">{props.project.technologies[0]}</div>
              <img
                style={{ height: "48px", width: "48px" }}
                src={props.project.techIcons[0]}
                alt="tech logo"
              />
            </div>
            <div>
              <div className="title">{props.project.technologies[1]}</div>
              <img
                style={{ height: "48px", width: "48px" }}
                src={props.project.techIcons[1]}
                alt="tech logo"
              />
            </div>
            <div>
              <div className="title">{props.project.technologies[2]}</div>
              <img
                style={{ height: "48px", width: "48px" }}
                src={props.project.techIcons[2]}
                alt="tech logo"
              />
            </div>
          </div>
        </div>
        <div className="description">
          <p>{props.project.description}</p>
          <div className="btns">
            <a href={props.project.codeLink}>View code</a>
            <a href={props.project.demoLink}>View demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
