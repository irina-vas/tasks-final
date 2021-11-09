// import React, { Component } from 'react';
//
//
// export class ClassComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(() => this.time(), 1000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     time() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     start() {
//
//     }
//
//     stop() {
//
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Clocks</h1>
//                 <h2>{this.state.date.toLocaleTimeString()}</h2>
//                 <button onClick={start}>START</button>
//                 <button onClick={stop}>STOP</button>
//             </div>
//         );
//     }
// }
//
// export default ClassComponent;