import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import * as axios from 'axios';
import Functional from './components/Functional';
import ContextUsers from './components/ContextUsers';
import Button from './components/Button';


const ContextUsersVar = React.createContext();

function App() {
    const [btnOn, setBtnOn] = useState(true);
    const [users, setUsers] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        axios.get(url)
            .then(response => response)
            .then(data => {
                setUsers(data.data);
                console.log(data.data)
            }).catch(error => console.error(error))
    }, []);

    let btnHandler = () => {
        setBtnOn(false);
    }

    let value = {
        users,

    }




  return (
    <ContextUsers.Provider value={users}>
        <div className="App">
            {btnOn
                ? (<div><Button btnHandler={btnHandler} /></div>)
                : (<div><Functional /></div>)
            }


        </div>
    </ContextUsers.Provider>

  );
}

export default App;
