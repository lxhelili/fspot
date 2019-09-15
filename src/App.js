import React, { Component } from 'react'
import Header from './components/Header/Header';
import Home from './containers/Home';
import Flowers from './containers/Flowers';
import Favorites from './containers/Favorites';
import LatestSightings from './containers/LatestSightings';
import NotFound from './containers/NotFound';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalContainer from './ModalContainer';
import store from './store';
import { loadUser }  from './actions/auth';

class App extends Component {
    componentDidMount(){
        store.dispatch(loadUser())
    }
    render() {
        return (
            <div data-test="appComponent">
                <Router>
                    <div className="container">
                        <Header className="head"></Header>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/flowers" component={Flowers} />
                            <Route path="/favorites" component={Favorites} />
                            <Route path="/latest-sightings" component={LatestSightings} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <ModalContainer />
                </Router>
            </div>
        )
    }
}
export default App;