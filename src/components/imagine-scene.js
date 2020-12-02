import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max } from '@src/responsive';

const ImagineSceneWrapper = styled.div`
  position: relative;
`;

const ImagineScene = () => {
  return (
    <ImagineSceneWrapper>
      <Box />
    </ImagineSceneWrapper>
  );
};

export default ImagineScene;
