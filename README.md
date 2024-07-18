# React.js Fundamentals

<p align="center">
  <img src="https://img.shields.io/badge/Curso%20-Finalizado-brightgreen"/>
</p>

<br>

# INDEX

<br>
<br>
<br>

# LAYOUT WITH REACT.JS
  ## [WHAT IS A COMPONENT]()
A React component is a fundamental building block of a React application. It is a reusable piece of code that represents part of the user interface. Components can be thought of as custom HTML elements, and they can be nested, managed, and handled independently.

React components come in two main types: functional components and class components.

Functional Components
Functional components are the simpler and more modern way to create components. They are JavaScript functions that return React elements (which are the objects that describe what you want to see on the screen).

Here's an example of a functional component:

javascript
Copiar código
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
In this example, Greeting is a functional component that takes props (short for properties) as an argument and returns a JSX element (<h1>Hello, {props.name}!</h1>).

Class Components
Class components were the traditional way to create components before the introduction of Hooks in React 16.8. They are ES6 classes that extend from React.Component.

Here's an example of a class component:

javascript
Copiar código
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
In this example, Greeting is a class component that extends React.Component. It has a render method that returns a JSX element.

Key Characteristics of React Components
Reusability: Components can be reused across different parts of an application, making it easier to build and maintain large-scale applications.
Composability: Components can be composed together to build complex UIs. A component can contain other components, creating a tree-like structure.
Isolation: Each component operates independently, encapsulating its logic and styles. This isolation makes it easier to understand and debug the code.
Props: Components can receive inputs called props. Props are read-only data passed from a parent component to a child component.
State: Components can maintain their own local state. Functional components use the useState hook to manage state, while class components use this.state and this.setState.
Lifecycle Methods: Class components have lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. Functional components can use hooks like useEffect to handle side effects and lifecycle events.
Example Usage of Components
Here's an example of how components can be used together:

javascript
Copiar código
// App.js
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

export default App;
In this example, the App component uses the Greeting component three times, passing different name props to each instance. This demonstrates the reusability and composability of React components.

  ## [TODO MACHINE COMPONENTS]()

<br>
<br>
  
  ## [HOW THE COMPONENTS COMUNICATE. PROPS AND ATTRIBUTES]()
  ### ``React.fragment``
React just can return one single tag when it comes to components structure. Howevere if we do not want to return the full component content inside a ``<div>``tag we can use the ``<React.Fragment>``tag. This tag is used for return purpose, it does not appear in the final HTML
```
<React.Fragment>
  <TodoCounter completed={16} total={25}/>
  <TodoSearch/>
  <TodoList>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
  </TodoList>

  <CreateTodoButton/>
</React.Fragment>
```
Another option is to delete the words: ``React.Fragment`` and it will work.

  ### Children
There are two types of tags, those that need an open and close tag and other that just have the open tag. The first type can have several components inside, so when it comes to rendering that components form the children property. 
```
<TodoList>
  <TodoItem/>
  <TodoItem/>
  <TodoItem/>
</TodoList>
```

In this way we can access the property children and used to render other components:
```
function TodoList({children}){
  return(
    <ul>
      {children}
    </ul>
  );
}
```

  ### ``Array.map()``
The information inside the TodoItem must be dinamic, meaning it has to change based on external information. In the following example we use an array to render a TodoItem for every array element:
```
<TodoList>
  {defaultTodos.map(todo => (
    <TodoItem 
      key={todo.text} 
      text={todo.text}
      completed={todo.completed}/>
  ))}
</TodoList>
```

Notice that it is required to use the ``.map()``method.

  ### Key for ach children
It is important that every single child must have an specific key to diferencite it from others.
```
<TodoItem 
  key={todo.text}>
```

  ### Props
The information contained in every array element is passed to a component using the props.
```
<TodoItem 
  key={todo.text} 
  text={todo.text}
  completed={todo.completed}/>
```
This is a method to send information that can be manipulated inside the component:
```
function TodoItem(props) {
  return(
    <li>
      <span>V {props.completed}</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}
```

<br>
<br>

  ## [CSS STYLES IN REACT]()
There are two methods to add styles to react components: inline styles and stylesheets.

  ### Inline styles
In the example below an object can be created with the CSS rules and then used that object inside the jsx code as a variable.

Notice that the CSS properties syntax is camelCase, quite different from traditional CSS syntax.
```
const estilos = {
  backgroundColor: 'red'
}

function TodoCounter({total, completed}){
  return(
    <h1 style={estilos}>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}
```

A shortcut can be applied, we can define the properties object directly inside the style attribute. Notice that a double {{}} is necessary.
```
function TodoCounter({total, completed}){
  return(
    <h1 style={{
      backgroundColor: 'red',
      fontSize: 24
      }}>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}
```

  ### Stylesheets
Another alternative is to use stylesheets where we can use the traditional CSS syntax. The CSS file must be imported into the component file to let the styles be applied.
```
h1{
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;
}
```
```
import './TodoCounter.css';

function TodoCounter({total, completed}){
  return(
    <h1>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}
```
After the web page rendering all the css files used can be found inside the head tag.




<br>
<br>
<br>

# AUTHOR
This project was developed by *Juan Cumbe*. If you have any questions or suggestions about the project, feel free to contact me via [e-mail](mailto:hello@juancumbe.com) or my [Linkedin](https://www.linkedin.com/in/juancumbeq/) profile. 