import React, { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Date from './date';
import CoverImage from './cover-image';
import Tags from './tags';

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags,
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <section onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={cn('rounded-md rounded-light position-relative', { 'shadow-accent-xl': isHovered })}>
        <div className={cn('duration-200 transform', { 'scale-102': isHovered })}>
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
            slug={slug}
          />
        </div>
        <div className={cn('relative mb-48 duration-200 transform', { 'scale-105': isHovered })}>
          <div className={cn('absolute border border-light text-center w-11/12 p-4 rounded m-auto -top-20 left-0 right-0 bg-accent-light text-secondary', { 'shadow-accent-md': isHovered })}>
            <h3 className="text-4xl lg:text-5xl leading-tight mb-4 md:mb-8">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="text-accent hover:text-accent-soft duration-200 transition-colors">
                  {title}
                </a>
              </Link>
            </h3>
            <div className="mb-4 md:mb-2 text-base">
              <Date dateString={date} />
              <Tags tags={tags} />
            </div>
            <p className="text-lg leading-relaxed mb-4">
              {excerpt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
