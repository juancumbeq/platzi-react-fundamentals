# React.js Fundamentals Course

<p align="center">
  <img src="https://img.shields.io/badge/Course-Finished%20-brightgreen"/>
</p>

<br>

# LEARNINGS

This is my first React application. I've tested the technology before, but never developed a full application. I learned a lot from this course:

- Components Props
- React Events
- `useState()` hook
- Local storage management
- Custom hooks
- `useEffeect()` hook
- Loading and error states
- Loading skeletons
- React Context with `useContext()` hook
- React Portals

<br>

# WIREFRAMES

[https://www.figma.com/design/3aZkIjXMEzBDACmWxqUVes/TODO-Machine-Mockup?node-id=0-1](https://www.figma.com/design/3aZkIjXMEzBDACmWxqUVes/TODO-Machine-Mockup?node-id=0-1)

<br>

# PROTOTYPE

[https://www.figma.com/proto/3aZkIjXMEzBDACmWxqUVes/TODO-Machine-Mockup?type=design&amp%3Bnode-id=1-3&amp%3Bt=NH0HT6nS2TxaLKp4-1&amp%3Bscaling=min-zoom&amp%3Bpage-id=0%3A1&amp%3Bstarting-point-node-id=1%3A3&amp%3Bmode=design&node-id=1-3&starting-point-node-id=1%3A3](https://www.figma.com/proto/3aZkIjXMEzBDACmWxqUVes/TODO-Machine-Mockup?type=design&amp%3Bnode-id=1-3&amp%3Bt=NH0HT6nS2TxaLKp4-1&amp%3Bscaling=min-zoom&amp%3Bpage-id=0%3A1&amp%3Bstarting-point-node-id=1%3A3&amp%3Bmode=design&node-id=1-3&starting-point-node-id=1%3A3)

<br>

# DEMO

[https://juancumbeq.github.io/platzi-react-fundamentals/](https://juancumbeq.github.io/platzi-react-fundamentals/)

<br>

# HOW TO TRY THIS PROJECT ON LOCAL

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

## `npm run eject`

Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

<br>

# INDEX

- [LAYOUT WITH REACT.JS](#layout-with-reactjs)

  - [WHAT IS A COMPONENT](#what-is-a-component)
    - [Functional Components](#functional-components)
    - [Class Components](#class-components)
  - [HOW THE COMPONENTS COMUNICATE: PROPS AND ATTRIBUTES](#how-the-components-comunicate-props-and-attributes)
    - [React Fragment](#react-fragment)
    - [Children](#children)
    - [Map method](#map-method)
    - [Keys](#keys)
    - [Props](#props)
  - [CSS STYLES IN REACT](#css-styles-in-react)
    - [Inline styles](#inline-styles)
    - [Stylesheets](#stylesheets)
    - [Dynamic classes](#dynamic-classes)

- [INTERACTION WITH REACT.JS](#interaction-with-reactjs)

  - [REACT EVENTS: ONCLICK, ONCHANGE](#react-events-onclick-onchange)
  - [WHAT IS THE STATE?](#what-is-the-state)
  - [COUNTING TODOS: SHARING STATE BETWEEN COMPONENTS](#counting-todos-sharing-state-between-components)
    - [`!!`](#!!)
  - [FILTERING TODOS](#filtering-todos)
  - [COMPLETING AND DELETING TODOS](#completing-and-deleting-todos)
    - [Completing](#completing)
    - [Deleting](#deleting)

- [CUSTOM ICON LIBRARY](#custom-icon-library)

  - [ICONS IN REACT: LIBRARIES AND SVG](#icons-in-react-libraries-and-svg)
  - [ICONS WITH DYNAMICS COLORS](#icons-with-dynamics-colors)
    - [`onClick`](#onclick)
      - [SVG fill property](#svg-fill-property)

- [ADVANCED TOOLS: SCALABILITY, ORGANIZATION AND PERSISTENCE](#advanced-tools-scalability-organization-and-persistence)

  - [LOCAL STORAGE WITH REACT.JS](#local-storage-with-reactjs)
    - [Data Persistence](#data-persistence)
  - [CUSTOM HOOKS](#custom-hooks)
  - [ORGANIZATION OF FOLDERS AND FILES](#organization-of-folders-and-files)
  - [REACT COMPONENTS ABSTRACTION](#react-components-abstraction)
  - [WHAT ARE THE REACT EFFECTS](#what-are-the-react-effects)
  - [LOAD AND ERROR STATES](#load-and-error-states)
  - [UPDATING STATES USING `useEffect`](#updating-states-using-useeffect)
  - [LOADING SKELETONS](#loading-skeletons)
  - [REACT CONTEXT](#react-context)
    - [`createContext()`](#createcontext)
    - [Render Functions](#render-functions)
  - [`useContext()`](#usecontext)
  - [REACT PORTALS](#react-portals)
  - [REACT FORMS LAYOUT](#react-forms-layout)
  - [REACT CONTEXT INSIDE REACT PORTALS](#react-context-inside-react-portals)

- [DEPLOY](#deploy)

  - [GITHUB PAGES](#github-pages)
    - [`npm run build`](#npm-run-build-1)
    - [`gh-pages` BRANCH](#gh-pages-branch)
    - [CUSTOM COMMANDS](#custom-commands)

- [REACT: #UNDERTHEHOOD](#react-underthehood)

  - [REACT 18](#react-18)
  - [REACT 17](#react-17)

- [CREATING REACT PROYECTS FROM SCRATCH](#creating-react-proyects-from-scratch)

  - [CREATE REACT APP](#crate-react-app)
  - [NEXT.JS](#nextjs)
  - [VITE](#vite)

- [AUTHOR](#author)

<br>
<br>
<br>

# LAYOUT WITH REACT.JS

## [WHAT IS A COMPONENT]()

A React component is a fundamental building block of a React application. It is a reusable piece of code that represents part of the user interface. Components can be thought of as custom HTML elements, and they can be nested, managed, and handled independently.

React components come in two main types: functional components and class components.

### Functional Components

Functional components are the simpler and more modern way to create components. They are JavaScript functions that return React elements (which are the objects that describe what you want to see on the screen).

Here's an example of a functional component:

```javascript
import React from 'react';

function Greeting(props) {
	return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
```

### Class Components

Class components were the traditional way to create components before the introduction of Hooks in React 16.8. They are ES6 classes that extend from React.Component.

Here's an example of a class component:

```javascript
import React, { Component } from 'react';

class Greeting extends Component {
	render() {
		return <h1>Hello, {this.props.name}!</h1>;
	}
}

export default Greeting;
```

<br>
<br>
  
## [HOW THE COMPONENTS COMUNICATE: PROPS AND ATTRIBUTES]()

### React Fragment

React can only return a single tag in a component's structure. However, if we don't want to wrap the entire component content inside a `<div>` tag, we can use the `<React.Fragment>` tag. This tag is used for returning elements but doesn't appear in the final HTML.

```javascript
<React.Fragment>
	<TodoCounter completed={16} total={25} />
	<TodoSearch />
	<TodoList>
		<TodoItem />
		<TodoItem />
		<TodoItem />
	</TodoList>

	<CreateTodoButton />
</React.Fragment>
```

Another option is to delete the words: `React.Fragment` and it will work.

### Children

There are two types of tags: those that require both an opening and closing tag, and those that only need an opening tag. The first type can contain multiple components, which are rendered using the `children` property.

```javascript
<TodoList>
	<TodoItem />
	<TodoItem />
	<TodoItem />
</TodoList>
```

This way, we can access the `children` property and use it to render other components.

```javascript
function TodoList({ children }) {
	return <ul>{children}</ul>;
}
```

### Map method

The information inside the `TodoItem` must be dynamic, meaning it should change based on external data. In the following example, we use an array to render a `TodoItem` for each element in the array:

```javascript
<TodoList>
	{defaultTodos.map((todo) => (
		<TodoItem
			key={todo.text}
			text={todo.text}
			completed={todo.completed}
		/>
	))}
</TodoList>
```

Notice that it is required to use the `.map()`method.

### Keys

It's important that each child has a specific key to differentiate it from the others.

```javascript
<TodoItem
  key={todo.text}>
```

### Props

The information contained in every array element is passed to a component using the props.

```javascript
<TodoItem
	key={todo.text}
	text={todo.text}
	completed={todo.completed}
/>
```

This is a method to send information that can be manipulated inside the component:

```javascript
function TodoItem(props) {
	return (
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

In the example below, an object can be created with CSS rules and then used within the JSX code as a variable.

Note that the CSS property names use camelCase, which differs from traditional CSS syntax.

```javascript
const estilos = {
	backgroundColor: 'red',
};

function TodoCounter({ total, completed }) {
	return (
		<h1 style={estilos}>
			Has completado {completed} de {total} TODOS
		</h1>
	);
}
```

A shortcut can be applied by defining the properties object directly inside the `style` attribute. Note that double `{{}}` braces are necessary.

```javascript
function TodoCounter({ total, completed }) {
	return (
		<h1
			style={{
				backgroundColor: 'red',
				fontSize: 24,
			}}
		>
			Has completado {completed} de {total} TODOS
		</h1>
	);
}
```

### Stylesheets

Another option is to use stylesheets, where traditional CSS syntax can be used. The CSS file must be imported into the component file for the styles to be applied.

```css
h1 {
	font-size: 24px;
	text-align: center;
	margin: 0;
	padding: 48px;
}
```

```javascript
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
	return (
		<h1>
			Has completado {completed} de {total} TODOS
		</h1>
	);
}
```

After the web page is rendered, all the CSS files used can be found within the `<head>` tag.

### Dynamic classes

When applying styles to XML tags, we can use static classes, as shown in the example below.

```javascript
function TodoItem(props) {
	return (
		<li className='TodoItem'>
			<span className='Icon Icon-check Icon-check--active'>
				V
			</span>
			<p className='TodoItem-p TodoItem-p--complete'>
				{props.text}
			</p>
			<span className='Icon Icon-delete'>X</span>
		</li>
	);
}
```

However, if we want to use certain classes based on conditions, such as the task's completion status, we need to use dynamic classes. The syntax differs because template literals must be used.

```javascript
function TodoItem(props) {
	return (
		<li className='TodoItem'>
			<span
				className={`Icon Icon-check ${
					props.completed && 'Icon-check--active'
				}`}
			>
				V
			</span>
			<p
				className={`TodoItem-p ${
					props.completed &&
					'TodoItem-p--complete'
				}`}
			>
				{props.text}
			</p>
			<span className='Icon Icon-delete'>X</span>
		</li>
	);
}
```

The line below is a JavaScript expression that evaluates the completed property and, if it is true, inserts the "Icon-check--active" class.

```javascript
${props.completed && "Icon-check--active"}
```

<br>
<br>
<br>

# INTERACTION WITH REACT.JS

## [REACT EVENTS: ONCLICK, ONCHANGE]()

Events in React must be written using camelCase. Unlike in JavaScript or HTML, the event handlers must be functions, because React transforms each onClick, onChange, etc., into an eventListener.

```javascript
function CreateTodoButton() {
	return (
		<button
			className='CreateTodoButton'
			onClick={() =>
				console.log('le diste click')
			}
		>
			+
		</button>
	);
}
```

<br>
<br>

## [WHAT IS THE STATE?]()

State is like a variable used to store data for use within the JSX code and vice versa. The great advantage of using state in JavaScript is that every time the state changes, the component is re-rendered automatically.

```javascript
function TodoSearch() {
	const [searchValue, setSearchValue] =
		React.useState('');

	return (
		<input
			placeholder='Cortar cebolla'
			className='TodoSearch'
			value={searchValue}
			onChange={(event) => {
				setSearchValue(event.target.value);
			}}
		/>
	);
}
```

<br>
<br>

## [COUNTING TODOS: SHARING STATE BETWEEN COMPONENTS]()

Thanks to props and state, sharing data between components is quite simple. In the following example, we want to see a console log every time the user types something into the input field.

As we can see the state `searchValue` and its method is passed as a prop to the `TodoSeach` component.

```javascript
function App() {
	const [searchValue, setSearchValue] =
		React.useState('');
	console.log(
		'Los usuarios buscan todos de ' + searchValue
	);

	return (
		<React.Fragment>
			<TodoCounter completed={16} total={25} />
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			{/* React treats all the content insider a tag as the children property */}
			<TodoList>
				{defaultTodos.map((todo) => (
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

Inside the `TodoSearch` component, we use the props to update the state, which forces a re-render of the App component and displays the console log.

```javascript
function TodoSearch({
	searchValue,
	setSearchValue,
}) {
	return (
		<input
			placeholder='Cortar cebolla'
			className='TodoSearch'
			value={searchValue}
			onChange={(event) => {
				setSearchValue(event.target.value);
			}}
		/>
	);
}
```

### `!!`

The `!!` syntax reduces any value to either true or false. For example, in the code below, if we do not use `!!`, the arrow function would return the value contained in the completed property. If that value is a string, we can transform it into a boolean value by using `!!`.

```javascript
todos.filter((todo) => !!todo.completed);
```

<br>
<br>

## [FILTERING TODOS]()

To do the filtering process it is necessary to apply the `filter()` method to the `todos` array, the callback function will use the `includes()`method to find a match between the `todoText` and the `searchText`.

Notice that both are transformed to lowercase to find all ocurrencies.

```javascript
function App() {
	const [todos, setTodos] =
		React.useState(defaultTodos);
	const [searchValue, setSearchValue] =
		React.useState('');

	const completed = todos.filter(
		(todo) => !!todo.completed
	).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	return (
		<React.Fragment>
			<TodoCounter
				completed={completed}
				total={totalTodos}
			/>
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
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

The `todoItem` component code is the following:

```javascript
<span
  className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
  onClick={props.onComplete}
>
```

The `onClick` event executes a function received as a prop. So the full logic is handled in the App component, where the code is:

```javascript
const completeTodos = (text) => {
	const newTodos = [...todos];
	const todoIndex = newTodos.findIndex(
		(todo) => todo.text === text
	);
	newTodos[todoIndex].completed = true;
	setTodos(newTodos);
};
```

In the code above, the `completeTodos` function receives a text parameter. A new array is created based on the original one. We then determine the index of the selected todo item to be marked as completed. The changes are applied, and the state todos is updated.

In the JSX code, we have:

```javascript
<TodoItem
	key={todo.text}
	text={todo.text}
	completed={todo.completed}
	onComplete={() => completeTodos(todo.text)}
	onDelete={() => deleteTodos(todo.text)}
/>
```

To prevent a function from executing immediately upon initial rendering, you need to wrap it in another function. By using an arrow function, React maintains a reference to the function, which will be executed later in response to an event, rather than executing it immediately.

### Deleting

The deletion process is similar, with the difference that the `splice` method is used to remove the selected todo item.

```javascript
const deleteTodos = (text) => {
	const newTodos = [...todos];
	const todoIndex = newTodos.findIndex(
		(todo) => todo.text === text
	);
	newTodos.splice(todoIndex, 1);
	setTodos(newTodos);
};
```

<br>
<br>
<br>

# CUSTOM ICON LIBRARY

## [ICONS IN REACT: LIBRARIES AND SVG]()

Until now, the project icons have been letters, but we will change them to SVG file types.

Inside the `TodoItem` component, the `<span>` tag is replaced by custom components:

```javascript
function TodoItem(props) {
	return (
		<li className='TodoItem'>
			<CompleteIcon
				className={`Icon Icon-check ${
					props.completed && 'Icon-check--active'
				}`}
				onClick={props.onComplete}
			/>

			<p
				className={`TodoItem-p ${
					props.completed &&
					'TodoItem-p--complete'
				}`}
			>
				{props.text}
			</p>

			<DeleteIcon
				className='Icon Icon-delete'
				onClick={props.onDelete}
			/>
		</li>
	);
}
```

The `DeleteIcon` and the `CompleteIcon` code is the following:

```javascript
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

As we can see in the previous snippet, there is another component called TodoIcon. This component imports the SVG files as components and, based on the props it receives, returns either a check icon or a delete icon.

```javascript
import { ReactComponent as CheckSVG } from '../resources/check.svg';
import { ReactComponent as DeleteSVG } from '../resources/delete.svg';

const iconTypes = {
	check: <CheckSVG />,
	delete: <DeleteSVG />,
};

function TodoIcon({ type }) {
	return (
		<span
			className={`Icon Icon-svg Icon-${type}`}
		>
			{iconTypes[type]}
		</span>
	);
}

export { TodoIcon };
```

<br>
<br>

## [ICONS WITH DYNAMICS COLORS]()

In the previous class, we created an object where the properties were SVG components. Now, these properties will contain a function that receives a parameter called color. This color will be used to change the SVG color by using the `fill` attribute.

```javascript
import { ReactComponent as CheckSVG } from '../resources/check.svg';
import { ReactComponent as DeleteSVG } from '../resources/delete.svg';
import '../css/TodoIcon.css';

const iconTypes = {
check: (color) => <CheckSVG className='Icon-svg' fill={color} />,
delete: (color) => <DeleteSVG className='Icon-svg' fill={color} />,
};
<!-- prettier-ignore-start -->
function TodoIcon({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
```

On the other hand, to create the hover effect we defined it in the css file, however, now we got a SVG file so, we need to make use of the `fill` property:

```css
.Icon-container-check:hover .Icon-svg {
	fill: green;
}

.Icon-container-delete:hover .Icon-svg {
	fill: red;
}
```

### SVG fill property

SVG Component: When you import an SVG file as a React component, you can pass props to it just like any other React component.

`fill` Attribute: The `fill` attribute in an SVG defines the color of the shapes inside the SVG. By passing the `fill` prop to the CheckSVG and DeleteSVG components, you dynamically set the color of the SVG content.

### `onClick`

To give functionality to the icons, it is necessary to pass props through multiple components until they reach the TodoIcon component. There, the props can be used to execute an `onClick` event.

```javascript
function TodoIcon({ type, color, onClick }) {
	return (
		<span
			className={`Icon-container Icon-container-${type}`}
			onClick={onClick}
		>
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

`localStorage` allows us to save data in the browser, so even if the user closes the webpage or the browser, the data will remain. However, there are some specifications to ensure it works correctly. The data stored in `localStorage` must be a string, so we need to do the following:

```javascript
localStorage.setItem(
	'TODOS_V1',
	JSON.stringify(defaultTodos)
);
```

In this case we are converting the TODOS array into a string by using the `stringify()` method.

To recover the data we should use the `parse()` method, as we do in the following code:

```javascript
const localStorageTodos =
	localStorage.getItem('TODOS_V1');
let parsedTodos;

if (!localStorageTodos) {
	localStorage.setItem(
		'TODOS_V1',
		JSON.stringify([])
	);
	parsedTodos = [];
} else {
	parsedTodos = JSON.parse(localStorageTodos);
}
```

Firstly, we retrieve the data from `localStorage` using the `getItem()` method. If no data is found, we initialize the item with an empty array. If data is present, we proceed to parse it.

### Data Persistence

It is important to ensure that every change updates both the `localStorage` item and the React state. To achieve this, we implemented the following function:

```javascript
const saveTodos = (newTodos) => {
	setTodos(newTodos);
	localStorage.setItem(
		'TODOS_V1',
		JSON.stringify(newTodos)
	);
};
```

<br>
<br>

## [CUSTOM HOOKS]()

In this class, we create an abstraction to save data in `localStorage` and update the React state. In the App component, the code is:

```javascript
function App() {
  //- TODOS AND SEARCH VALUES
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  ...
}
```

Custom hook code:

```javascript
function useLocalStorage(itemName, initialValue) {
	// Checking if the item already exists
	const localStorageItem =
		localStorage.getItem(itemName);

	let parsedItem;

	// If not the state and the local are set to an empty array
	if (!localStorageItem) {
		localStorage.setItem(
			itemName,
			JSON.stringify(initialValue)
		);
		parsedItem = initialValue;
	} else {
		// If exists the item is parsed
		parsedItem = JSON.parse(localStorageItem);
	}

	// New React State where item represents the the localStorage or the initialValue
	const [item, setItem] =
		React.useState(parsedItem);

	// UPDATE & SAVE TODOS
	// Function to update the localStorage and the React state
	const saveItem = (newItem) => {
		localStorage.setItem(
			itemName,
			JSON.stringify(newItem)
		);
		setItem(newItem);
	};

	// Exporting the React state and the function to update it
	return [item, saveItem];
}
```

As we can see, the custom hook checks if there is data in `localStorage`. It then creates a new React state to store either the parsed item from `localStorage` or the `initialValue` parameter.

Inside the custom hook, a function is defined to update both the React state and the `localStorage` data.

Every time the `useLocalStorage()` hook is called, it returns the state and a method to update it.

<br>
<br>

## [ORGANIZATION OF FOLDERS AND FILES]()

There are many ways to organize the folders and files in a React project. The recommended approach is to follow Feature-First Directories. This method involves creating a folder to store a component and its related files.

The same principle applies to custom hooks; each one should be in its own independent file.

<br>
<br>

## [REACT COMPONENTS ABSTRACTION]()

It is common to split a component into business logic and UI components. For example, the App component can be divided into:

```javascript
function App() {
	//- TODOS AND SEARCH VALUES
	const [todos, saveTodos] = useLocalStorage(
		'TODOS_V1',
		[]
	);
	const [searchValue, setSearchValue] =
		React.useState('');

	//- TODOS STATUS
	const completedTodos = todos.filter(
		(todo) => !!todo.completed
	).length;
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
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	// DELETING TODOS
	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	return (
		<AppUI
			completedTodos={completedTodos}
			totalTodos={totalTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
		/>
	);
}

export default App;
```

```javascript
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
			<TodoCounter
				completed={completedTodos}
				total={totalTodos}
			/>
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>
			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() =>
							completeTodo(todo.text)
						}
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

As we can see, all of the functionalities are passed as props to the UI component.

<br>
<br>

## [WHAT ARE THE REACT EFFECTS]()

Sometimes there are processes that need to be executed only once, not on every component render, or after certain conditions are met.

The `React.useEffect(() => {}, [])` hook allows us to specify a function to be executed on the very first render and after every subsequent render.

The second argument (optional) is an array where we can specify the variables or states that will trigger the `useEffect`. This means it will be executed on the initial render and whenever there is a change in the specified state variables.

```javascript
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

```javascript
function useLocalStorage(itemName, initialValue) {
	// New React State where item represents the the localStorage or the initialValue
	const [item, setItem] =
		React.useState(initialValue);
	// loading and error states
	const [loading, setLoading] =
		React.useState(true);
	const [error, setError] = React.useState(false);

	// useEffect to load data from localStorage
	React.useEffect(() => {
		// Checking if the item already exists
		const localStorageItem =
			localStorage.getItem(itemName);

		let parsedItem;

		// If not the state and the local are set to an empty array
		if (!localStorageItem) {
			localStorage.setItem(
				itemName,
				JSON.stringify(initialValue)
			);
			parsedItem = initialValue;
		} else {
			// If exists the item is parsed
			parsedItem = JSON.parse(localStorageItem);
		}
	});

	// UPDATE & SAVE TODOS
	// Function to update the localStorage and the React state
	const saveItem = (newItem) => {
		localStorage.setItem(
			itemName,
			JSON.stringify(newItem)
		);
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

```javascript
const {
	item: todos,
	saveItem: saveTodos,
	loading,
	error,
} = useLocalStorage('TODOS_V1', []);
```

Notice that an object is returned, to change the properties name we have to use the `:`.

The loading and error states are sent to `AppUI` using props:

```javascript
<TodoList>
	{/* Loading and error states */}
	{loading && <p>Cargando datos...</p>}
	{error && <p>Hubo en error!</p>}
	{!loading && searchedTodos.todos === 0 && (
		<p>Añade un TODO!</p>
	)}

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

As we can see different messages are displayed based on the props.

<br>
<br>

## [UPDATING STATES USING `useEffect`]()

Until this moment we have not been updating the loading and error states.

```javascript
function useLocalStorage(itemName, initialValue) {
	// New React State where item represents the the localStorage or the initialValue
	const [item, setItem] =
		React.useState(initialValue);
	// loading and error states
	const [loading, setLoading] =
		React.useState(true);
	const [error, setError] = React.useState(false);

	// useEffect to load data from localStorage
	React.useEffect(() => {
		setTimeout(() => {
			try {
				// Checking if the item already exists
				const localStorageItem =
					localStorage.getItem(itemName);

				let parsedItem;

				// If not the state and the local are set to an empty array
				if (!localStorageItem) {
					localStorage.setItem(
						itemName,
						JSON.stringify(initialValue)
					);
					parsedItem = initialValue;
				} else {
					// If exists the item is parsed
					parsedItem = JSON.parse(
						localStorageItem
					);
					setItem(parsedItem);
				}

				// Change loading state after finishing process
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(true);
				console.log(error);
			}
		}, 2000);
	}, []);

	// UPDATE & SAVE TODOS
	// Function to update the localStorage and the React state
	const saveItem = (newItem) => {
		localStorage.setItem(
			itemName,
			JSON.stringify(newItem)
		);
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

Notice that there are few changes in the code above:

1. The code is enclosed in a `try-catch` block
2. The state setters are configured to handle data loading completion or errors.
3. The entire `useEffect` code is wrapped inside a `setTimeout` function to emulate the time taken in data loading.
4. It is necessary to define an `[]` empty array to execute the `useEffect` only on the initial render.

<br>
<br>

## [LOADING SKELETONS]()

Loading skeletons serve as placeholders to indicate to the user that data is being loaded.

To achieve this, another component with its own CSS file is created:

```javascript
import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
	return (
		<div className='LoadingTodo-container'>
			<span className='LoadingTodo-completeIcon'></span>
			<span className='LoadingTodo-text'></span>
			<span className='LoadingTodo-deleteIcon'></span>
		</div>
	);
}

export { TodosLoading };
```

<br>
<br>

## [REACT CONTEXT]()

Prop drilling in React refers to the process of passing data from a parent component down through multiple layers of nested child components via props, even when only the deepest child needs the data. This often happens when a value or function from a top-level component needs to be accessed by a deeply nested child component.

### `createContext()`

```javascript
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
	//- TODOS AND SEARCH VALUES
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', []);
	const [searchValue, setSearchValue] =
		React.useState('');

	//- TODOS STATUS
	const completedTodos = todos.filter(
		(todo) => !!todo.completed
	).length;
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
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	// DELETING TODOS
	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex(
			(todo) => todo.text === text
		);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

	// PROVIDER RETURN
	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				completedTodos,
				totalTodos,
				searchValue,
				setSearchValue,
				searchedTodos,
				completeTodo,
				deleteTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
```

All the code previously in the App component is moved to the `TodoContext` component, which will provide all the todos data using custom hooks.

In the code above, the context is created using `createContext()`. Additionally, a `Provider` component must be created. This component is responsible for providing the specific data required by the components.

The `TodoProvider` component receives another component as an argument `(children)`. In the return statement, this argument is placed inside the `TodoContext.Provider` tag.

It is important to note that the value attribute in the return statement represents an object containing all the methods and information managed by the `TodoProvider`. This allows any wrapped component to access the necessary information and methods.

### Render Functions

```javascript
function AppUI() {
	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoContext.Consumer>
				{({
					loading,
					error,
					searchedTodos,
					completeTodo,
					deleteTodo,
				}) => (
					<TodoList>
						{/_ Loading and error states _/}
						{loading && (
							<>
								<TodosLoading />
								<TodosLoading />
								<TodosLoading />
								<TodosLoading />
							</>
						)}
						{error && <TodosError />}
						{!loading &&
							searchedTodos.todos === 0 && (
								<EmptyTodos />
							)}

						{searchedTodos.map((todo) => (
							<TodoItem
								key={todo.text}
								text={todo.text}
								completed={todo.completed}
								onComplete={() =>
									completeTodo(todo.text)
								}
								onDelete={() =>
									deleteTodo(todo.text)
								}
							/>
						))}
					</TodoList>
				)}
			</TodoContext.Consumer>

			<CreateTodoButton />
		</>
	);
}
```

After the context is created, a `Consumer` tag is used to render the children components. The `Consumer` tag uses a render function that receives a parameter—an object containing the methods and data required by the children components.

<br>
<br>

## [`useContext()`]()

`useContext()` is the React hook that allow us to use a React context created previously, inside a component.

```javascript
import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
	const { searchValue, setSearchValue } =
		React.useContext(TodoContext);

	return (
		<input
			placeholder='Cortar cebolla'
			className='TodoSearch'
			value={searchValue}
			onChange={(event) => {
				setSearchValue(event.target.value);
			}}
		/>
	);
}

// Good practice, export a property object instead of an export default
export { TodoSearch };
```

In the code above, the context is imported, allowing us to access any method or value provided by this context inside our component using `useContext()`.

This method has several advantages:

- It eliminates the need to use `<TodoContext.Consumer>`.
- It avoids the need for render functions.
- It keeps the code much cleaner.

<br>
<br>

## [REACT PORTALS]()

React Portals are like doors that allow us to move a component to another HTML node. For example, it is common to render the entire application within an HTML node called App. React Portals enable us to move a component and render it inside a different HTML node, such as a modal.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
	return ReactDOM.createPortal(
		<div className='Modal'>{children}</div>,
		document.getElementById('modal')
	);
}

export { Modal };
```

In the code above, the `createPortal()` method takes two parameters: the first is the element to be inserted, and the second is the target node where this element will be inserted.

<br>
<br>

## [REACT FORMS LAYOUT]()

Inside the Modal component, there is a form that appears or disappears every time the `+` icon is clicked.

```javascript
import React from 'react';
import './TodoForm.css';

function TodoForm() {
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
			}}
		>
			<label>Escribe tu nuevo TODO</label>
			<textarea placeholder='Cortar cebolla para el almuerzo' />
			<div className='TodoForm-buttonContainer'>
				<button
					type=''
					className='TodoForm-button TodoForm-button--cancel'
				>
					Cancelar
				</button>
				<button
					type='submit'
					className='TodoForm-button TodoForm-button--add'
				>
					Añadir
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
```

It's important to note that, by default, every button in a form is of type `submit` unless another type is specified. Another key aspect is that using `preventDefault()` prevents the page from reloading when the submit button is clicked.

This reloading typically occurs because the form data is sent to a specified URL. If no URL is specified, the data is sent to the same page, causing the page to reload.

<br>
<br>

## [REACT CONTEXT INSIDE REACT PORTALS]()

```javascript
import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
	// CONTEXT DATA
	const { addTodo, setOpenModal } =
		React.useContext(TodoContext);

	// LOCAL STATE
	const [newTodoValue, setNewTodoValue] =
		React.useState('');

	// SUBMIT BUTTON
	const onSubmit = (event) => {
		event.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	// CANCEL BUTTON
	const onCancel = () => {
		setOpenModal(false);
	};

	// VALUE CAPTURE
	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Escribe tu nuevo TODO</label>
			<textarea
				placeholder='Cortar cebolla para el almuerzo'
				value={newTodoValue}
				onChange={onChange}
			/>
			<div className='TodoForm-buttonContainer'>
				<button
					type=''
					className='TodoForm-button TodoForm-button--cancel'
					onClick={onCancel}
				>
					Cancelar
				</button>
				<button
					type='submit'
					className='TodoForm-button TodoForm-button--add'
				>
					Añadir
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
```

In the code above, we set up various functions to manage the data collected from the form. As we can see, the global context is used to access specific methods needed for handling the form data.

<br>
<br>

# DEPLOY

## [GITHUB PAGES]()

### `npm run build`

Help us create a production version of our application. This new version will be based on static files like HTML and JavaScript, without needing a Node.js server.

It is important to edit the `package.json` file properly because the `homepage` property will determine how the build command sets the routes inside the HTML file.

```json
"homepage": "https://juancumbeq.github.io/platzi-react-fundamentals"
```

### `gh-pages` BRANCH

`gh-pages` is a tool that allows us to create another branch containing only the build files and also enables us to deploy our application to GitHub Pages.

`npm i --save-dev gh-pages` is the command to install this tool.

### CUSTOM COMMANDS

```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

With the `predeploy` command, we create the build directory. On the other hand, with the `deploy` command, we use `gh-pages` to deploy the contents of our build folder directly to the GitHub server.

<br>
<br>

# REACT: #UNDERTHEHOOD

## [DIFFERENCES BETWEEN REACT.JS VERSIONS]()

It is important to know and master how to change between the different React versions.

### REACT 18

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(
	document.getElementById('root')
);

root.render(<App />);
```

### REACT 17

```javascript
import React from 'react';
import './index.css';
import App from './components/App';
import { render } from 'react-dom';

const root = document.getElementById('root');
render(<App tab='home' />, root);
```

<br>
<br>

# CREATING REACT PROYECTS FROM SCRATCH

## [CREATE REACT APP]()

`npx create-react-app app-name` is the most popular command to create a React app from scratch.

<br>

## [NEXT.JS]()

Next.js is a framework based on React.js

`npx create-next-app@lastest app-name`

<br>

## [VITE]()

`npm create vite@lastest app-name `

<br>
<br>
<br>

# AUTHOR

This project was developed by _Juan Cumbe_. If you have any questions or suggestions about the project, feel free to contact me via [e-mail](mailto:hello@juancumbe.com) or my [Linkedin](https://www.linkedin.com/in/juancumbeq/) profile.