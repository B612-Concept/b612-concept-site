import React from 'react';
import styled from 'styled-components';

import Link from '@src/components/link';
import { H1 } from '@src/components/fonts';
import { max, min, devices } from '@src/responsive';
import withFadeIn from '@src/components/with-fade-in';

const absoluteCenter = `
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const NotFoundWrapper = styled.section`
  height: 100vh;
  position: relative;
  overflow-y: hidden;
`;

const Heading = styled(H1)`
  text-align: center;
  font-weight: 300;
  font-size: 36px;

  ${absoluteCenter}
  top: 20%;

  @media all and ${min.mobile} and ${max.tablet} {
    font-size: 24px;
    width: 90%;
  }

  @media all and ${min.tablet} and ${max.tabletLg} {
    top: 30%;
  }
`;

const NotFoundIllustration = styled.img`
  ${absoluteCenter}
  z-index: -1;

  max-width: 800px;
  bottom: 0;
  transform: translateY(50%);

  @media all and ${min.mobile} and ${max.tabletLg} {
    width: 90%;
  }

  @media all and ${devices.tabletLg} {
    width: 50%;
  }
`;

const NotFound = ({ className }) => (
  <NotFoundWrapper className={className}>
    <Heading>
      We can’t find what you’re looking for.
      <br />
      Try our <Link url="/">home</Link> instead?
    </Heading>
    <NotFoundIllustration src="/assets/404-planet.svg" />
  </NotFoundWrapper>
);

export default withFadeIn(NotFound);
