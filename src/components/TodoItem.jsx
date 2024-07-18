import React, { useState } from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo({ ...todo, task, description });
    setIsEditing(false);
  };

  return (
    <div className="TodoItem">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.description}</p>
          <p>
            Status: 
            <select
              value={todo.status}
              onChange={(e) => updateTodo({ ...todo, status: e.target.value })}
            >
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
