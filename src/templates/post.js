import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { H1, P } from '@src/components/fonts';
import HTML from '@src/components/html';
import { formatDate } from '@src/utils';

import { Responsive, min, max } from '@src/responsive';

const Heading1 = styled(H1)`
  font-weight: 300;
  margin: 1rem 0 0;

  @media all and ${min.tablet} {
    margin: 3rem 0;
  }
`;

const PostWrapper = styled.div`
  padding: 0.5rem;
  padding-top: 80px;
`;

const TitleDateWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    margin-top: 60px;
  }

  @media all and ${min.tabletLg} {
    max-width: 644px;
    margin-left: auto;
    margin-bottom: 20px;
  }
`;

const Date = styled.div`
  @media all and ${min.tabletLg} {
    font-size: 18px;
    display: block;
    position: absolute;
    left: -30%;
    bottom: 2.5px;
  }
`;

const BodyContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media all and ${max.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const FeaturedImage = styled.img`
  position: relative;
  padding-top: 0rem;
  margin: auto;
  display: flex;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
`;

const StickyFeaturedImage = styled.img`
  position: fixed;
  max-width: 282px;
  padding-top: 0.5rem;

  @media all and ${max.tabletLg} {
    position: relative;
    padding-top: 0rem;
    margin: auto;
    display: flex;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
  }
`;

const HTMLBody = styled(HTML)`
  padding-top: 0.5rem;

  @media all and ${max.tablet} {
    font-size: 18px;
    line-height: 24px;
  }

  @media all and ${min.tabletLg} {
    margin-right: 0;
    margin-left: auto;
    max-width: 644px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const {
    date_published,
    title,
    featured_image,
    sticky_featured_image,
  } = frontmatter;

  const date = formatDate(date_published);

  return (
    <PostWrapper>
      <BodyContainer>
        <TitleDateWrapper>
          <Heading1>{title}</Heading1>
          <Date>
            <P className="mono">{date}</P>
          </Date>
        </TitleDateWrapper>
        {featured_image &&
          (sticky_featured_image ? (
            <StickyFeaturedImage src={featured_image} />
          ) : (
            <FeaturedImage src={featured_image} />
          ))}
        <HTMLBody html={html} />
      </BodyContainer>
    </PostWrapper>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        featured_image
        date_published
        question
        sticky_featured_image
        title
      }
    }
  }
`;
