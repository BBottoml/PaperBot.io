import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Graph extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."],
                datasets: [{
                    data: [100, 123, 345, 234, 463, 234, 353, 234, 355, 245, 346, 765],
                    label: "Insert Label",
                    borderColor: "#f54293",
                    fill: true,
                }]
            }
        }
    }

    render() {
        return (
            <div>
                <Line
                    data={this.state.data}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Insert Title'
                        },
                        scales: {
                            xAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Month'
                                }
                            }],
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Insert Label String'
                                }
                            }]
                        }
                    }}
                />
            </div>
        );
    }
}

export default Graph;