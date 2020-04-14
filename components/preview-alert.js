import React from 'react';
import Container from './container';

const PreviewAlert = () => (
  <div className="border-b text-white">
    <Container>
      <div className="py-2 text-center text-sm">
        This is page is a preview.
        <a
          href="/api/exit-preview"
          className="text-accent hover:text-accent-soft duration-200 transition-colors"
        >
          Click here
        </a>
        to exit preview mode.
      </div>
    </Container>
  </div>
);

export default PreviewAlert;
