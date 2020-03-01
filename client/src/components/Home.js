import React, { Component } from 'react';
import { Container, Row, Col, Tabs, Tab, Table, Alert, Button } from 'react-bootstrap';

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