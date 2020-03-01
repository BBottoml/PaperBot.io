<<<<<<< HEAD
import React from 'react';
import './Home.css'
import Card from 'react-bootstrap/Card'
import { Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import IoAndroidPeople from 'react-icons/lib/io/android-people'
import IoSocialUsd from 'react-icons/lib/io/social-usd'
import IoWrench from 'react-icons/lib/io/wrench'

=======
import React, { Component } from 'react';
import { Container, Row, Col, Tabs, Tab, Table, Alert, Button } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

import Graph from './Graph.js';
import StockTable from './StockTable.js';
import Instructions from './Instructions.js';
>>>>>>> eea1d187c7532e7e934a922748df6a59d5bf0203


class Home extends React.Component {
    cancelCourse() {
        document.getElementById("contact-form").reset();
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
            <div className="bg">
                <h1>PaperBot.io</h1>
            </div>
            <div className="description">
                <Row>
                <Col>
                    <h2><span>Simple</span> way to create an <br/> educational trading bot.</h2>
                    <p>Automate daring new strategies risk-free by creating your own<br/> trading bot. Deploy and test your bot, so you can keep tweaking<br/> your bot's rules until it is effective.</p>
                </Col>
                <Col>
                    <div className="icon">
                        <Card.Img variant="top" src="https://news.bitcoin.com/wp-content/uploads/2018/04/bitcoin-trading-bot.jpg"/>
=======
                {this.state.page === 'dashboard' ? (
                    <div>
                        <Animated animationIn="fadeInUp" animationOut="fadeOutUp" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <Container fluid={true}>
                                <Row>
                                    <Col>
                                        <Graph />
                                    </Col>

                                    <Col style={{paddingTop: '65px'}}>
                                        <StockTable />
                                    </Col>
                                </Row>

                                <Row id="bottom-row">
                                    <Col>
                                        <Tabs id="home-component" defaultActiveKey="Tab1">
                                            <Tab eventKey="Tab1" title="Tab1">
                                                <Table bordered>
                                                    <thead>
                                                        <tr>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <Alert variant={'info'}>
                                                                    12:34:43
                                                                    Bot performed action2
                                                                </Alert>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Alert variant={'info'}>
                                                                    04:23:14
                                                                    Bot performed action1
                                                                </Alert>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Tab>
                                            <Tab eventKey="Tab2" title="Tab2">
                                                Random text 2
                                            </Tab>
                                            <Tab eventKey="Tab3" title="Tab3">
                                                Random text 3
                                            </Tab>
                                        </Tabs>
                                    </Col>

                                    <Col>
                                        <div>
                                            <Button variant="outline-info">Create a New Bot</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Animated>
                    </div>
                    ) : (
                    <div>
                        <Instructions />
>>>>>>> eea1d187c7532e7e934a922748df6a59d5bf0203
                    </div>
                </Col>
                </Row>
            </div>
            <div className="cards">
                <div className="cardsMargins">
                <Row>
                    <Col>  
                        <div className="infoCards">
                            <IoSocialUsd className="iconSmall"/>
                            <h3>Live transaction updates</h3>
                            <h4>You will have access to a live view of all the transactions your bot makes so you can always stay in the loop. You can also choose to recieve a mobile notification when your bot makes a transaction.</h4>
                        </div>
                    </Col>
                    <Col>  
                        <div className="infoCards">
                            <IoAndroidPeople className="iconSmall"/>
                            <h3>Create multiple bots</h3>
                            <h4>You can create bots with different trading rules to seamlessly compare various automation stratigies. You will be able to view and edit these bots from the dashboard.</h4>
                        </div>
                    </Col>
                    <Col>  
                        <div className="infoCards">
                            <IoWrench className="iconSmall"/>
                            <h3>Build a trading bot with ease</h3>
                            <h4>No coding skills needed. You have complete control over your bot's automation rules with the interactive user interface. updates rules for your bot with a single click.</h4>
                        </div>
                    </Col>
                </Row>
                </div>
            </div>
            <div className="footer">
                <div class="contactForm">
                    <h6>Contact Us</h6>
                <Form id="contact-form">
                    <Form.Group>
                        <Form.Label id="form-label"><h5>Email Address</h5></Form.Label>
                        <Form.Control id="form-ctrl" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="form-label"><h5>Subject</h5></Form.Label>
                        <Form.Control id="form-ctrl" as="textarea" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label id="form-label"><h5>Message</h5></Form.Label>
                        <Form.Control id="form-ctrl" as="textarea" rows="5"/>
                    </Form.Group>
                    <Form.Row id="form-row">
                        <Button id="form-button" variant="light" onClick={this.cancelCourse}>Submit</Button>
                    </Form.Row>
                </Form>
                </div>
            </div>
                <div className="copyrightText">©2020 PaperBot.io</div>
            </div>
        );
    }
}

export default Home;