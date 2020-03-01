import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home.js';
import Instructions from './Instructions.js';
import HomeHeader from './HomeHeader.js';

class HomeRouter extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Switch>
                    <Route path='/home/dashboard' component={() => <Home />} />
                    <Route path='/home/instructions' component={() => <Instructions />} />
                </Switch>
            </div>
        );
    }
}

export default HomeRouter;