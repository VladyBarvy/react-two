import React, { useState } from 'react';

const TaskFilters = ({ tasks, setFilteredTasks }) => {
  const [selectedFilter, setSelectedFilter] = useState('all'); // Состояние для выбранной опции


  const playSoundAndAlert = () => {
    const audio = new Audio('/but1.mp3'); // Укажите путь к вашему звуковому файлу
    audio.play();
  };


  const filterTasks = (status) => {
    
    setSelectedFilter(status); // Обновляем выбранный фильтр
    if (status === 'all') {
      setFilteredTasks(tasks);
    } else if (status === 'completed') {
      setFilteredTasks(tasks.filter((task) => task.isCompleted));
    } else if (status === 'in-progress') {
      setFilteredTasks(tasks.filter((task) => !task.isCompleted));
    }
  };

  return (
    <div className="task-filters">
      <label>
        <input
          type="radio"
          name="task-filter"
          value="all"
          checked={selectedFilter === 'all'}
          // onChange={() => filterTasks('all')}
          onChange={() => {
            playSoundAndAlert();
            filterTasks('all');
          }}
        />
        Все
      </label>

      <label>
        <input
          type="radio"
          name="task-filter"
          value="completed"
          checked={selectedFilter === 'completed'}
          // onChange={() => filterTasks('completed')}
          onChange={() => {
            playSoundAndAlert();
            filterTasks('completed');
          }}
        />
        Готово
      </label>

      <label>
        <input
          type="radio"
          name="task-filter"
          value="in-progress"
          checked={selectedFilter === 'in-progress'}
          // onChange={() => filterTasks('in-progress')}
          onChange={() => {
            playSoundAndAlert();
            filterTasks('in-progress');
          }}
        />
        В работе
      </label>
    </div>
  );
};

export default TaskFilters;
