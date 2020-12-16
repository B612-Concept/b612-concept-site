import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { H1, P } from '@src/components/fonts';
import Author from '@src/components/author';
import HTML from '@src/components/html';
import withFadeIn from '@src/components/with-fade-in';
import { formatDate } from '@src/utils';

import { Responsive, min, max } from '@src/responsive';
import { BUTTON_GREY } from '@src/components/colors';

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

  max-width: 1024px;
  margin: 0 auto;

  @media all and ${max.tablet} {
    display: flex;
    flex-direction: column;
  }
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
  display: flex;

  @media all and ${max.desktop} {
    flex-direction: column;
  }
`;

const PostContent = styled.div`
  padding-top: 0.5rem;

  @media all and ${min.tabletLg} {
    margin-right: 0;
    margin-left: auto;
    max-width: 644px;
  }
`;

const BodyWrapper = styled.div`
  display: flex;
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

const StickyFeaturedImageWrapper = styled.div`
  padding: 0 20px;
`;

const StickyFeaturedImage = styled.img`
  position: sticky;
  top: 0;
  width: 100%;
  padding-top: 0.5rem;
`;

const HTMLBody = styled(HTML)`
  @media all and ${max.tablet} {
    font-size: 18px;
    line-height: 24px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const StyledAuthor = styled(Author)`
  border-top: 0.5px solid ${BUTTON_GREY};
  padding-top: 20px;
`;

function findAuthor(authors, path) {
  if (!path) {
    return null;
  }

  const authorNode = authors.edges.find(({ node }) =>
    node.fileAbsolutePath.endsWith(path),
  );

  return authorNode ? authorNode.node.frontmatter : null;
}

function Post({ className, data }) {
  const { frontmatter, html } = data.post;

  const {
    date_published,
    title,
    featured_image,
    sticky_featured_image,
    author: authorFilePath,
  } = frontmatter;

  const { authors } = data;
  const author = findAuthor(authors, authorFilePath);

  const date = formatDate(date_published);

  return (
    <PostWrapper className={className}>
      <TitleDateWrapper>
        <Heading1>{title}</Heading1>
        <Date>
          <P className="mono">{date}</P>
        </Date>
      </TitleDateWrapper>

      {featured_image && !sticky_featured_image && (
        <FeaturedImage src={featured_image} />
      )}

      <BodyContainer>
        {featured_image && sticky_featured_image && (
          <StickyFeaturedImageWrapper>
            <StickyFeaturedImage src={featured_image} />
          </StickyFeaturedImageWrapper>
        )}
        <PostContent>
          <HTMLBody html={html} />
          {author && <StyledAuthor {...author} />}
        </PostContent>
      </BodyContainer>
    </PostWrapper>
  );
}

export default withFadeIn(Post);

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        featured_image
        date_published
        question
        sticky_featured_image
        title
        author
      }
    }

    authors: allMarkdownRemark(
      filter: { fields: { sourceName: { eq: "authors" } } }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            name
            description
            url
            photo
          }
        }
      }
    }
  }
`;
