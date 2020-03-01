import React, { Component } from 'react';
import { Container, Row, Col, Tabs, Tab, Table, Alert, Button } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import Scrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Graph from './Graph.js';
import StockTable from './StockTable.js';
import Instructions from './Instructions.js';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 'dashboard'
        }
    }

    componentWillReceiveProps() {
        if (this.props.pagetype === 'dashboard') {
            this.setState({page: 'instructions'});
        }
        else {
            this.setState({page: 'dashboard'});
        }
    }

    render() {
        return (
            <div>
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
                                <div id="home-log">Log</div>
                                <Row id="bottom-row">
                                    <Col>
                                        <Scrollbar style={{height: '300px'}}>
                                            <div>
                                            <Alert variant={'info'}>
                                                <p>12:34:43
                                                Bot performed action2</p>
                                            </Alert>
                                            <Alert variant={'info'}>
                                                <p>04:23:14
                                                Bot performed action1</p>
                                            </Alert>
                                            <Alert variant={'info'}>
                                                <p>04:23:14
                                                Bot performed action1</p>
                                            </Alert>
                                            <Alert variant={'info'}>
                                                <p>04:23:14
                                                Bot performed action1</p>
                                            </Alert>
                                            <Alert variant={'info'}>
                                                <p>04:23:14
                                                Bot performed action1</p>
                                            </Alert>
                                            <Alert variant={'info'}>
                                                <p>04:23:14
                                                Bot performed action1</p>
                                            </Alert>
                                            </div>
                                        </Scrollbar>
                                    </Col>

                                    <Col>
                                        
                                    </Col>
                                </Row>
                            </Container>
                        </Animated>
                    </div>
                    ) : (
                    <div>
                        <Instructions />
                    </div>
                    )
                }
            </div>
        );
    }
}

export default Home;