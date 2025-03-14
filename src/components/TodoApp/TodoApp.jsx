import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleClick = () => {
    if (newTodo.trim() === '') return; // Prevent empty todos
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          value={newTodo} 
          placeholder="Enter a todo" 
          onChange={handleOnChange}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text} 
            <button onClick={() => toggleStatus(item.id)}>
              {item.completed ? 'Completed' : 'Pending'}
            </button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
