import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from'./Header.js';
import LandingPage from './LandingPage.js'
import HomeRouter from './HomeRouter';

function WebRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => <div><Header /><LandingPage/></div>} />
                <Route path='/home' component={() => <HomeRouter />} />
            </Switch>
        </div>
    )
}

export default WebRouter;