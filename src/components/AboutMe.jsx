import React from "react";
import "./AboutMe.css";

const About = () => {
  return (
    <section id="about" className="about-section">

      <h1 className="about-title">About Me</h1>

      <div className="container grid-layout">

        {/* Core Specialties */}
        <div className="card specialties">

          <h2>Core Specialties</h2>

          {/* Frontend */}
          <div className="specialty">
            <div className="icon blue">💻</div>
            <div>
              <h4>Frontend Development</h4>
              <p>React.js | HTML | CSS | JavaScript</p>
            </div>
          </div>

          {/* Backend */}
          <div className="specialty">
            <div className="icon green">⚙️</div>
            <div>
              <h4>Backend Development</h4>
              <p>Java | Spring Boot | APIs</p>
            </div>
          </div>

          {/* Full Stack */}
          <div className="specialty">
            <div className="icon pink">🔗</div>
            <div>
              <h4>Full Stack Awareness</h4>
              <p>Frontend & Backend integration with APIs.</p>
            </div>
          </div>

          {/* AI */}
          <div className="specialty">
            <div className="icon orange">🤖</div>
            <div>
              <h4>Artificial Intelligence</h4>
              <p>LLMs | LangChain | AI Agents</p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="right-side">

          {/* Technology Proficiency */}
          <div className="card proficiency">

            <h2>Technology Proficiency</h2>

            <div className="progress">
              <span>React</span>
              <div className="bar blue" style={{ width: "75%" }}></div>
            </div>

            <div className="progress">
              <span>Java</span>
              <div className="bar green" style={{ width: "85%" }}></div>
            </div>
            <div className="progress">
              <span>SQL</span>
              <div className="bar pink" style={{ width: "80%" }}></div>
            </div>

            <div className="progress">
              <span>AI & LLM Tools</span>
              <div className="bar orange" style={{ width: "75%" }}></div>
            </div>

          </div>

          {/* Mission */}
          <div className="card mission">

            <h2>Mission</h2>

            <p>
              I build web applications using React and Java. I am also exploring AI, LLMs, and LangChain.
            </p>

            <div className="status">
              <span className="active"></span> ACTIVE
              <span className="mode">LEARNING_MODE: ON</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;