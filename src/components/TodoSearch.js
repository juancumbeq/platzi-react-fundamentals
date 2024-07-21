import React from 'react';
import '../css/TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}){
  
  return(
    <input placeholder="Cortar cebolla"
    className="TodoSearch"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}/>
  );
}

// Good practice, export a property objectt instead of an export default
export { TodoSearch };