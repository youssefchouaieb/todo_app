import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';
import Newtodo from './Newtodo';
import todosList from '../todos';

const generateKey = pre => `${pre}_${new Date().getTime()}`;

function App() {
    const [todos, setTodos] = useState(todosList);


    function addTodo(newTodo) {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }


    function deleteTodo(id) {
        setTodos((prevTodos) => {
            prevTodos.filter((todoItem, index) => index !== id);
        },
        );
    }


    return (

        <div className="App" >
            <Header />
            <Newtodo onAdd={addTodo} />

            {todos.map((todoItem, index) =>
             (<Todo

                 key={generateKey(todoItem.title)}
                 id={index}
                 title={todoItem.title}
                 content={todoItem.content}
                 onDelete={deleteTodo} />
                 ))}

            <Footer />
        </div>

    );
}


export default App;
