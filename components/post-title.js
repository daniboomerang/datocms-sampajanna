import React from 'react';

const PostTitle = ({ children }) => (
  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none text-center">
    {children}
  </h1>
);

export default PostTitle;
