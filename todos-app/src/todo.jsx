import { useState } from 'react';
import './todo.css';


function Todo() {

  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDelete = (index) =>{
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  }

  return (
    <>


      <form onSubmit={handleSubmit}>
             <h1>Cc</h1>
        <input
          type="text"
          placeholder="Add new To-do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>


      <table border={1}>
        {todos.map((todo, index) => (
          <tr key={index}>
            <td> {index} </td>
            <td>   <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span></td>
            <td className="action"> <button onClick={() => handleDelete(index)}> Delete</button> </td>


          </tr>
        ))}
      </table>
       </form>
    </>
  );
}

export default Todo;
