import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';
import Newtodo from './Newtodo';
import todos from '../todos';


function App() {
    return (

        <div className="App" >
            <Header />
            <Newtodo />
            {todos.map(todoItem =>
             (<Todo
                 key={todoItem.key}
                 title={todoItem.title}
                 content={todoItem.content} />))}

            <Footer />
        </div>

    );
}


export default App;
