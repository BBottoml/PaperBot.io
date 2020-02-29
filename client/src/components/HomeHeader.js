import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class HomeHeader extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    Trading Bot Dashboard
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default HomeHeader;