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

### `Array.map()`
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

Notice that it is required to use the `.map()`method.

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

### Dynamic classes

When it comes to apply styles to the xml tags we can do it using static classes as we can see in the example below.

```
function TodoItem(props) {
  return(
    <li className="TodoItem">
      <span className="Icon Icon-check Icon-check--active">
        V
      </span>
      <p className="TodoItem-p TodoItem-p--complete">{props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}
```

However if we want to use certain classes based for example on the task completed status we need to use dynamic classes. The syntax is different because the template literals must be used.

```
function TodoItem(props) {
  return(
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}
```

The line below is a JavaScript expression that evaluates the property completed and if it is true inserts the "Icon-check--active" class.

```
${props.completed && "Icon-check--active"}
```

<br>
<br>
<br>

# INTERACTION WITH REACT.JS

## [REACT EVENTS: ONCLICK, ONCHANGE]()

The events in React must be written using camelCase and unlike JavaScript or HTML the event must contain a function because React transforms every onClick, onChange, etc... into an eventListener.

```
function CreateTodoButton() {
  return(
    <button className="CreateTodoButton"
    onClick={() => console.log('le diste click')}
    >+</button>
  );
}
```

<br>
<br>

## [WHAT IS THE STATE?]()

State is like a variable where we can store data to be used inside the xml code and viceversa. The great advantage with JS is that every time the state changes the component is rendered again.

```
function TodoSearch(){

  const [searchValue, setSearchValue] = React.useState('');

  return(
    <input placeholder="Cortar cebolla"
    className="TodoSearch"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}/>
  );
}
```

### Virtual DOM vs DOM

<br>
<br>

## [COUNTING TODOS: SHARING STATE BETWEEN COMPONENTS]()

Thanks to the props and the state sharing data between components is quite simple. In the following example we want to see a console log everytime the user writes something inside the input field:

As we can see the state `searchValue` and its method is passed as a prop to the TodoSeach component.

```
function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuarios buscan todos de ' + searchValue)

  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
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
```

Inside the TodoSearch component we use the props to update the state, forcing a rerendering of the App component, showing the console log.

```
function TodoSearch({searchValue, setSearchValue}){

  return(
    <input placeholder="Cortar cebolla"
    className="TodoSearch"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}/>
  );
}
```

### `!!`

`!!` this syntax allows to reduce every condition result to true or false. For example, in the code below if we do not use the `!!` the arrow function would return the value contained inside the completed property. If that value is a string we can transform that into a boolean value by using `!!`

```
todos.filter(todo => !!todo.completed);
```

<br>
<br>

## [FILTERING TODOS]()
To do the filtering process it is necessary to apply the `filter()` method to the `todos` array, the callback function will use the `includes()`method to find match between the todoText and the searchText.

Notice that both are transformed to lowercase() to find all ocurrencies.

```
function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState('');

	const completed = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	return (
		<React.Fragment>
			<TodoCounter completed={completed} total={totalTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</React.Fragment>
	);
}
```

<br>
<br>

## [COMPLETING AND DELETING TODOS]()

### Completing

The todoItem component code is the following:

```
<span
  className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
  onClick={props.onComplete}
>
```

The onClick event executes a function received as a prop. So the full logic is handled in the App component, where the code is:

```
const completeTodos = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  newTodos[todoIndex].completed = true;
  setTodos(newTodos);
};
```

In the code above the function completeTodos, receive a text parameter. A new array is created based on the original one. After that, we need to know the index of the todo selected to be completed. The changes are setted up and the state todos is updated.

In the xml code we have:

```
<TodoItem
  key={todo.text}
  text={todo.text}
  completed={todo.completed}
  onComplete={() => completeTodos(todo.text)}
  onDelete={() => deleteTodos(todo.text)}
/>
```

To prevent a function from executing immediately upon the initial rendering, it's necessary to wrap the function inside another function. By using an arrow function, React maintains a reference to the function that will be executed later based on an event, rather than executing it immediately.

### Deleting
The deleting process is identical, with the difference that the splice method is used to delete the todo selected.

```
const deleteTodos = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
};
```

<br>
<br>
<br>

# CUSTOM ICON LIBRARY

## [ICONS IN REACT: LIBRARIES AND SVG]()

Until this moment the project icons have been letters, but we will change it to SVG file type.

Inside the todoItem component, the span tag is replaced by custom components:

```
function TodoItem(props) {
	return (
		<li className='TodoItem'>
			<CompleteIcon
				className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
				onClick={props.onComplete}
			/>

			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
				{props.text}
			</p>

			<DeleteIcon className='Icon Icon-delete' onClick={props.onDelete} />
		</li>
	);
}
```

