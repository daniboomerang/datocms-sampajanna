import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import Container from './container';
import ToggleThemeButton from './toggle-theme-button';

const Footer = ({ isDarkMode, onToggleTheme }) => (
  <footer className="bg-secondary p-6">
    <Container>
      <div className="py-28 flex flex-col sm:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className="text-accent hover:text-accent-soft duration-200 transition-colors"
          >
            About Sampajanna
          </a>
          <div className="text-accent hover:text-accent-soft duration-200 transition-colors text-sm">
            ©2020 daniboomerang.com
          </div>
        </div>
        <div className="flex-1 mt-8 sm:mt-0 flex items-center justify-center md:justify-end">
          <div className="sm:mx-4">
            <ToggleThemeButton onToggle={onToggleTheme} isDarkMode={isDarkMode} />
          </div>
          <button
            type="button"
            className="m-4 w-8 h-8 p-2 text-sm bg-secondary rounded-full text-secondary float-left border border-medium hover:text-accent duration-200 transition-colors mx-1 hover:border-accent"
          >
            <FontAwesomeIcon icon={faFlagUsa} />
          </button>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
