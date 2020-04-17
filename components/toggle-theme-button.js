import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { noop } from '../lib/fnUtils';
import styles from './toggle-theme-button.module.css';

const ToggleThemeButton = ({ classNames, onToggle, isDarkMode }) => (
  <div className={cn(classNames, 'flex items-center justify-end')}>
    <FontAwesomeIcon
      icon={faMoon}
      className={cn(
        'w-5 h-5 mx-2 text-secondary hover:text-accent duration-200 transition-colors cursor-pointer',
        { 'bg-secondary': isDarkMode },
        { 'text-accent': isDarkMode },
      )}
      onClick={!isDarkMode ? onToggle : noop}
    />
    <button
      type="button"
      className={cn('bg-primary text-secondary relative block border box-border', styles.slideBtn, { [isDarkMode]: isDarkMode })}
      onClick={onToggle}
    >
      <span
        className={cn(
          'absolute block bg-accent-light rounded-full border box-border',
          styles.slideBtnKnob,
          isDarkMode ? styles.slideBtnKnobDarkMode : styles.slideBtnKnobLightMode,
        )}
      />
    </button>
    <FontAwesomeIcon
      icon={faSun}
      className={cn(
        'w-5 h-5 mx-2 text-secondary hover:text-accent duration-200 transition-colors cursor-pointer',
        { 'bg-secondary': !isDarkMode },
        { 'text-accent': !isDarkMode },
      )}
      onClick={isDarkMode ? onToggle : noop}
    />
  </div>
);

export default ToggleThemeButton;