The DeleteIcon and the CompleteIcon code is the following:

```
import React from 'react';
import { TodoIcon } from './TodoIcon';

function DeleteIcon() {
	return <TodoIcon type='delete' color='red' />;
}

export { DeleteIcon };



import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon() {
	return <TodoIcon type='check' color='gray' />;
}

export { CompleteIcon };
```

As we can see in the previous snipet there are another component called TodoIcon, this component imports the svg files as components and based on what receives as a prop returns a check icon or a delete icon:

```
import { ReactComponent as CheckSVG } from '../resources/check.svg';
import { ReactComponent as DeleteSVG } from '../resources/delete.svg';

const iconTypes = {
  "check": <CheckSVG/>,
  "delete": <DeleteSVG/>,
}

function TodoIcon({ type }) {
	return (
		<span className={`Icon Icon-svg Icon-${type}`}>
			{iconTypes[type]}
		</span>
	);
}

export { TodoIcon };
```

<br>
<br>
 
  ## [ICONS WITH DYNAMICS COLORS]()
In the previous class we created an object whose properties are the SVG components, but now this properties will contain a function that will receive a paremeter called color. With this color we will change the SVG color by using the `fill` attribute.
```
import { ReactComponent as CheckSVG } from '../resources/check.svg';
import { ReactComponent as DeleteSVG } from '../resources/delete.svg';
import '../css/TodoIcon.css';

const iconTypes = {
check: (color) => <CheckSVG className='Icon-svg' fill={color} />,
delete: (color) => <DeleteSVG className='Icon-svg' fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
return (
<span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
{iconTypes[type](color)}
</span>
);
}

export { TodoIcon };

```

On the other hand, to create the hover effect we defined it in the css file, however, now we got a SVG file so, we need to make use of the `fill` property:
```

.Icon-container-check:hover .Icon-svg {
fill: green;
}

.Icon-container-delete:hover .Icon-svg {
fill: red;
}

```

  ### SVG FILL PROPERTY
- SVG Component: When you import an SVG file as a React component, you can pass props to it just like any other React component.

- `fill` Attribute: The `fill` attribute in an SVG defines the color of the shapes inside the SVG. By passing the `fill` prop to the CheckSVG and DeleteSVG components, you dynamically set the color of the SVG content.

  ### `onClick`
To be able to give functionality to the icons it is necessary to pass the props through multiple components until get to the TodoIcon, where it can execute the props passed inside an onClick event
```

function TodoIcon({ type, color, onClick }) {
return (
<span
className={`Icon-container Icon-container-${type}`}
onClick={onClick}>
{iconTypes[type](color)}
</span>
);
}
```

<br>
<br>
<br>

# ADVANCED TOOLS: SCALABILITY, ORGANIZATION AND PERSISTENCE
  ## [LOCAL STORAGE WITH REACT.JS]()
`Localstorage`allow us to save data in the browser, so if the user close the webpage or even close the browser the data will remain. But there are some specifications to make it work perfectly. The data stored in the localStorage must be a string so we must fo the following:
```
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
```
In this case we are converting the TODOS array into a string by using the `stringify()` method.

To recover the data we should use the `parse()` method, as we do in the following code:
```
const localStorageTodos = localStorage.getItem('TODOS_V1');
	let parsedTodos;

	if(!localStorageTodos)
	{
		localStorage.setItem('TODOS_V1', JSON.stringify([]));
		parsedTodos = [];
	}
	else
	{
		parsedTodos = JSON.parse(localStorageTodos);
	}
```
Fistly, we get the data from the localStorage using the `getItem()`method. If there is no data, we create the item using an empty array. On the other hand, if there is data we proceed to parse it.

  ### Data Persistence
It is important to notice that every change must be update the localStorage item and the React state, so we implemented this function:
```
const saveTodos = (newTodos) =>{
  setTodos(newTodos);
  localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
}
```

<br>
<br>

  ## [CUSTOM HOOKS]()
In this class we are making an abstraction to be able to save data in the localStorage and update the React state. In the app component the code is:
```
function App() {
	//- TODOS AND SEARCH VALUES
	const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  ...
}
```

The custom hook code is this:
```
function useLocalStorage(itemName, initialValue){
	// Checking if the item already exists
	const localStorageItem = localStorage.getItem(itemName);

	let parsedItem;

	// If not the state and the local are set to an empty array
	if(!localStorageItem){
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	}
	else{
		// If exists the item is parsed
		parsedItem = JSON.parse(localStorageItem);
	}

	// New React State where item represents the the localStorage or the initialValue
	const [item, setItem] = React.useState(parsedItem);

	// UPDATE & SAVE TODOS
	// Function to update the localStorage and the React state
	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	}

	// Exporting the React state and the function to update it
	return [item, saveItem];
}
```

