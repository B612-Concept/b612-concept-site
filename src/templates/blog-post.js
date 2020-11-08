import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
`;

const Date = styled.p``;

const TitleDateWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BlogContent = styled.div`
  width: 60%;
  margin-left: 40%;
`;

export default function BlogPost({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const {
    date_published,
    featured_image,
    question,
    sticky_featured_image,
    title,
  } = frontmatter;
  return (
    <div>
      <TitleDateWrapper>
        <Date>{date_published}</Date>
        <Title>{title}</Title>
      </TitleDateWrapper>
      <img src={featured_image} />
      <BlogContent dangerouslySetInnerHTML={{ __html: html }} />
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
