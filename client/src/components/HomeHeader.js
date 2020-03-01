import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

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
//<img src={require("../res/trash.png")}/>
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
                                <a id="home-screen-click" onClick={this.changePage.bind(this)} href='#'>
                                    Trading Bot Instructions
                                </a>
                            </Navbar.Brand>
                        </Navbar>
                        <Home pagetype={'dashboard'} />
                    </div>
                    ) : (
                    <div>
                        <Navbar id="home-navbar" bg="dark" variant="dark">
                            <Navbar.Brand>
                                Trading Bot Instructions
                            </Navbar.Brand>
                            <Navbar.Brand id="home-screen-button">
                                <a id="home-screen-click" onClick={this.changePage.bind(this)} href='#'>
                                    Trading Bot Dashboard
                                </a>
                            </Navbar.Brand>
                        </Navbar>
                        <Home pagetype={'instructions'} />
                    </div>
                    )
                }
            </div>
        );
    }
}

export default HomeHeader;