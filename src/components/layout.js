import React from 'react';
import styled from 'styled-components';

import SEO from '@src/components/seo';
import Header from '@src/components/header';
import Footer from '@src/components/footer';

import './layout.css';

const LayoutWrapper = styled.main`
  min-height: 100vh;
`;

const StyledFooter = styled(Footer)`
  margin-top: 100px;
`;

const Layout = ({ children, pageContext }) => {
  const title = 'B612: A private place for you';
  const description =
    'B612 is the only wellness experience service that provides a habitual way to disconnect and seclude in a private space for the introspective, achievers in Seattle WA who seek a mental getaway from the urban lifestyle in an era of digital exhaustion and hustle culture.';
  const image = 'assets/seo-image.jpg';

  return (
    <>
      <SEO title={title} description={description} image={image} />
      <Header />
      <LayoutWrapper>{children}</LayoutWrapper>
      {!pageContext.hideFooter && <StyledFooter />}
    </>
  );
};

export default Layout;
