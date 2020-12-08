import React from 'react';
import Box from './box';
import styled, { keyframes } from 'styled-components';

const ReflectionSceneWrapper = styled.div`
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
`;

const Cloud2 = styled.img`
  position: absolute;
  width: 93.49px;
  right: -29px;
  top: 7px;
  animation: ${float(8)} 5s ease-in-out infinite;
`;

const Cloud3 = styled.img`
  position: absolute;
  width: 109.7px;
  left: -27px;
  top: -8px;
  animation: ${float(10)} 6s ease-in-out infinite;
`;

const Cloud4 = styled.img`
  position: absolute;
  width: 63.04;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -69px;
  animation: ${float(6)} 4s ease-in-out infinite;
`;

const ReflectionScene = () => {
  return (
    <ReflectionSceneWrapper>
      <Box />
      <Face src="/assets/face.svg" />
      <Cloud1 src="/assets/cloud1.svg" />
      <Cloud2 src="/assets/cloud2.svg" />
      <Cloud3 src="/assets/cloud3.svg" />
      <Cloud4 src="/assets/cloud4.svg" />
    </ReflectionSceneWrapper>
  );
};

export default ReflectionScene;
