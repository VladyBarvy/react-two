import React, { useState } from 'react';

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
      <h2>Редактировать задачу</h2>
      <input
        type="text"
        placeholder="Тема"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Задача"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <div className="modal-actions">
        <button onClick={handleUpdateTask}>Обновить</button>
        <button onClick={closeModal}>Отмена</button>
      </div>
    </div>
  );
};

export default EditTaskModal;
