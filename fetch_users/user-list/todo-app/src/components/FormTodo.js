import React, {useContext} from 'react';
import Button from './Button';
import AddTodo from './AddTodo';
import Context from './Context/Context';


function FormTodo() {
    const {addTodo} = useContext(Context);
    const {todo} = useContext(Context);
    const {setTodo} = useContext(Context);

    const deleteTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id != id);
        setTodo(newTodo)
    }

    const handleSelectChange = () => {

    }


    return (
        <div className="wrapper">
            <div className="todos_nonSelected">
                <h2>Added tasks</h2>
                {todo.map(item => {
                    return (
                        <div className="todo_item_wrapper" key={item.id}>
                            <div className="todo_item">{item.title}</div>
                            <div>
                                <select className="select_todo"
                                    value={value}
                                    onChange={handleSelectChange}
                                >
                                    <option>in progress</option>
                                    <option>done</option>
                                </select>
                                <button
                                    className="todo_delete"
                                    onClick={() => deleteTodo(item.id)}>
                                    <span>DELETE</span>
                                </button>
                            </div>

                        </div>
                    )
                })}
                {addTodo ? <AddTodo /> : <Button />}
            </div>
            <div className="todos_inProgress">
                <h2>Tasks in progress</h2>
            </div>
            <div className="todos_done">
                <h2>Tasks done</h2>
            </div>

        </div>
    );
}

export default FormTodo;