import React from 'react';

function Todo(props) {
    function handleClick() {
        props.onDelete(props.id);
    }


    return (
        <center>
            <div className="todo">


                <h3 >{props.title}</h3>
                <p >{props.content}</p>

                <button onClick={() => handleClick()}> delete </button>


            </div>
        </center>)
        ;
}

export default Todo;
