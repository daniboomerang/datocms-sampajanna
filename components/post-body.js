import React from 'react';
import markdownStyles from './markdown-styles.module.css';

const PostBody = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <div
      className={markdownStyles.markdown}
      dangerouslySetInnerHTML={{ __html: content }} // eslint-disable-line react/no-danger
    />
  </div>
);

export default PostBody;
