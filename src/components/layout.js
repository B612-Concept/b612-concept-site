import React from 'react';
import styled from 'styled-components';
import './layout.css';

const LayoutWrapper = styled.main`
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>{children}</main>
      <footer>Hello</footer>
    </>
  );
};

export default Layout;
