import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { franklinGothic, inputMono } from '@src/styles.js';
import LandingPage from '@src/components/landingPage';

const Question = styled.div`
  margin: 2rem auto;
  font-family: ${franklinGothic};
  font-style: italic;
  font-weight: 500;
`;

const Scene = styled.div`
  margin: 2rem auto;
  font-family: ${inputMono};
  font-style: normal;
`;

const HomePage = ({ data }) => {
  const scenes = data.markdownRemark;
  const scenesArray = Object.values(scenes.frontmatter);

  return (
    <div>
      {/* added styling to keep box center/ should be removed once Layout stuff gets put in */}
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <LandingPage />
      </div>
      {scenesArray.map((value, index) => {
        if (typeof value === 'string' && value !== '') {
          return <Question key={index}>{value}</Question>;
        } else if (typeof value.title === 'string') {
          return <Scene key={index}>{value.title}</Scene>;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query HomePageQuery {
    markdownRemark(fields: { sourceName: { eq: "scenes" } }) {
      frontmatter {
        title
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
