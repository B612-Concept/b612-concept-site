import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { H1, P } from '../components/fonts';

const Heading1 = styled(H1)`
  font-weight: 300;
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
`;

const Body = styled.div`
  position: relative;
  max-width: 700px;
  margin-left: 20rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const { date_published, featured_image, title } = frontmatter;
  return (
    <div>
      <TitleDateWrapper>
        <div style={{ marginRight: 20 }}>
          <P className="mono">{date_published}</P>
        </div>
        <div>
          <Heading1>{title}</Heading1>
        </div>
      </TitleDateWrapper>
      <FeaturedImage src={featured_image} />
      <Body dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
