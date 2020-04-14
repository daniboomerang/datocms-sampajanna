import React from 'react';
import Date from './date';
import CoverImage from './cover-image';
import Tags from './tags';

const PostHeader = ({
  title, coverImage, date, tags,
}) => (
  <>
    <div className="mb-8 md:mb-16 mb-8 md:mb-16 max-w-3xl mx-auto">
      <CoverImage
        title={title}
        responsiveImage={coverImage.responsiveImage}
      />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6 text-lg">
        <Date dateString={date} />
        <Tags tags={tags} />
      </div>
    </div>
  </>
);

export default PostHeader;
