import '../css/TodoSearch.css'

function TodoSearch(){
  return(
    <input placeholder="Cortar cebolla"
    className="TodoSearch"/>
  );
}

// Good practice, export a property objectt instead of an export default
export { TodoSearch };