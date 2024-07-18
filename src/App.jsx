
import './App.css'

import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoFrom';
import Filter from './components/Filter';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, status: 'not completed' }]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
