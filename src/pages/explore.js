import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Carousel from '@src/components/carousel';

const IndexPageWrapper = styled.div`
  height: 100vh;
`;

const IndexPage = ({ data }) => {
  const scenesData = data.markdownRemark.frontmatter;

  return (
    <IndexPageWrapper>
      <Carousel data={scenesData} />
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
