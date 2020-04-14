import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faSun, faMoon,
} from '@fortawesome/free-solid-svg-icons';
import PostTitle from './post-title';

const PostBar = ({ postTitle, isDarkMode, onToggleTheme }) => (
  <div className="border-b border-light h-20 z-10 sticky top-0 w-100 bg-almost-primary py-2">
    <div className="max-w-screen-lg flex justify-between items-center mx-auto px-16">
      <button
        type="button"
        className="flex justify-center w-12 h-12 bg-secondary rounded-full text-secondary float-left border border-medium hover:text-accent duration-200 transition-colors"
      >
        <Link href="/">
          <a className="flex items-center">
            <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </Link>
      </button>
      <PostTitle>{postTitle}</PostTitle>
      <button
        type="button"
        className="flex justify-center w-12 h-12 bg-secondary rounded-full text-secondary float-right border border-medium hover:text-accent duration-200 transition-colors"
        onClick={onToggleTheme}
      >
        <FontAwesomeIcon icon={!isDarkMode ? faMoon : faSun} />
      </button>
    </div>
  </div>
);

export default PostBar;