As we can see the custom hooks checks if the there is something in the localStorage, after that creates a new React state to store the parsedItem from the localStorage or the initialValue parameter.

Inside the custom hook a new function is defined, this function updates the React state and the localStorage information.

Everytime the useLocalStorage() hook is called it will return a state and a method to update it.

<br>
<br>

  ## [ORGANIZATION OF FOLDERS AND FILES]()
There are lots of ways to organize the foldes and the files of a React project. The way recommended is to follow Feature-First Directories, this method is based on creating a folder to store a component and its other files related with it.

The same happens with the custom hooks, every one must be on a independent file.

<br>
<br>

  ## [REACT COMPONENTS ABSTRACTION]()
It is very common to split a component into the business management and the UI. For example, the App component is being divided:
```
function App() {
	//- TODOS AND SEARCH VALUES
	const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] = React.useState('');

	//- TODOS STATUS
	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	// FILTERING
	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	// COMPLETING TODOS
	const completeTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	// DELETING TODOS
	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	return(
		<AppUI
			completedTodos={completedTodos}
			totalTodos={totalTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
	)
}

export default App;
```

```
function AppUI({
	completedTodos,
	totalTodos,
	searchValue,
	setSearchValue,
	searchedTodos,
	completeTodo,
	deleteTodo,
}) {
	return (
		<>
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export { AppUI };
```

As we can see all of the functionalities are passed as props to the UI.

<br>
<br>

  ## [WHAT ARE THE REACT EFFECTS]()
Sometimes there are process that must be executed once not in every component rendering or after certain circuntances.

The `React.useEffect(() => {}, [])` allow us to set a function to be executed at the very first render and after every other component rendering.

The second argument (optional) is an array where we can set the variables or the stated that will trigger the `useEffect`. It means it will be executed at the very first render and after a change in the state setted up.
```
	console.log('1');
	
  React.useEffect(() => {
    console.log('Loooog 2');
  });

  React.useEffect(() => {
    console.log('Loooog 2');
  }, []);

	React.useEffect(() => {
		console.log('Loooog 2');
	}, [totalTodos]);
	
	console.log('Log 3');
```

<br>
<br>

  ## [LOAD AND ERROR STATES]()
In this class we applied the `useEffect()` to the TODOS loading, in order to get that the `useLocalStorage` hook code changed to:
```
function useLocalStorage(itemName, initialValue) {
	// New React State where item represents the the localStorage or the initialValue
	const [item, setItem] = React.useState(initialValue);
	// loading and error states
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	// useEffect to load data from localStorage
	React.useEffect(() => {
		// Checking if the item already exists
		const localStorageItem = localStorage.getItem(itemName);

		let parsedItem;

		// If not the state and the local are set to an empty array
		if (!localStorageItem) {
			localStorage.setItem(itemName, JSON.stringify(initialValue));
			parsedItem = initialValue;
		} else {
			// If exists the item is parsed
			parsedItem = JSON.parse(localStorageItem);
		}
	});

	// UPDATE & SAVE TODOS
	// Function to update the localStorage and the React state
	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	};

	// Exporting the React state, the function to update it, and the loading and error states
	return {
		item,
		saveItem,
		loading,
		error,
	};
}
```

As we can see we are returning the loading a error states, in this case to the `App.js` file:
```
const {
  item: todos,
  saveItem: saveTodos,
  loading,
  error,
} = useLocalStorage('TODOS_V1', []);
```

Notice that an object is returned, to change the properties name we have to use the `:`.

The loading and error states are sent to `AppUI.js` using props:
```
<TodoList>
  {/* Loading and error states */}
  {loading && <p>Cargando datos...</p>}
  {error && <p>Hubo en error!</p>}
  {(!loading && searchedTodos.todos === 0) && <p>Añade un TODO!</p>}

  {searchedTodos.map((todo) => (
    <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => completeTodo(todo.text)}
      onDelete={() => deleteTodo(todo.text)}
    />
  ))}
</TodoList>
```

As we can see different messages are displayed based on the props

<br>
<br>

  ## [UPDATING STATES USING `useEffect`]()


<br>
<br>
<br>

# AUTHOR
This project was developed by *Juan Cumbe*. If you have any questions or suggestions about the project, feel free to contact me via [e-mail](mailto:hello@juancumbe.com) or my [Linkedin](https://www.linkedin.com/in/juancumbeq/) profile.
```
