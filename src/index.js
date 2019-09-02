import React from "react";
import ReactDOM from "react-dom";
import './styles/style.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="container">
      <Header className="head"></Header>
    </div>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);