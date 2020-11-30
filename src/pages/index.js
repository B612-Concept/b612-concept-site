import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { H1 } from '@src/components/fonts';

const StyledH1 = styled(H1)`
  font-weight: 300;
`;

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data;

  const { introduction, disclaimer, cta_text } = frontmatter;

  return (
    <section>
      <StyledH1 dangerouslySetInnerHTML={{ __html: introduction }} />
      <p dangerouslySetInnerHTML={{ __html: disclaimer }} />
    </section>
  );
};

export default IndexPage;

export const query = graphql`
  query LandingPageQuery {
    markdownRemark(fields: { sourceName: { eq: "landing" } }) {
      frontmatter {
        introduction
        disclaimer
        cta_text
      }
    }
  }
`;
