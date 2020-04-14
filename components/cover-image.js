import React from 'react';
import cn from 'classnames';
import { Image } from 'react-datocms';
import Link from 'next/link';

const CoverImage = ({
  title, responsiveImage, slug, className,
}) => {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn('rounded-md rounded-light border border-light overflow-hidden', className)}
    />
  );

  return (
    <div className="sm:mx-0 text-0px">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
