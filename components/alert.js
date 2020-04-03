import React from 'react';
import cn from 'classnames';
import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Alert = ({ preview }) => (
  <div className={cn('border-b', {
    'bg-accent-7 border-accent-7 text-white': preview,
    'bg-accent-1 border-accent-2': !preview,
  })}
  >
    <Container>
      <div className="py-2 text-center text-sm">
        {preview ? (
          <>
            This is page is a preview.
            <a
              href="/api/exit-preview"
              className="text-accent hover:text-accent-soft duration-200 transition-colors"
            >
              Click here
            </a>
            to exit preview mode.
          </>
        ) : (
          <>
            The source code for this blog is
            <a
              href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="text-accent hover:text-accent-soft duration-200 transition-colors"
            >
              available on GitHub
            </a>
            .
          </>
        )}
      </div>
    </Container>
  </div>
);

export default Alert;
