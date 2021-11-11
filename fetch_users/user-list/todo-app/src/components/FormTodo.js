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


    return (
        <div className="wrapper">
            {todo.map(item => {
                return (
                    <div className="todo_item_wrapper" key={item.id}>
                        <div className="todo_item">{item.title}</div>
                        <button className="todo_delete" onClick={() => deleteTodo(item.id)}>delete</button>
                    </div>
                )
            })}
            {addTodo ? <AddTodo /> : <Button />}
        </div>
    );
}

export default FormTodo;