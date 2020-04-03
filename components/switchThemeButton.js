import React from 'react';
import useDarkMode from 'use-dark-mode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const SwitchThemeButton = () => {
  const darkMode = useDarkMode(true);
  const { value: isDarkMode, toggle: toggleTheme } = darkMode;

  return (
    <button
      type="button"
      className="w-8 h-8 p-2 top-20 right-20 bg-secondary text-secondary rounded-btn sticky z10 float-right border border-light hover:text-accent duration-200 transition-colors"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={!isDarkMode ? faMoon : faSun} />
    </button>
  );
};

export default SwitchThemeButton;
