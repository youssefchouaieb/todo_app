

import React, { useState } from 'react';


function Newtodo(props) {
    const [todo, setTodo] = useState({
        title: '',
        content: '',
    });


    function handleChange(e) {
        const { name, value } = e.target;

        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value }));
    }

    function submitTodo(event) {
        props.onAdd(todo);
        event.preventDefault();
    }

    return (
        <center>
            <div >

                <form>
                    <input
                        name="title"
                        value={todo.title}
                        onChange={e => handleChange(e)}

                        placeholder="My todo-item title" />

                    <textarea
                        name="content"
                        value={todo.content}
                        onChange={e => handleChange(e)}

                        placeholder="add a todo-item "
                        rows="1" />

                    <button onClick={submitTodo}>Add</button>

                </form>


            </div>
        </center>)
        ;
}

export default Newtodo;

