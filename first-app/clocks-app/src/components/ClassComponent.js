import React, { Component } from 'react';


export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString(),
            timerOn: true
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        if (this.state.timerOn) {
            this.timerID = setInterval(() => {
                this.setState({
                    date: new Date().toLocaleTimeString()
                });
            }, 1000);
        }
    }


    start() {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 1000);
        this.setState({
            timerOn: this.state.timerOn
        })
    }

    stop() {
        clearInterval(this.timerID);
        this.setState(({timerOn: false}))
    }

    // componentWillUnmount() {
    //     clearInterval(this.timerID);
    // }

    render() {
        return (
            <div>
                <h1>Clocks</h1>
                <h2>{this.state.date}</h2>
                <button onClick={this.start}>START</button>
                <button onClick={this.stop}>STOP</button>
            </div>
        );
    }
}

export default ClassComponent;