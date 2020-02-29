import React, { Component } from 'react';
import { Container, Row, Col, Tabs, Tab, Table, Alert } from 'react-bootstrap';

/*<<<<<<< HEAD
import HomeHeader from './HomeHeader.js';
import Graph from './Graph.js';

class Home extends Component {*/

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <Graph />
                        </Col>

                        <Col>
                        </Col>
                    </Row>

                    <Row id="bottom-row">
                        <Col>
                            <Tabs defaultActiveKey="Tab1">
                                <Tab eventKey="Tab1" title="Tab1">
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <Alert variant={'info'}>
                                                        12:34:43
                                                        Bot performed action2
                                                    </Alert>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <Alert variant={'info'}>
                                                        04:23:14
                                                        Bot performed action1
                                                    </Alert>
                                                </th>
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
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;