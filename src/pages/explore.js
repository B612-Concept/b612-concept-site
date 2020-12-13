import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Carousel from '@src/components/carousel';
import withFadeIn from '@src/components/with-fade-in';

const ExplorePageWrapper = styled.div`
  height: 100vh;
`;

const ExplorePage = ({ className, data }) => {
  const scenesData = data.markdownRemark.frontmatter;

  return (
    <ExplorePageWrapper className={className}>
      <Carousel data={scenesData} />
    </ExplorePageWrapper>
  );
};

export default withFadeIn(ExplorePage);

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
