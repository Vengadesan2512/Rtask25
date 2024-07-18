import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
