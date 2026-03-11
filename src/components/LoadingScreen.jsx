import React, { useEffect, useState, useRef } from "react";
import "./LoadingScreen.css"; // Your updated CSS from previous step

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const progressIntervalRef = useRef();

  // Hacker boot sequence messages
  const messages = [
    "> INIT NEURAL BOOT...",
    "> CONNECTING TO GRID...",
    "> DECRYPTING PROFILE...",
    "> SYNCHRONIZING HUD...",
    "> LOADING MODULES [██░░░░] 40%",
    "> FINALIZING INTERFACE...",
    "> ACCESS GRANTED. WELCOME BACK."
  ];

  // Progress bar — smoother, realistic load
  useEffect(() => {
    let currentProgress = 0;
    const simulateLoad = () => {
      if (currentProgress >= 100) {
        clearInterval(progressIntervalRef.current);
        return;
      }

      // Simulate uneven loading (like real systems)
      const increment = Math.random() * 3 + 0.5;
      currentProgress = Math.min(currentProgress + increment, 100);
      setProgress(Math.floor(currentProgress));
    };

    progressIntervalRef.current = setInterval(simulateLoad, 150);

    return () => clearInterval(progressIntervalRef.current);
  }, []);

  // Cycle messages every 2s
  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(msgInterval);
  }, []);

  // Hacker drone rows — synced to glitch colors
  const droneRows = [
    { left: "10%", symbol: ">", color: "var(--glitch-1)" },
    { left: "30%", symbol: "⌁", color: "var(--glitch-2)" },
    { left: "50%", symbol: "⧉", color: "var(--glitch-3)" },
    { left: "70%", symbol: "◈", color: "var(--glitch-5)" },
    { left: "90%", symbol: "⧉", color: "var(--glitch-4)" },
  ];

  return (
    <div className="loading-container">
      {/* Animated data shards (particles) */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`shard-${i}`}
          className="particle"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 6 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Hacker drones flying upward */}
      {Array.from({ length: 8 }).map((_, i) => {
        const row = droneRows[Math.floor(Math.random() * droneRows.length)];
        return (
          <div
            key={`drone-${i}`}
            className="drone"
            style={{
              left: row.left,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${12 + Math.random() * 4}s`,
            }}
          >
            <span
              style={{
                color: row.color,
                textShadow: `0 0 8px ${row.color}`,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {row.symbol}
            </span>
          </div>
        );
      })}

      {/* Logo — cyber terminal style */}
      <div className="logo-wrapper">
        <div className="logo-shape">
          <span className="logo-text">PA</span>
        </div>
      </div>

      {/* Title — glitch gradient */}
      <h1 className="brand-title">
        Parvez<span>Alam</span>.SK
      </h1>

      {/* Subtitle — terminal boot message */}
      <p className="subtitle">{messages[messageIndex]}</p>

      {/* Progress container — "System Scan" */}
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="progress-text">{Math.round(progress)}% LOADED</span>
      </div>

      {/* Loading dots — glitch synced */}
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default LoadingScreen;