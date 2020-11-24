import React from 'react';
import styled from 'styled-components';

import Header from '@src/components/header';

import './layout.css';

const LayoutWrapper = styled.main`
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

export default Layout;
