import React from 'react';
import Box from './box';
import styled from 'styled-components';

import Planet from '@src/components/planet';
import { max } from '@src/responsive';

const QuestionBox = styled(Box)`
  position: relative;
`;

const Car = styled.img`
  position: absolute;
  height: 150px;
  bottom: -80px;
  left: -120px;
  z-index: 10;

  @media all and ${max.tablet} {
    height: 150px;
    left: -70px;
  }

  @media all and ${max.tabletSm} {
    height: 100px;
    bottom: -50px;
    left: -50px;
  }
`;

const Sun = styled(Planet)`
  width: 250px;
  height: 250px;
  position: absolute;
  z-index: 5;
  top: -25px;
  right: -60px;
  clip-path: inset(-100% -100% 10% -100%);

  @media all and ${max.tablet} {
    width: 200px;
    height: 200px;
    top: 20px;
    right: 10%;
  }

  @media all and ${max.tabletSm} {
    width: 180px;
    height: 180px;
    top: 20px;
    right: 10%;
    clip-path: inset(-100% -100% 28% -100%);
  }
`;

const GetawayScene = ({ question }) => {
  return (
    <QuestionBox>
      <Sun />
      <Car src={'/assets/getaway_car.svg'} />
    </QuestionBox>
  );
};

export default GetawayScene;
