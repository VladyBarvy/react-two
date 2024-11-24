// src/context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Создаем контекст для темы
const ThemeContext = createContext();

// Поставщик контекста
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Хук для использования контекста
export const useTheme = () => {
  return useContext(ThemeContext);
};
