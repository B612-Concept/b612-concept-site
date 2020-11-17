import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Question from '@src/components/question';

const IndexPageWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Question = styled.div`
  margin: 2rem auto;
  font-family: ${franklinGothic};
  font-style: italic;
  font-weight: 500;
`;

const IndexPage = ({ data }) => {
  const { question } = data.markdownRemark.frontmatter;

  return (
    <IndexPageWrapper>
      <Question question={question} />
    </IndexPageWrapper>
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
