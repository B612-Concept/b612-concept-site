import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
  const {
    seo: {
      frontmatter: { title, description, image },
    },
  } = useStaticQuery(graphql`
    {
      seo: markdownRemark(fields: { sourceName: { eq: "seo" } }) {
        frontmatter {
          title
          description
          image
        }
      }
    }
  `);

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
