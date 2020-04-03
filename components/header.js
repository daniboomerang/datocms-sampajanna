import React from 'react';
import Link from 'next/link';

const Header = () => (
  <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    <Link href="/">
      <a className="text-accent hover:text-accent-soft duration-200 transition-colors">Blog</a>
    </Link>
    .
  </h2>
);

export default Header;
