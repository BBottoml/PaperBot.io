import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeHeader from './HomeHeader.js';
import Header from'./Header.js';
import LandingPage from './LandingPage.js'

function WebRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => <div><Header /><LandingPage/></div>} />
                <Route exact path='/home' component={() => <HomeHeader />} />
            </Switch>
        </div>
    )
}

export default WebRouter;