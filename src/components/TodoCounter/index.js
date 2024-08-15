import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
	const { completedTodos, totalTodos } =
		React.useContext(TodoContext);

	if (completedTodos === totalTodos) {
		return (
			<h1 className='TodoCounter'>
				<span>Felicidades </span>
				<span>has completado todos los </span>
				TODOS
			</h1>
		);
	} else {
		return (
			<h1 className='TodoCounter'>
				Has completado
				<span> {completedTodos} </span>de
				<span> {totalTodos} </span>TODOS
			</h1>
		);
	}
}

// Good practice, export a property objectt instead of an export default
export { TodoCounter };
