import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max } from '@src/responsive';

const SafeSceneWrapper = styled.div`
  position: relative;
`;
const SafeImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 300px;

  @media ${max.tabletSm} {
    width: 100%;
  }
`;

const SafeScene = () => {
  return (
    <SafeSceneWrapper>
      <Box />
      <SafeImage src={'/assets/safe.svg'} />
    </SafeSceneWrapper>
  );
};

export default SafeScene;
