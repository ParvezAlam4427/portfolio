import React from "react";
import "./Skills.css";

import { 
  FaJava, 
  FaDatabase, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaGithub 
} from "react-icons/fa";

import { 
  SiMongodb, 
  SiMysql, 
  SiSpringboot, 
  SiC 
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-page">

      <h1 className="skills-title">My Skills</h1>

      <p className="skills-sub">
        Here are some of the technologies and tools I work with:
      </p>

      <div className="skills-grid">

        {/* Java */}
        <div className="skill-card">
          <FaJava className="skill-icon java" />
          <h3>Java</h3>
          <p>Core Java, OOP concepts, and problem solving.</p>
        </div>

        {/* C Programming */}
        <div className="skill-card">
          <SiC className="skill-icon c" />
          <h3>C Programming</h3>
          <p>Strong foundation in C programming and problem solving.</p>
        </div>

        {/* AI */}
        <div className="skill-card">
          <SiSpringboot className="skill-icon spring" />
          <h3>AI</h3>
          <p>Building AI agents and exploring AI-powered tools.</p>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <FaDatabase className="skill-icon db" />
          <h3>Databases</h3>
          <p>SQL (MySQL) and NoSQL (MongoDB).</p>

          <div className="db-icons">
            <SiMysql className="small-icon" />
            <SiMongodb className="small-icon" />
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <h3>Frontend</h3>
          <p>React, HTML, CSS, JavaScript, and modern UI design.</p>

          <div className="frontend-icons">
            <FaHtml5 className="small-icon" />
            <FaCss3Alt className="small-icon" />
            <FaJs className="small-icon" />
          </div>
        </div>

        {/* GitHub */}
        <div className="skill-card">
          <FaGithub className="skill-icon github" />
          <h3>GitHub</h3>
          <p>Version control, collaboration, and repository management.</p>
        </div>

      </div>
    </div>
  );
};

export default Skills;