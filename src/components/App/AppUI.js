import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

import './App.css';

function AppUI() {
	const { openModal, setOpenModal } =
		React.useContext(TodoContext);

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
						{/* Loading and error states */}
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

			<CreateTodoButton
				setOpenModal={setOpenModal}
			/>

			{openModal && (
				<Modal>
					<TodoForm></TodoForm>
				</Modal>
			)}
		</>
	);
}

export { AppUI };
