import React from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import SwitchThemeButton from './switchThemeButton';

const Layout = ({ preview, children }) => (
  <div className="layout bg-bg text-primary font-body">
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>
        <SwitchThemeButton />
        {children}
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
