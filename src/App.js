import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

import React from 'react';

import './css/App.css';


const defaultTodos = [
  {text: "Cortar cebolla", completed: true},
  {text: "Tomar el curso de Intro a React.js", completed: false},
  {text: "Llorar con la Llorona", completed: false},
  {text: "LALALALAL", completed: false},
  {text: "LALALALAL", completed: false}
];


function App() {
  return (
    <React.Fragment>
  
      <TodoCounter completed={16} total={25}/>

      <TodoSearch/>

      {/* React treats all the content insider a tag as the children property */}
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
