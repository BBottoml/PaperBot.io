import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import HomeHeader from './HomeHeader.js';
import Header from'./Header.js';
import Home from './Home.js'

function WebRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => <div><Header /><Home/></div>} />
                <Route exact path='/home' component={() => <HomeHeader />} />
            </Switch>
        </div>
    )
}

export default WebRouter;