import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

// Base URL for the API. During development, the frontend runs on
// port 3000 and the backend on port 5000. Adjust as necessary.
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_BASE_URL);
      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch tasks');
      setLoading(false);
    }
  };

  const addTask = async (title, description) => {
    try {
      const res = await axios.post(API_BASE_URL, { title, description });
      setTasks([...tasks, res.data]);
    } catch (err) {
      setError('Failed to add task');
    }
  };

  const updateTask = async (id, updatedFields) => {
    try {
      const res = await axios.put(`${API_BASE_URL}/${id}`, updatedFields);
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  return (
    <div className="App">
      <header>
        <h1>TaskTracker</h1>
      </header>
      <main>
        <TaskForm addTask={addTask} />
        {loading ? (
          <p>Loading tasks...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        )}
      </main>
    </div>
  );
};

export default App;