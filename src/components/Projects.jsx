import React from "react";
import "./Project.css";

const Project = ({ image, title, description, tags, link }) => {
  return (
    <div className="project-card">

      {/* HEADER BAR (Small Image + Title) */}
      <div className="project-header">
        <div className="project-header-img">
        </div>
        <h3 className="project-header-title">{title}</h3>
      </div>

      {/* BIG IMAGE IN THE MIDDLE */}
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={title} className="project-main-img" />
      </a>

      {/* DESCRIPTION */}
      <p className="project-desc">{description}</p>

      {/* TAGS */}
      <div className="project-tags">
        {tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>

      {/* LINK */}
      <a href={link} className="project-link" target="_blank" rel="noreferrer">
        VIEW_DETAILS →
      </a>
    </div>
  );
};

export default Project;
