import React, { useState } from 'react';
import '../styles/TodoFrom.css';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && description.trim()) {
      addTodo({
        id: Date.now(),
        task,
        description,
      });
      setTask('');
      setDescription('');
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <div className='title'><h1>TODO LIST</h1></div>
      <input
        type="text"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
