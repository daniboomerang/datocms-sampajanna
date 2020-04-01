import React from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

const Layout = ({ preview, children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
