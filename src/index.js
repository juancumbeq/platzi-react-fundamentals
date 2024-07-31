// Import the React library which is essential for building React components
import React from 'react';

// Import the ReactDOM library which is used for rendering React components to the DOM
import ReactDOM from 'react-dom/client';

// Import the CSS file for styling the application
import './index.css';

// Import the main App component from the local 'App' module
import App from './components/App';

// Create a root element where the React application will be rendered
// `document.getElementById('root')` selects the HTML element with the id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element in the DOM
// This will display the contents of the App component inside the element with id 'root'
root.render(<App />);
