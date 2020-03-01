import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Home from './Home.js';
import Header from'./Header.js';


function WebRouter() {
    return (
        <div>
            <Home />
        </div>
    )
}

export default WebRouter;