import React from 'react';
import styled from 'styled-components';

import Link from '@src/components/link';
import { H1 } from '@src/components/fonts';
import { max, devices } from '@src/responsive';

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

  ${absoluteCenter}
  top: 150px;

  @media all and ${max.tablet} {
    font-size: 24px;
    width: 90%;
  }

  @media all and ${devices.tablet} {
    font-size: 36px;
    width: 90%;
  }
`;

const NotFoundIllustration = styled.img`
  width: 40%;
  bottom: -60%;

  ${absoluteCenter}

  z-index: -1;

  @media all and ${max.tablet} {
    width: 100%;
    bottom: -30%;
  }

  @media all and ${devices.tablet} {
    width: 50%;
    bottom: -50%;
  }
`;

const NotFound = () => (
  <NotFoundWrapper>
    <Heading>
      We can’t find what you’re looking for.
      <br />
      Try our <Link url="/">home</Link> instead?
    </Heading>
    <NotFoundIllustration src="/assets/404-planet.svg" />
  </NotFoundWrapper>
);

export default NotFound;
