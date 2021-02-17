

import React, { useState } from 'react';


function Newtodo() {
    const [todo, setTodo] = useState({
        title: '',
        content: '',
    });


    function handleChange(event) {
        const { name, value } = event.target;

        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value }));
    }


    return (
        <center>
            <div >

                <form>
                    <input
                        name="title"
                        value={todo.title}
                        onChange={() => handleChange()}

                        placeholder="My todo-item title" />

                    <textarea
                        name="content"
                        value={todo.content}
                        onChange={() => handleChange()}

                        placeholder="add a todo-item "
                        rows="1" />

                    <button>Add</button>

                </form>


            </div>
        </center>)
        ;
}

export default Newtodo;

