import React, { useState } from 'react';
import EditTaskModal from './EditTaskModal';
import ConfirmationModal from './ConfirmationModal';
import '../styles/TaskCard.css';




// Функция для форматирования даты в формат DD/MM/YYYY HH:mm
const formatDate = (dateString) => {
  if (!dateString) return '';

  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};





const TaskCard = ({ task, deleteTask, toggleTaskStatus, updateTask }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleToggleStatus = () => {
    toggleTaskStatus(task.id);
  };

  const handleDeleteTask = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setIsConfirmationModalOpen(false);
  };

  return (
    <div className="task-card">
      <div className="task-details">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{formatDate(task.dueDate)}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => setIsEditModalOpen(true)}>Редактировать</button>
        <button onClick={handleToggleStatus}>
          {task.isCompleted ? 'Выполнено' : 'В работе'}
        </button>
        <button onClick={handleDeleteTask}>Удалить</button>
      </div>

      {isEditModalOpen && (
        <EditTaskModal task={task} updateTask={updateTask} closeModal={() => setIsEditModalOpen(false)} />
      )}
      {isConfirmationModalOpen && (
        <ConfirmationModal
          confirmDelete={handleConfirmDelete}
          closeModal={() => setIsConfirmationModalOpen(false)}
        />
      )}
    </div>
  );
};

export default TaskCard;
