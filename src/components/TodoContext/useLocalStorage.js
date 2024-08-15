import React from 'react';

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

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1', defaultTodos);

// const defaultTodos = [
// 	{ text: 'Cortar cebolla', completed: true },
// 	{ text: 'Tomar el curso de Intro a React.js', completed: true },
// 	{ text: 'Llorar con la Llorona', completed: false },
// 	{ text: 'LALALALAL', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
