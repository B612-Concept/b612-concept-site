import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import './index.css';

const Question = styled.div`
  margin: 2rem auto;
`;

const Scene = styled.div`
  margin: 2rem auto;
`;

const HomePage = ({ data }) => {
  const scenes = data.markdownRemark;
  const scenesArray = Object.values(scenes.frontmatter);

  return (
    <div>
      {scenesArray.map((value, index) => {
        if (typeof value === 'string' && value !== '') {
          return <Question>{value}</Question>;
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
    markdownRemark {
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
