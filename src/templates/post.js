import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { H1, P } from '../components/fonts';

const TitleDateWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export default function Post({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const { date_published, featured_image, title } = frontmatter;
  return (
    <div>
      <TitleDateWrapper>
        <div>
          <P>{date_published}</P>
        </div>
        <div>
          <H1>{title}</H1>
        </div>
      </TitleDateWrapper>
      <img src={featured_image} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
