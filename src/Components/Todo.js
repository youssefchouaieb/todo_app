import React from 'react';

function Todo(props) {
    return (
        <center>
            <div className="todo">

                <h3 >{props.title}</h3>
                <p >{props.content}</p>


            </div>
        </center>)
        ;
}

export default Todo;
