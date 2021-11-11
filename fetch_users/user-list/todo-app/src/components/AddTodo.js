import React, {useContext, useState} from 'react';
import Context from './Context/Context';
import './AddTodo.css';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const {setTodo} = useContext(Context);
    const {todo} = useContext(Context);
    // const deleteTodo = (id) => {
    //     let newTodo = [...todo].filter(item => item.id != id);
    //     setTodo(newTodo)
    // }

    const saveTodo = () => {
        setTodo(
            [...todo, {
                id: 4,
                title: value,
                }
            ]
        )
    }

    return (
        <div>
            <div className="todo_new"></div>
            {/*{todo.map(item => {*/}
            {/*    return (*/}
            {/*        <div className="todo_item_wrapper" key={item.id}>*/}
            {/*            <div className="todo_item">{item.title}</div>*/}
            {/*            <button className="todo_delete" onClick={() => deleteTodo(item.id)}>delete</button>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
            <input
                type = "text"
                placeholder="add a task..."
                value={value}
                onChange={(e) => setValue((e.target.value))}
            />
            <button onClick={saveTodo}>save</button>

        </div>
    );
};

export default AddTodo;