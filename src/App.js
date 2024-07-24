import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

import React from 'react';

import './css/App.css';

// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de Intro a React.js', completed: true },
// 	{ text: 'Llorar con la Llorona', completed: false },
// 	{ text: 'LALALALAL', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1', defaultTodos);


function App() {
	// LOCAL STORAGE
	const localStorageTodos = localStorage.getItem('TODOS_V1');
	let parsedTodos;

	if(!localStorageTodos)
	{
		localStorage.setItem('TODOS_v1', JSON.stringify([]));
		parsedTodos = [];
	}
	else
	{
		parsedTodos = JSON.parse(localStorageTodos);
	}

	//- TODOS AND SEARCH VALUES
	const [todos, setTodos] = React.useState(parsedTodos);
	const [searchValue, setSearchValue] = React.useState('');

	//- TODOS STATUS
	const completed = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	// FILTERING
	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	// UPDATE & SAVE TODOS
	const saveTodos = (newTodos) =>{
		setTodos(newTodos);
		localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
	}

	// COMPLETING TODOS
	const completeTodos = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	// DELETING TODOS
	const deleteTodos = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	};

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
						onComplete={() => completeTodos(todo.text)}
						onDelete={() => deleteTodos(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
