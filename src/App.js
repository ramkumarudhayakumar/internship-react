import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [overlap, setOverlap] = useState(true);
  const head = "HI HELLOE WELCOME";

  function circleHandler() {
    setOverlap(!overlap);
  }

  return (
    <div className="App">
      <div className="circle-head" onClick={circleHandler}>
        <div className="circle-parent1">
          <div className={!overlap ? "circle-child1" : "circle circle1"}></div>
          <div className={!overlap ? "circle-child2" : "circle circle2"}></div>
        </div>
        <div className="circle-parent2">
          <div className={!overlap ? "circle-child3" : "circle circle3"}></div>
          <div className={!overlap ? "circle-child4" : "circle circle4"}></div>
          <div className={!overlap ? "circle-child5" : "circle circle5"}></div>
          <div className={!overlap ? "circle-child6" : "circle circle6"}></div>
          <div className={!overlap ? "circle-child7" : "circle circle7"}></div>
          <div className={!overlap ? "circle-child8" : "circle circle8"}></div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {head.split("").map((he, i) => {
            return (
              <h1
                className="leSnake"
                key={i}
                style={{
                  animationName: "lePeek", // Set the animation name
                  animationDuration: "1.5s", // Adjust the duration as needed

                  animationDelay: `${i * 0.1}s`, // Staggered delay based on index
                }}
              >
                {he}
              </h1>
            );
          })}
        </div>
      </div>
      <Login />
    </div>
  );
}

export default App;
