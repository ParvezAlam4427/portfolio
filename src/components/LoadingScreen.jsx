import React, { useEffect, useState, useRef } from "react";
import "./LoadingScreen.css";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const progressIntervalRef = useRef();

  const messages = [
    "Initializing system...",
    "Connecting services...",
    "Loading profile...",
    "Preparing interface...",
    "Finalizing setup...",
    "Welcome."
  ];

  // Progress loading simulation
  useEffect(() => {
    let currentProgress = 0;

    const simulateLoad = () => {
      if (currentProgress >= 100) {
        clearInterval(progressIntervalRef.current);
        return;
      }

      const increment = Math.random() * 3 + 1;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(Math.floor(currentProgress));
    };

    progressIntervalRef.current = setInterval(simulateLoad, 120);

    return () => clearInterval(progressIntervalRef.current);
  }, []);

  // Message cycle
  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(msgInterval);
  }, []);

  return (
    <div className="loading-container">

      {/* Logo */}
      <div className="logo-wrapper">
        <div className="logo-shape">
          <span className="logo-text">PA</span>
        </div>
      </div>

      {/* Name */}
      <h1 className="brand-title">
        Parvez<span>Alam</span>.SK
      </h1>

      {/* Message */}
      <p className="subtitle">{messages[messageIndex]}</p>

      {/* Progress */}
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="progress-text">{progress}%</span>
      </div>

    </div>
  );
}

export default LoadingScreen;