import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { H1 } from '@src/components/fonts';
import Link from '@src/components/link';
import BasicButton from '@src/components/basic-button';
import { min, max, devices } from '@src/responsive';

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

  @media all and ${min.mobile} and ${max.tablet} {
    font-size: 24px;
    width: 90%;
  }

  @media all and ${min.tablet} and ${max.desktop} {
    font-size: 36px;
    width: 90%;
  }

  @media all and ${devices.desktop} {
    font-size: 36px;
  }
`;

const Disclaimer = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;

  font-size: 24px;

  @media all and ${min.mobile} and ${max.tablet} {
    font-size: 16px;
    width: 90%;
    text-align: left;
  }

  @media all and ${min.tablet} and ${max.desktop} {
    font-size: 24px;
    width: 90%;
  }

  @media all and ${devices.desktop} {
    font-size: 18px;
    width: 50%;
  }
`;

const Planet = styled.span`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 250px rgba(243, 156, 76, 0.5);
  border-radius: 100%;

  width: 500px;
  height: 500px;

  @media all and ${max.desktopLg} {
    width: 300px;
    height: 300px;
  }

  @media all and ${min.mobile} and ${max.tablet} {
    width: 200px;
    height: 200px;
  }

  position: absolute;
  z-index: -1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CTALink = styled(Link)`
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  width: fit-content;

  button {
    border-radius: 50%;
    width: 50px;
    margin-right: 20px;
  }

  span {
    font-size: 24px;
  }

  @media all and ${min.mobile} and ${max.tablet} {
    top: 70%;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
  }

  @media all and ${min.tablet} and ${max.desktop} {
    top: 70%;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
  }
`;

const CTA = ({ text }) => {
  return (
    <CTALink url="/explore">
      <BasicButton>
        <img src={'/assets/arrow.svg'} />
      </BasicButton>
      <span>{text}</span>
    </CTALink>
  );
};

const IndexPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter },
  } = data;

  const { introduction, disclaimer, cta_text } = frontmatter;

  return (
    <IndexPageWrapper>
      <Planet />
      <CTA text={cta_text} />
      <Introduction dangerouslySetInnerHTML={{ __html: introduction }} />
      {disclaimer && (
        <Disclaimer dangerouslySetInnerHTML={{ __html: disclaimer }} />
      )}
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
