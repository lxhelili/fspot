import React from "react";
import ReactDOM from "react-dom";
import './styles/style.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cover from './components/Cover/Cover';

function App() {
  return (
    <Router>
      <div className="container">
        <Header className="head"></Header>
        <Cover />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);