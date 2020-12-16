import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max } from '@src/responsive';
import { Wrapper, JourneySceneText } from './scene-text';

const PositionBox = styled(Box)`
  position: relative;
`;

const Planet = styled.img`
  position: absolute;
  top: -90px;
  right: -30px;

  @media all and ${max.tabletSm} {
    height: 50px;
    top: -10px;
    right: -10px;
  }
`;
const Moon = styled.img`
  position: absolute;
  top: -100px;
  left: 30px;

  @media all and ${max.tabletSm} {
    height: 100px;
    top: -15px;
    left: 15px;
  }
`;
const Saturn = styled.img`
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media all and ${max.tabletSm} {
    height: 30px;
    top: 15px;
    left: 20%;
  }
`;

const Stair = styled.img`
  position: absolute;
  bottom: -150px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media all and ${max.tabletSm} {
    height: 200px;
    bottom: -120px;
  }

  @media all and ${max.tabletSm} {
    width: 73.33px;
    height: 171.96px;
  }
`;

const Star1 = styled.img`
  position: absolute;
  top: 40px;
  left: -50px;

  @media all and ${max.tabletSm} {
    height: 15px;
    top: 80px;
    left: -20px;
  }
`;

const Star2 = styled.img`
  position: absolute;
  top: -80px;
  left: 160px;

  @media all and ${max.tabletSm} {
    height: 15px;
    top: -20px;
    left: 180px;
  }
`;

const Star3 = styled.img`
  position: absolute;
  top: -100px;
  right: 160px;

  @media all and ${max.tabletSm} {
    height: 15px;
    top: 0px;
    left: 90px;
  }
`;

const Star4 = styled.img`
  position: absolute;
  top: 20px;
  right: 80px;

  @media all and ${max.tabletSm} {
    height: 15px;
    top: 70px;
    right: 40px;
  }
`;

const JourneyScene = ({ title }) => {
  return (
    <Wrapper>
      <PositionBox>
        <Stair src={'/assets/stair.svg'} />
        <Planet src={'/assets/right-planet.svg'} />
        <Star1 src={'/assets/star.svg'} />
        <Star2 src={'/assets/star.svg'} />
        <Star3 src={'/assets/star.svg'} />
        <Star4 src={'/assets/star.svg'} />
        <Moon src={'/assets/moon.svg'} />
        <Saturn src={'/assets/ring-planet.svg'} />
      </PositionBox>
      <JourneySceneText>
        <span>{title}</span>
      </JourneySceneText>
    </Wrapper>
  );
};

export default JourneyScene;
