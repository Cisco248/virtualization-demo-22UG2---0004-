import "./App.css";
import React, { useRef, useEffect } from "react";

function App() {
  const buttonRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const clickBtn = buttonRef.current;
    const clickElement = elementRef.current;

    if (clickBtn && clickElement) {
      const handleClick = async () => {
        try {
          const res = await fetch("http://localhost:3000/", { method: "GET" });
          const data = await res.json();
          clickElement.textContent = data.message;
        } catch (error) {
          console.error("Fetch failed:", error);
          clickElement.textContent = "Failed to fetch data.";
        }
      };

      clickBtn.addEventListener("click", handleClick);

      // Optional cleanup to remove event listener
      return () => {
        clickBtn.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <>
      <h1>Virtualization & Containarization Assignment 01</h1>
      <h2>Client Side Page</h2>
      <button ref={buttonRef}>Click Me</button>
      <pre style={{ fontSize: '2rem', color: 'red'}} ref={elementRef}></pre>
    </>
  );
}

export default App;
