// import React, { useState } from 'react';

// const SearchForm = ({ tasks, setFilteredTasks }) => {
//   const [searchQuery, setSearchQuery] = useState(""); // Состояние для строки поиска

//   return (
//     <form
//       className="search-form"
//       onSubmit={(e) => e.preventDefault()} // Отключаем стандартное поведение формы
//     >
//       <input
//         type="text"
//         placeholder="Поиск..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//     </form>
//   );
// };

// export default SearchForm;

import React, { useState } from 'react';

const SearchForm = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для строки поиска

  // Функция для обработки ввода в поле поиска
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Преобразуем строку поиска в нижний регистр
    const queryLower = query.toLowerCase();

    // Фильтруем задачи на основе строки поиска
    const filteredTasks = tasks.filter(task => {
      // Проверяем, что поля task.name и task.description существуют
      const taskName = task.title ? task.title.toLowerCase() : '';
      const taskDescription = task.description ? task.description.toLowerCase() : '';

      // Возвращаем задачи, где либо название, либо описание (или оба) содержат строку поиска
      return taskName.includes(queryLower) || taskDescription.includes(queryLower);
    });

    // Обновляем список отфильтрованных задач
    setFilteredTasks(filteredTasks);
  };

  return (
    <form
      className="search-form"
      onSubmit={(e) => e.preventDefault()} // Отключаем стандартное поведение формы
    >
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={handleSearchChange} // Обработчик изменения ввода
      />
    </form>
  );
};

export default SearchForm;
