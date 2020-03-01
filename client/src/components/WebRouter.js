import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeHeader from './HomeHeader.js';
import Header from'./Header.js';

function WebRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => <Header />} />
                <Route exact path='/home' component={() => <HomeHeader />} />
            </Switch>
        </div>
    )
}

export default WebRouter;