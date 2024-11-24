// src/components/ThemeSwitcher.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      Переключить тему
    </button>
  );
};

export default ThemeSwitcher;
