// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import ThemeSwitcher from './components/ThemeSwitcher';
import AddTaskModal from './components/AddTaskModal';
import { useTheme } from './context/ThemeContext';
import './styles/index.css';

function App() {
  const { isDarkMode } = useTheme();
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    setFilteredTasks([...tasks, task]);
  };




  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const filterTasks = (status) => {
    if (status === 'all') {
      setFilteredTasks(tasks);
    } else if (status === 'completed') {
      setFilteredTasks(tasks.filter(task => task.isCompleted));
    } else if (status === 'in-progress') {
      setFilteredTasks(tasks.filter(task => !task.isCompleted));
    }
  };











  return (
    <div>
      <h1 className="title">Task lisT</h1>
      <div className="button-container">
        <ThemeSwitcher />
        <button className="add-button" onClick={() => setIsAddTaskModalOpen(true)}>
          Добавить
        </button>
      </div>

      <div className="task-filters">
        <button onClick={() => filterTasks('all')}>Все</button>
        <button onClick={() => filterTasks('completed')}>Готово</button>
        <button onClick={() => filterTasks('in-progress')}>В работе</button>
      </div>


      <div className="task-list-container">
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
          updateTask={updateTask}
        />
      </div>



      {isAddTaskModalOpen && (
        <AddTaskModal
          addTask={addTask}
          closeModal={() => setIsAddTaskModalOpen(false)}
        />
      )}

    </div>
  );
}

export default App;
