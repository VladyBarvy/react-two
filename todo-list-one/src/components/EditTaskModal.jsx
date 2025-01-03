import React, { useState } from 'react';
import '../styles/EditTaskModal.css';

const EditTaskModal = ({ task, updateTask, closeModal }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleUpdateTask = () => {
    const updatedTask = { ...task, title, description, dueDate };
    updateTask(updatedTask);
    closeModal();
  };

  return (
    <div className="modal">

      <div className="modal-content">


        <div className="modal-header">
          <h2>Редактировать задачу</h2>
        </div>

        <div className="modal-body">
          
          <div className="form-input-case">
            <input
              className="form-input"
              type="text"
              placeholder="Тема"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-input-case">
            <input
              className="form-input"
              placeholder="Задача"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>


          <div className="form-input-case">
            <input
              className="form-input"
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

        </div>


        <div className="modal-footer">
          <button className="cancel-button" onClick={closeModal}>
            Отмена
          </button>
          <button className="submit-button" onClick={handleUpdateTask}>
            Обновить
          </button>
        </div>

      </div>

    </div>
  );
};

export default EditTaskModal;
