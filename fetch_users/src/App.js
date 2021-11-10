import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import * as axios from 'axios';
import Class from './components/Class';
import Functional from './components/Functional';
import ContextUsers from './components/ContextUsers';


const ContextUsersVar = React.createContext();

function App() {
    const [btnOn, setBtnOn] = useState(false);
    const [users, setUsers] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/users';
    useEffect(() => {
        axios.get(url)
            .then(response => response)
            .then(data => {
                setUsers(data.data);
                console.log(data.data)
            }).catch(error => console.error(error))
    }, [])




  return (
    <ContextUsers.Provider value={users}>
        <div className="App">
            <Functional />
            {/*<Class />*/}

        </div>
    </ContextUsers.Provider>

  );
}

export default App;
