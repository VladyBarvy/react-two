// src/components/AddTaskModal.js
import React, { useState } from 'react';

const AddTaskModal = ({ addTask, closeModal }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (taskTitle && taskDescription && dueDate) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        dueDate,
        isCompleted: false,
      };
      addTask(newTask);
      closeModal();  // Закрываем модальное окно
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Добавить задачу</h2>
        </div>
        <div className="modal-body">
          <div>
            <label htmlFor="task-title">Тема</label>
            <input
              type="text"
              id="task-title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="task-description">Задача</label>
            <input
              type="text"
              id="task-description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="task-due-date">Срок</label>
            <input
              type="datetime-local"
              id="task-due-date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={closeModal}>
            Отмена
          </button>
          <button className="submit-button" onClick={handleSubmit}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
