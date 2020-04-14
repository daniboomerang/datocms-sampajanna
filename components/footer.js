import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import Container from './container';

const Footer = () => (
  <footer className="bg-secondary p-6">
    <Container>
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          Some content here
        </h3>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href="https://nextjs.org/docs/basic-features/pages"
            className="text-accent hover:text-accent-soft duration-200 transition-colors"
          >
            About Sampajanna
          </a>
        </div>
        <button
          type="button"
          className="w-12 h-12 p-3 bg-secondary rounded-full text-secondary float-left border border-medium hover:text-accent duration-200 transition-colors"
        >
          <FontAwesomeIcon icon={faFlagUsa} />
        </button>
      </div>
    </Container>
  </footer>
);

export default Footer;
