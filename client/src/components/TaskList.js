import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  if (!tasks.length) {
    return <p>No tasks yet.</p>;
  }

  const handleToggleComplete = (task) => {
    updateTask(task._id, { completed: !task.completed });
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className={task.completed ? 'completed' : ''}>
          <div className="task-info">
            <h3>{task.title}</h3>
            {task.description && <p>{task.description}</p>}
            <small>
              Created: {new Date(task.createdAt).toLocaleString()} | Updated:{' '}
              {new Date(task.updatedAt).toLocaleString()}
            </small>
          </div>
          <div className="task-actions">
            <button onClick={() => handleToggleComplete(task)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteTask(task._id)} className="danger">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;