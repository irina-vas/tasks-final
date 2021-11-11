import React, { useState} from 'react';
import './App.css';
import Context from './components/Context/Context';
import FormTodo from './components/FormTodo';


function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first'
        },
        {
            id: 2,
            title: 'second'
        },
        {
            id: 3,
            title: 'third'
        },
    ]);
    const [addTodo, setAddTodo] = useState(false);

    const handleAddTodo = () => {
        setAddTodo(true);
    }

    let value = {
        todo,
        handleAddTodo,
        addTodo,
        todo,
        setTodo,
    }


    return (
        <Context.Provider value={{handleAddTodo, addTodo, todo, setTodo}}>
            <FormTodo />
        </Context.Provider>

    );
}

export default App;
