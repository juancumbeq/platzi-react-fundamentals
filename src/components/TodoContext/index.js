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

	// MODAL STATE
	const [openModal, setOpenModal] =
		React.useState(false);

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

	// ADD TODO
	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			text,
			completed: false,
		});
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
				addTodo,
				openModal,
				setOpenModal,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}

export { TodoContext, TodoProvider };
