import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Header.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "animate.css/animate.min.css";


export default class Header extends React.Component {
    scrollDown(amountToScroll){
        window.scrollTo(0, 860);
    }

    scrollToContact(amountToScroll) {
        window.scrollTo(0, 1500);
    }

    render() {
        return (
            <div>
               <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link onClick={this.scrollToContact}>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link onClick={this.scrollDown}>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="http://localhost:5000/alpacaAuth">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}