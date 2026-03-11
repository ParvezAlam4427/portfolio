import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  // Live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160; // offset for fixed header
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // adjust for fixed header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="pa-logo">PA</div>
        <div className="brand-text">
          <span>
            <span className="brand-name">PARVEZ</span>
            <span className="brand-dot">.</span>
            <span className="brand-suffix">ALAM</span>
          </span>
          <span className="time">{currentTime}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className={activeSection === "home" ? "active home-link" : "home-link"}
        >
          HOME
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className={activeSection === "about" ? "active" : ""}
        >
          <FaUser /> ABOUT
        </a>
        <a
          href="#skills"
          onClick={(e) => handleNavClick(e, "skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          <FaCode /> SKILLS
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, "projects")}
          className={activeSection === "projects" ? "active" : ""}
        >
          <FaProjectDiagram /> PROJECTS
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          <FaEnvelope /> CONTACT
        </a>
      </nav>

      {/* Status Section */}
      <div className="status">
        <span className="dot"></span>
        <span className="online">ONLINE</span> | 
        <span className="ready"> STATUS: READY</span>
      </div>
    </header>
  );
};

export default Header;
