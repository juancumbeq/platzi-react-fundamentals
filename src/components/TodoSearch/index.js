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
