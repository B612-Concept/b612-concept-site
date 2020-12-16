import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max, min } from '@src/responsive';
import Planet from '@src/components/planet';
import { Wrapper, SceneText } from './scene-text';

const CalmSceneWrapper = styled.div`
  position: relative;
  margin: auto;
`;

const CalmHammock = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 240px;

  @media all and ${max.tablet} {
    top: 20px;
    height: 200px;
  }

  @media all and ${max.tabletSm} {
    top: 40px;
    right: 0px;
    height: 100%;
  }
`;

const Sun = styled(Planet)`
  position: absolute;
  z-index: 10;
  height: 100px;
  width: 100px;
  box-shadow: 0px 0px 100px #f39c4c;

  top: -70px;
  right: 280px;

  @media all and ${max.tabletSm} {
    height: 80px;
    width: 80px;
    top: -30px;
    left: 5vw;
  }
`;

const Cloud1 = styled.img`
  position: absolute;
  height: 70px;
  top: 60px;
  left: -50px;

  @media all and ${max.tabletSm} {
    left: -100px;
  }
`;

const Cloud2 = styled.img`
  position: absolute;
  height: 30px;
  top: -15px;

  @media all and ${min.desktopLg} {
    left: 20px;
  }
  @media all and ${max.tabletSm} {
    top: -10px;
    right: -40px;
    height: 30px;
  }
`;
const Cloud3 = styled.img`
  position: absolute;
  top: -50px;
  right: 80px;
  height: 70px;

  @media all and ${max.tabletSm} {
    height: 45px;
    top: -15px;
    right: 40px;
  }
`;

const Cloud4 = styled.img`
  position: absolute;
  bottom: -10px;
  right: -25px;
  height: 50px;

  @media all and ${max.tabletSm} {
    right: -60px;
  }
`;

const CalmScene = ({ title }) => {
  return (
    <Wrapper>
      <CalmSceneWrapper>
        <Box />
        <Sun />
        <Cloud1 src={'/assets/calmCloud-1.svg'} />
        <Cloud2 src={'/assets/calmCloud-2.svg'} />
        <Cloud3 src={'/assets/calmCloud-3.svg'} />
        <Cloud4 src={'/assets/calmCloud-2.svg'} />
        <CalmHammock src={'/assets/hammock.svg'} />
      </CalmSceneWrapper>
      <SceneText>{title}</SceneText>
    </Wrapper>
  );
};

export default CalmScene;
