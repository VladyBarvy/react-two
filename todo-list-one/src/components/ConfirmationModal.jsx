import React from 'react';

const ConfirmationModal = ({ confirmDelete, closeModal }) => {
  return (
    <div className="modal">
      <p>Вы действительно хотите удалить эту задачу?</p>
      <div className="modal-actions">
        <button onClick={confirmDelete}>Да</button>
        <button onClick={closeModal}>Отмена</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
