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
import SearchForm from './components/SearchForm.jsx';
import axios from 'axios';

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

  const [allUsers, setAllUsers] = useState([]);

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












  const renderUsers = () => {
    return allUsers.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.description}</td>
          <td>{user.dueDate}</td>
        </tr>
      );
    });
  };



  // useEffect(() => {
  //   fetch("/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllUsers(data.users);
  //       console.log(data.users);
  //     });
  // }, []);




  // useEffect(() => {

  //   const fetchUsers = async () => {
  //     const response = await fetch('/users');
  //     const data = await response.json();
  //     //const sortedUsers = data.users.sort((a, b) => a.name.localeCompare(b.name));
  //     setAllUsers(data.users);
  //   };

  //   fetchUsers();
  // }, []);





  // useEffect(() => {
  //   fetch("/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllUsers(data.users);
  //       console.log('birs');
  //       console.log(allUsers);
  //     });
  // }, []);





  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       // Выполняем асинхронный запрос с помощью Axios
  //       const response = await axios.get('/users');
  //       const data = response.data;

  //       // Обновляем состояние
  //       setAllUsers(data);

  //       // Логируем полученные данные
  //       console.log('birs');
  //       console.log(response);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только при монтировании компонента






  return (
    <div>

      <div className="global-style">


        <div className="head_title_name">
          <h1 className="change-text">Task lisT</h1>
        </div>


        <button className="button3" onClick={handleClick}>
          Add task
        </button>

        <div className="button-container-1">

          <TaskFilters tasks={tasks} setFilteredTasks={setFilteredTasks} />

          <SearchForm tasks={tasks} setFilteredTasks={setFilteredTasks} />

          <ThemeSwitcher />

        </div>

        <div className="task-list-container">
          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTaskStatus={toggleTaskStatus}
            updateTask={updateTask}
          />
        </div>

      </div>





      {/* <hr />


      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>description</td>
            <td>dueDate</td>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table> */}




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

