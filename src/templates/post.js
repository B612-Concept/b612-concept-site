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
`;

const TitleDateWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  min-height: 150px;

  @media all and ${min.tablet} {
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Title = styled.div`
  @media all and ${min.tabletLg} {
    position: absolute;
    right: 0;
    width: 644px;
    display: flex;
    align-items: flex-end;
  }
`;

const SmallDate = styled.div`
  font-size: 18px;
  margin-bottom: 1rem;

  @media all and ${min.tablet} {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const BigDate = styled.div`
  margin: 3.2rem 0;
  font-size: 18px;
  display: block;
  position: absolute;
  left: -30%;
`;

const BodyContainer = styled.div`
  position: relative;
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
  margin-bottom: 128px;

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
      <TitleDateWrapper>
        <Responsive query={max.tabletLg}>
          <SmallDate>
            <P className="mono">{date}</P>
          </SmallDate>
        </Responsive>
        <Title>
          <Responsive query={min.tabletLg}>
            <BigDate>
              <P className="mono">{date}</P>
            </BigDate>
          </Responsive>
          <Heading1>{title}</Heading1>
        </Title>
      </TitleDateWrapper>
      <BodyContainer>
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
