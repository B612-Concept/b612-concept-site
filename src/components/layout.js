import React from 'react';
import styled from 'styled-components';

import Footer from '@src/components/footer';

import './layout.css';

const LayoutWrapper = styled.main`
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
