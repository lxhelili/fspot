import React from "react";
import ReactDOM from "react-dom";
import './styles/style.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Header className="head"></Header>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);