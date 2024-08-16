import { useState } from "react";
import "./App.css";

function App() {
  const [overlap, setOverlap] = useState(true);
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
      </div>
    </div>
  );
}

export default App;
