import React, { Component } from 'react'
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import FlowersGrid from './components/FlowersGrid/FlowersGrid';
import { BrowserRouter as Router } from "react-router-dom";
import RootModal from './RootModal';
import { Provider } from 'react-redux';
import store from './store';
class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Header className="head"></Header>
                        <Cover />
                        <FlowersGrid />
                    </div>
                    <RootModal />
                </Router>
            </Provider>
        )
    }
}
export default App;