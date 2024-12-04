// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import ThemeSwitcher from './components/ThemeSwitcher';
import AddTaskModal from './components/AddTaskModal';
import { useTheme } from './context/ThemeContext';
import './styles/index.css';
import plus from './assets/plus.png'; // импорт изображения
import TableComp from './components/TableComp.jsx';
import ListGroup from './components/ListGroup.jsx';
import SoundButton from './components/SoundButton.jsx';
import ChartComp from './components/ChartComp.jsx';
import TaskFilters from './components/TaskFilters.jsx';

const itemsList = [
  { name: 'first', id: 1 },
  { name: 'second', id: 2 }
];


const definitions = [
  { dt: 'one', dd: 'two', id: 1 },
  { dt: 'another term', dd: 'another description', id: 2 },
];


const chop = 'Misaka';




const CardThree = ({ children, title }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px' }}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};



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






  // Загружаем данные из localStorage при монтировании компонента
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('tasks'));
    if (savedTodos) {
      setTasks(savedTodos);
      setFilteredTasks(savedTodos);
    }
  }, []);





  // Сохраняем данные в localStorage при изменении списка задач
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);




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

  // const filterTasks = (status) => {
  //   if (status === 'all') {
  //     setFilteredTasks(tasks);
  //   } else if (status === 'completed') {
  //     setFilteredTasks(tasks.filter(task => task.isCompleted));
  //   } else if (status === 'in-progress') {
  //     setFilteredTasks(tasks.filter(task => !task.isCompleted));
  //   }
  // };

  const playSound = () => {
    const audio = new Audio('/but1.mp3');
    audio.play();
  };

  const handleRemove = () => {
    alert('hi');
  };

const showAlert = () => {
  setIsAddTaskModalOpen(true);
};

  const handleClick = () => {
    playSound();
    showAlert();
  };


  {/* <img src={plus} alt="Arrow" /> */ }



  return (
    <div>
      <div className="head_title_name">
        <h1 className="change-text">Task lisT</h1>
      </div>
      {/* <h1 className="title">Task lisT</h1> */}


      <div className="global-style">


        <div className="button-container-1">

          {/* <button className="add-button" onClick={() => setIsAddTaskModalOpen(true)}>
            Добавить
          </button> */}




          <TaskFilters tasks={tasks} setFilteredTasks={setFilteredTasks} />


          <button className="button3" onClick={handleClick}>
            Add task
          </button>


          <ThemeSwitcher />

          
        </div>

        {/* <div>
          <TaskFilters tasks={tasks} setFilteredTasks={setFilteredTasks} />
        </div> */}

        {/* <div className="task-filters">
          <button onClick={() => filterTasks('all')}>Все</button>
          <button onClick={() => filterTasks('completed')}>Готово</button>
          <button onClick={() => filterTasks('in-progress')}>В работе</button>
        </div> */}


        <div className="task-list-container">
          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTaskStatus={toggleTaskStatus}
            updateTask={updateTask}
          />
        </div>

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






      /* <div>
        <ListGroup>
          <p>one</p>
          <p>two</p>
          <p>three</p>
        </ListGroup>

        <CardThree title="Card Super">
          <p>This is a paragraph inside Card 1.</p>
          <button>Click me</button>
        </CardThree>

        <TableComp data={chop} onRemove={handleRemove} />


        <div style={{width: "400px"}}>
          <ChartComp />
        </div>


        <SoundButton />
      </div> */

