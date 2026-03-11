import React from "react";
import "./HomePage.css";

import heroImage from "../assets/images/myimage.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const HomePage = () => {
  return (
    <section className="homepage" id="home">
      <div className="homepage-container">
        {/* Left: glass card */}
        <div className="content-card">

          <h1 className="greeting">
            Hello, I'm <span className="highlight">ParvezAlam Shaik</span>
          </h1>

          <p className="sub">
Aspiring Software Developer passionate about learning and building modern, user-friendly software applications.          </p>

          <div className="mission">
            <strong>MY MISSION</strong>
            <p>
              Bridging the gap between design and development where creativity
              meets functionality and innovation drives progress.
            </p>
          </div>

          <div className="buttons">
            <a className="btn btn-primary" href="#projects">
              View My Work
            </a>
            <a
              className="btn btn-secondary"
              href="https://raw.githubusercontent.com/ParvezAlam4427/ALAMsresume/main/Parvez_Alam_Shaik_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="social-icons">
            <a href="https://github.com/ParvezAlam4427" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/parvez-alam-shaik-7b1117306" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Parvezalam2459" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:parvezalamshaik59@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="image-wrap">
          <img src={heroImage} alt="profile" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;