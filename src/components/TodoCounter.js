import '../css/TodoCounter.css';

function TodoCounter({ total, completed }) {
	if (completed === total) {
		return (
			<h1 className='TodoCounter'>
				<span>Felicidades </span>
				<span>has completado todos los </span>TODOS
			</h1>
		);
	} else {
		return (
			<h1 className='TodoCounter'>
				Has completado
				<span> {completed} </span>de
				<span> {total} </span>TODOS
			</h1>
		);
	}
}

// Good practice, export a property objectt instead of an export default
export { TodoCounter };
