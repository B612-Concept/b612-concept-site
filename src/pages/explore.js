import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ImagePreloader from 'image-preloader';

import SEO from '@src/components/seo';
import Carousel from '@src/components/carousel';
import withFadeIn from '@src/components/with-fade-in';

const ExplorePageWrapper = styled.div`
  height: 100vh;
`;

const illustrations = [
  '/assets/face.svg',
  '/assets/cloud1.svg',
  '/assets/cloud2.svg',
  '/assets/cloud3.svg',
  '/assets/cloud4.svg',
  '/assets/waves.svg',
  '/assets/feet.svg',
  '/assets/safe.svg',
  '/assets/stair.svg',
  '/assets/right-planet.svg',
  '/assets/star.svg',
  '/assets/moon.svg',
  '/assets/ring-planet.svg',
  '/assets/light-1.svg',
  '/assets/light-2.svg',
  '/assets/light-3.svg',
  '/assets/star-1.svg',
  '/assets/star-2.svg',
  '/assets/star-3.svg',
  '/assets/moon-1.svg',
  '/assets/planet-1.svg',
  '/assets/planet-2.svg',
  '/assets/getaway_car.svg',
  '/assets/calmCloud-1.svg',
  '/assets/calmCloud-2.svg',
  '/assets/calmCloud-3.svg',
  '/assets/hammock.svg',
];

const ExplorePage = ({ className, data }) => {
  const scenesData = data.markdownRemark.frontmatter;
  const { seo } = scenesData;
  const [preloaded, setPreloaded] = useState(false);

  /**
   * On mount, preload all illustrations in the experience
   * before mounting the carousel
   */
  useEffect(() => {
    const preloader = new ImagePreloader();
    preloader.preload(...illustrations).then(() => setPreloaded(true));
  }, []);

  return preloaded ? (
    <ExplorePageWrapper className={className}>
      <SEO {...seo} />
      <Carousel data={scenesData} />
    </ExplorePageWrapper>
  ) : null;
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
        seo {
          title
          description
          image
        }
      }
    }
  }
`;
