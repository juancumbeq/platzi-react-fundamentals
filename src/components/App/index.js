import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../../hooks/useLocalStorage';


// localStorage.removeItem('TODOS_V1', defaultTodos);

// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de Intro a React.js', completed: true },
// 	{ text: 'Llorar con la Llorona', completed: false },
// 	{ text: 'LALALALAL', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
	
function App() {
	//- TODOS AND SEARCH VALUES
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS_V1', []);
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

	return (
		<AppUI
			loading={loading}
			error={error}
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
