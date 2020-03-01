import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Home from './Home.js';

class HomeHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: "dashboard"
        }
    }

    changePage() {
        if (this.state.page === 'dashboard') {
            this.setState({page: 'instructions'});
        }
        else {
            this.setState({page: 'dashboard'});
        }
    }

    render() {
        return (
            <div>
                {this.state.page === "dashboard" ? (
                    <div>
                        <Navbar id="home-navbar" bg="dark" variant="dark">
                            <Navbar.Brand>
                                Trading Bot Dashboard
                            </Navbar.Brand>
                            <Navbar.Brand id="home-screen-button">
                                <Link to='/home/instructions' id='home-screen-click' onClick={this.changePage.bind(this)}>
                                    Trading Bot Instruction
                                </Link>
                            </Navbar.Brand>
                        </Navbar>
                    </div>
                    ) : (
                    <div>
                        <Navbar id="home-navbar" bg="dark" variant="dark">
                            <Navbar.Brand>
                                Trading Bot Instructions
                            </Navbar.Brand>
                            <Navbar.Brand id="home-screen-button">
                            <Link to='/home/dashboard' id='home-screen-click' onClick={this.changePage.bind(this)}>
                                    Trading Bot Dashboard
                                </Link>
                            </Navbar.Brand>
                        </Navbar>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default HomeHeader;