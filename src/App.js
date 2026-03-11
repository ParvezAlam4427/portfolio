import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Project from "./components/Projects";   // <- KEEP THIS
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen progress={progress} />
      ) : (
        <>
          <Header />
          <div id="home"><HomePage /></div>
          <div id="about"><AboutMe /></div>
          <div id="skills"><Skills /></div>

          {/* PROJECTS SECTION */}
          <div id="projects" className="projects-section">
            <h2 className="projects-title">My Projects</h2>

            <div className="projects">
              <Project
                image="https://github.com/ParvezAlam4427/ALAMsresume/blob/main/Screenshot%202025-11-21%20230658.png?raw=true"
                title="Spring Boot Backend (CRUD + REST APIs)"
                description="A Spring Boot project implementing CRUD operations, REST APIs, layered architecture, and proper validations."
                tags={["Java", "Spring Boot", "REST API", "MySQL"]}
                link="https://github.com/ParvezAlam4427/Parvez-s-STDB"
              />

              <Project
                image="https://github.com/ParvezAlam4427/ALAMsresume/blob/main/Screenshot%202025-11-21%20203120.png?raw=true"
                title="Spring Boot Backend (CRUD + REST APIs)"
                description="A Spring Boot project implementing CRUD operations, REST APIs, layered architecture, and proper validations."
                tags={["Java", "Spring Boot", "REST API", "MySQL"]}
                link="https://github.com/ParvezAlam4427/PARVEZALAMspring"
              />

              <Project
                image="https://raw.githubusercontent.com/ParvezAlam4427/Parvez-s-STDB/refs/heads/main/9bff9b55-11e4-47fe-b808-493c9e227361.png"
                title="AI Customer Service Agent (Gemini)"
                description=""
                tags={["Python","HTML", "CSS", "JavaScript"]}
                link="https://parvezalam4427.github.io/Festava-music-page/"
              />

              <Project
                image="https://github.com/ParvezAlam4427/ALAMsresume/blob/main/Screenshot%202025-11-21%20230726.png?raw=true"
                title="Flavours Joy – Food Website"
                description="A stylish food website built with modern UI and responsiveness."
                tags={["HTML", "CSS", "JavaScript"]}
                link="https://parvez786755.github.io/FlavoursJoy/"
              />

              <Project
  image="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d"
  title="Weather Forecasting System (RandomForest ML)"
  description="A machine learning-based weather forecasting system using RandomForest Regression. Predicts temperature, humidity, rainfall, and overall weather conditions with high accuracy using real-world datasets."
  tags={["Python", "Machine Learning", "RandomForest", "Pandas", "Flask"]}
  link="https://github.com/ParvezAlam4427/weather-forecast-ml"
/>


            </div>
          </div>

          <div id="contact">
            <Contact />
          </div>
        </>
      )}

      <CustomCursor />
    </>
  );
}

export default App;
