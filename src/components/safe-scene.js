import React from 'react';
import styled from 'styled-components';

import Box from './box';
import { max } from '@src/responsive';
import { Wrapper, SceneText } from './scene-text';

const SafeSceneWrapper = styled.div`
  position: relative;
  margin: auto;
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

const SafeScene = ({ title }) => {
  return (
    <Wrapper>
      <SafeSceneWrapper>
        <Box />
        <SafeImage src={'/assets/safe.svg'} />
      </SafeSceneWrapper>
      <SceneText>{title}</SceneText>
    </Wrapper>
  );
};

export default SafeScene;
