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
