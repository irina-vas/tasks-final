import React, {useContext} from 'react';
import Context from './Context/Context';

const Button = () => {
    const {handleAddTodo} = useContext(Context)


    return (
        <div>
            <button onClick={handleAddTodo}>ADD TODO</button>
        </div>
    );
};

export default Button;