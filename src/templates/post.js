import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { H1, P } from '../components/fonts';

const Heading1 = styled(H1)`
  font-weight: 300;
  margin: 1rem 0 0;

  @media all and (min-width: 650px) {
    margin: 3rem 0;
  }
`;

const PostWrapper = styled.div`
  padding: 0.5rem;
`;

const TitleDateWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media all and (min-width: 650px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
  }
`;

const Date = styled.div`
  margin-bottom: 1rem;

  @media all and (min-width: 650px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const FeaturedImage = styled.img`
  margin: auto;
  display: flex;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
`;

const StickyImage = styled.img``;

const BodyContainer = styled.div`
  position: relative;
  max-width: 1024px;
  padding-top: 0.5rem;
  margin: 0 auto;

  @media all and (max-width: 766px) {
    display: flex;
    flex-direction: column;
  }
`;

const Body = styled.div`
  @media all and (min-width: 767px) {
    position: absolute;
    right: 0;
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
  return (
    <PostWrapper>
      <TitleDateWrapper>
        <Date>
          <P className="mono">{date_published}</P>
        </Date>
        <div>
          <Heading1>{title}</Heading1>
        </div>
      </TitleDateWrapper>
      {featured_image && <FeaturedImage src={featured_image} />}
      <BodyContainer>
        {sticky_featured_image && <StickyImage src={sticky_featured_image} />}
        <Body dangerouslySetInnerHTML={{ __html: html }} />
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
