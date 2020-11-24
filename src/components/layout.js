import React from 'react';
import styled from 'styled-components';

import Header from '@src/components/header';
import Footer from '@src/components/footer';

import './layout.css';

const LayoutWrapper = styled.main`
  min-height: 100vh;
  margin-bottom: 100px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;
