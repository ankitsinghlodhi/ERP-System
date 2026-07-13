import "./AppLoader.css";
import { useEffect, useState } from "react";

const messages = [
  "Loading...",
  "Preparing Dashboard...",
  "Fetching Academic Data...",
  "Loading College Resources...",
  "Almost Ready...",
];

const AppLoader = ({
  title = "College Cube",
  message = "Loading...",
  subMessage = "",
  embedded = false,
}) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (embedded) return;

    const interval = setInterval(() => {
      setMessageIndex(
        (prev) => (prev + 1) % messages.length
      );
    }, 2200);

    return () => clearInterval(interval);
  }, [embedded]);

  const displayMessage =
    message || (embedded ? "Loading..." : messages[messageIndex]);

  return (
    <div
      className={
        embedded
          ? "loader-container"
          : "loader-screen"
      }
    >
      {/* Show background only in fullscreen mode */}

      {!embedded && (
        <>
          <div className="loader-bg loader-bg-1"></div>
          <div className="loader-bg loader-bg-2"></div>
          <div className="loader-bg loader-bg-3"></div>
        </>
      )}

      {/* Cube */}

      <div
        className={`scene ${
          embedded ? "scene-small" : ""
        }`}
      >
        <div className="cube">

          <div className="face front">C</div>

          <div className="face back">🎓</div>

          <div className="face right">U</div>

          <div className="face left">B</div>

          <div className="face top">E</div>

          <div className="face bottom">📚</div>

        </div>
      </div>

      {/* Hide title inside page loader */}

      {!embedded && (
        <h1 className="loader-title">
          {title}
        </h1>
      )}

      {/* Message */}

      <p className="loader-message">
        {displayMessage}
      </p>

      {subMessage && !embedded && (
        <p className="loader-submessage">
          {subMessage}
        </p>
      )}

      {/* Dots */}

      <div className="loader-dots">

        <span></span>
        <span></span>
        <span></span>

      </div>
    </div>
  );
};

export default AppLoader;