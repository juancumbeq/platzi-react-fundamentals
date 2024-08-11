import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';

import './App.css';

function AppUI({
	loading,
	error,
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
				{!loading && searchedTodos.todos === 0 && <EmptyTodos />}

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
