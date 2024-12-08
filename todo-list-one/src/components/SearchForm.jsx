import React, { useState } from 'react';

const SearchForm = ({ tasks, setFilteredTasks }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Состояние для строки поиска

  return (
    <form
      className="search-form"
      onSubmit={(e) => e.preventDefault()} // Отключаем стандартное поведение формы
    >
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
