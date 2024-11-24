import React, { useState } from 'react';
import EditTaskModal from './EditTaskModal';
import ConfirmationModal from './ConfirmationModal';

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
        <p>{task.dueDate}</p>
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
