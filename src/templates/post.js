import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { H1, P } from '../components/fonts';

const Heading1 = styled(H1)`
  font-weight: 300;
`;

const PostWrapper = styled.div`
  padding: 0.5rem;
`;

const TitleDateWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const FeaturedImage = styled.img`
  margin: auto;
  display: flex;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
`;

const BodyContainer = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 32px auto;
`;

const Body = styled.div`
  position: absolute;
  right: 0;
  max-width: 644px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const { date_published, featured_image, title } = frontmatter;
  return (
    <PostWrapper>
      <TitleDateWrapper>
        <div style={{ marginRight: 20 }}>
          <P className="mono">{date_published}</P>
        </div>
        <div>
          <Heading1>{title}</Heading1>
        </div>
      </TitleDateWrapper>
      <FeaturedImage src={featured_image} />
      <BodyContainer>
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
