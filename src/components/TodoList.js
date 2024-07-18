import '../css/TodoList.css'

function TodoList({children}){
  return(
    <ul className="TodoList">
      {children}
    </ul>
  );
}

// Good practice, export a property objectt instead of an export default
export { TodoList };