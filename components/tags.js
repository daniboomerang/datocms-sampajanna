import React from 'react';

const Tags = ({ tags }) => (
  <>
    {' '}
    {tags.map((tag) => <span className="bg-accent-soft text-solid rounded p-1" key={tag.name}>{tag.name}</span>)}
    {' '}
  </>
);

export default Tags;
