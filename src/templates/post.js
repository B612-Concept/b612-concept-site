import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { H1, P } from '../components/fonts';
import { ordinal } from '../utils/ordinalNumber';

const Heading1 = styled(H1)`
  font-weight: 300;
  margin: 1rem 0 0;

  @media all and (min-width: 767px) {
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

  @media all and (min-width: 767px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const Title = styled.div`
  @media all and (min-width: 1000px) {
    position: absolute;
    right: 0;
    width: 644px;
    display: flex;
    align-items: flex-end;
  }
`;

const SmallDate = styled.div`
  margin-bottom: 1rem;

  @media all and (min-width: 767px) {
    margin-bottom: 0;
    margin-right: 20px;
  }

  @media all and (min-width: 1000px) {
    display: none;
  }
`;

const BigDate = styled.div`
  display: none;
  margin: 3rem 0;

  @media all and (min-width: 1000px) {
    display: block;
    position: absolute;
    left: -30%;
  }
`;

const BodyContainer = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;

  @media all and (max-width: 766px) {
    display: flex;
    flex-direction: column;
  }
`;

const FeaturedImage = styled.img`
  position: fixed;
  max-width: 282px;
  padding-top: 0.5rem;

  @media all and (max-width: 999px) {
    position: relative;
    padding-top: 0rem;
    margin: auto;
    display: flex;
    justify-content: center;
    max-width: 1024px;
    width: 100%;
  }
`;

const Body = styled.div`
  padding-top: 0.5rem;
  margin-bottom: 128px;

  @media all and (min-width: 1000px) {
    position: absolute;
    right: 0;
    max-width: 644px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    font-weight: 300;
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

  const formattedDate = new window.Date(date_published);
  const month = formattedDate.toLocaleString('default', { month: 'long' });
  const day = ordinal(formattedDate.getDay());
  const year = formattedDate.getFullYear();

  console.log(formattedDate);

  return (
    <PostWrapper>
      <TitleDateWrapper>
        <SmallDate>
          <P className="mono">{`${month} ${day}, ${year}`}</P>
        </SmallDate>
        <Title>
          <BigDate>
            <P className="mono">{`${month} ${day}, ${year}`}</P>
          </BigDate>
          <Heading1>{title}</Heading1>
        </Title>
      </TitleDateWrapper>
      <BodyContainer>
        {featured_image && (
          <FeaturedImage src={featured_image} sticky={sticky_featured_image} />
        )}
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
