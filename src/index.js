import React from "react";
import ReactDOM from "react-dom";
import './styles/style.css';

function App() {
  return (
    <div>
      <h1>Hello FlowrSpot</h1>
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);