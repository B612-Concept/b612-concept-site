import React from 'react';
import styled from 'styled-components';

import Footer from '@src/components/footer';

import './layout.css';

const LayoutWrapper = styled.main`
  min-height: 100vh;
`;

const StyledFooter = styled(Footer)`
  margin-top: 100px;
`;

const Layout = ({ children, pageContext }) => {
  return (
    <>
      <LayoutWrapper>{children}</LayoutWrapper>
      {!pageContext.hideFooter && <StyledFooter />}
    </>
  );
};

export default Layout;
