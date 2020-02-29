import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Home from './Home.js';
import Header from'./Header.js';

function WebRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => <Header />} />
                <Route exact path='/home' component={() => <Home />} />
            </Switch>
        </div>
    )
}

export default WebRouter;