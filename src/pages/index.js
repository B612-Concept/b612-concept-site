import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { H1 } from '@src/components/fonts';

const IndexPageWrapper = styled.section`
  position: relative;
  height: 100vh;
`;

const Introduction = styled(H1)`
  font-weight: 300;
  position: absolute;

  text-align: center;
  margin: 0;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Disclaimer = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
`;

const Planet = styled.span`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 250px rgba(243, 156, 76, 0.5);
  border-radius: 100%;

  width: 20%;
  padding-top: 20%;

  position: absolute;
  z-index: -1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CTA = ({ text }) => {
  return <button></button>;
};

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data;

  const { introduction, disclaimer, cta_text } = frontmatter;

  return (
    <IndexPageWrapper>
      <Planet />
      <Introduction dangerouslySetInnerHTML={{ __html: introduction }} />
      <Disclaimer dangerouslySetInnerHTML={{ __html: disclaimer }} />
    </IndexPageWrapper>
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
