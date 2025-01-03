// src/components/AddTaskModal.js
import React, { useState } from 'react';
import '../styles/AddTaskModal.css';

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

          <div className="form-input-case">
            <input
              type="text"
              id="task-title"
              className="form-input"
              placeholder="Тема задачи"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div className="form-input-case">
            <input
              type="text"
              id="task-description"
              className="form-input"
              placeholder="Содержание задачи"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </div>

          <div className="form-input-case">
            <input
              className="form-input"
              type="datetime-local"
              id="task-due-date"
              placeholder="Срок выполнения"
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
