// src/components/ThemeSwitcher.js
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);

  };

  const playSoundAndAlert = () => {
    const audio = new Audio('/but1.mp3'); // Укажите путь к вашему звуковому файлу
    audio.play();
  };

return (
  // <button className="theme-switcher" onClick={toggleTheme}>
  //   Переключить тему
  // </button>

  <div className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`}>
    <span className="icon sun">☀️</span>

    <div className="toggle-button"
      // onClick={toggleTheme}
      onClick={() => {
        handleToggle();
        toggleTheme();
        playSoundAndAlert();
      }}
    >

      <div className={`toggle-knob ${isDarkMode ? 'dark' : 'light'}`}></div>
    </div>
    <span className="icon moon">🌙</span>
  </div>
);
};

export default ThemeSwitcher;
