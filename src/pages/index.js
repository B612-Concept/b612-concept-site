import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Header from '@src/components/header';
import Question from '@src/components/question';
import SensesScene from '@src/components/sensesScene';

const IndexPageWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 420px;
`;

const IndexPage = ({ data }) => {
  const { question } = data.markdownRemark.frontmatter;

  return (
    <>
      <Header />
      <IndexPageWrapper>
        <Question question={question} />
      </IndexPageWrapper>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    markdownRemark(fields: { sourceName: { eq: "scenes" } }) {
      frontmatter {
        question
        calm_scene {
          body
          title
        }
        getaway_scene {
          body
          title
        }
        imagine_scene {
          body
          title
        }
        journey_scene {
          body
          title
        }
        reflection_scene {
          body
          title
        }
        safe_scene {
          body
          title
        }
        senses_scene {
          body
          title
        }
      }
    }
  }
`;
