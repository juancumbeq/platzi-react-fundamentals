import React from 'react';

function useLocalStorage(itemName, initialValue) {
	// Checking if the item already exists
	const localStorageItem = localStorage.getItem(itemName);

	let parsedItem;

	// If not the state and the local are set to an empty array
	if (!localStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} else {
		// If exists the item is parsed
		parsedItem = JSON.parse(localStorageItem);
	}

	// New React State where item represents the the localStorage or the initialValue
	const [item, setItem] = React.useState(parsedItem);

	// UPDATE & SAVE TODOS
	// Function to update the localStorage and the React state
	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	};

	// Exporting the React state and the function to update it
	return [item, saveItem];
}

export { useLocalStorage };
