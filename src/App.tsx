import { useEffect } from "react";
import "./App.css";
import { attach } from "canvas-render";

const containerId = "canvas-container";

function App() {
  useEffect(() => {
    attach(containerId);
  }, []);

  return (
    <>
      <h1>Canvas</h1>
      <div id={containerId}></div>
    </>
  );
}

export default App;
