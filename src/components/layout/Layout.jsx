import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '80px', minHeight: 'calc(100vh - 80px)' }}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
