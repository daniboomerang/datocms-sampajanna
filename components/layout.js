import React from 'react';
import useDarkMode from 'use-dark-mode';
import PreviewAlert from './preview-alert';
import Footer from './footer';
import Meta from './meta';
import Header from './header';
import PostBar from './post-bar';

const Layout = ({ preview, postTitle, children }) => {
  const darkMode = useDarkMode(true);
  const { value: isDarkMode, toggle: toggleTheme } = darkMode;

  return (
    <div className="layout bg-bg text-primary font-body text-2xl">
      <Meta />
      <div className="min-h-screen">
        {preview ? <PreviewAlert /> : null}
        <Header />
        {postTitle
          ? <PostBar postTitle={postTitle} isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
          : null}
        <main className="py-16">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
