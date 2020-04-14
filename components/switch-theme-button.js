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
      className="w-12 h-12 p-2 bg-secondary text-secondary rounded-full border border-medium hover:text-accent duration-200 transition-colors"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={!isDarkMode ? faMoon : faSun} />
    </button>
  );
};

export default SwitchThemeButton;
