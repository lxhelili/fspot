import React, { Component } from 'react'
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import FlowersGrid from './components/FlowersGrid/FlowersGrid';
import { BrowserRouter as Router } from "react-router-dom";
import RootModal from './RootModal';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Header className="head"></Header>
                    <Cover />
                    <FlowersGrid />
                </div>
                <RootModal />
            </Router>
        )
    }
}
export default App;