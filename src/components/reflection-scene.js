import React from 'react';
import Box from './box';
import styled, { keyframes } from 'styled-components';
import { Wrapper, SceneText } from './scene-text';
import { max } from '@src/responsive';

const ReflectionSceneWrapper = styled(Box)`
  position: relative;
`;

const float = (y) => keyframes`
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translateY(-${y}px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Face = styled.img`
  position: absolute;
  bottom: 0;
  width: 196.74px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: -93px;

  @media all and ${max.tabletSm} {
    width: 150px;
    bottom: -53px;
  }
`;

const Cloud1 = styled.img`
  position: absolute;
  width: 77.11px;
  margin-left: auto;
  margin-right: auto;
  left: 85px;
  right: 0;
  bottom: 69px;
  animation: ${float(5)} 3s ease-in-out infinite;

  @media all and ${max.tabletSm} {
    width: 57px;
  }
`;

const Cloud2 = styled.img`
  position: absolute;
  width: 93.49px;
  right: -29px;
  top: 7px;
  animation: ${float(8)} 5s ease-in-out infinite;

  @media all and ${max.tabletSm} {
    width: 69px;
    right: 8px;
  }
`;

const Cloud3 = styled.img`
  position: absolute;
  width: 109.7px;
  left: -27px;
  top: -8px;
  animation: ${float(10)} 6s ease-in-out infinite;

  @media all and ${max.tabletSm} {
    width: 82px;
    left: 14px;
  }
`;

const Cloud4 = styled.img`
  position: absolute;
  width: 63.04px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -69px;
  animation: ${float(6)} 4s ease-in-out infinite;

  @media all and ${max.tabletSm} {
    width: 47px;
    top: -50px;
  }
`;

const ReflectionScene = ({ title }) => {
  return (
    <Wrapper>
      <ReflectionSceneWrapper>
        <Face src="/assets/face.svg" />
        <Cloud1 src="/assets/cloud1.svg" />
        <Cloud2 src="/assets/cloud2.svg" />
        <Cloud3 src="/assets/cloud3.svg" />
        <Cloud4 src="/assets/cloud4.svg" />
      </ReflectionSceneWrapper>
      <SceneText>{title}</SceneText>
    </Wrapper>
  );
};

export default ReflectionScene;
