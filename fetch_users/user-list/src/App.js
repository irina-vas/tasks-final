import './App.css';
import React, {Component}  from 'react';
import * as axios from 'axios';
import Class from './components/Class';
import UserContext from './components/Context';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnOn: true,
            users: [],
        };
        this.btnHandler = this.btnHandler.bind(this)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(response => response)
             .then(data => {
                this.setState({
                    users: data.data
                });

             }).catch(error => console.error(error))
    }

    btnHandler() {
        this.setState({
            btnOn: false
        })
    };

    render() {
        let info;
        const btnOn = this.state.btnOn;
        if(btnOn) {
            info = <button onClick={this.btnHandler}>GET INFORMATION</button>;
        } else {
            info = <div><Class /></div>;
        }
        return (

                <UserContext.Provider value={{users: this.state.users}}>
                    <div>
                        {info}
                    </div>
                </UserContext.Provider>

        );
    }
}

export default App;
