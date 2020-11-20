import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max, min } from '@src/responsive';

const QuestionBox = styled(Box)`
  position: relative;
`;

const FeetContainer = styled.div`
  width: 100px;
  height: 100px

  justify-content: center;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;

  @media all and ${min.tabletSm} {
    bottom: -90px;
  }

  @media all and ${max.tabletSm} {
    width: 80px;
    height: 80px;
    bottom: -35px;
  }
`;

const CalmScene = ({ question }) => {
  return (
    <QuestionBox>
      <img
        src={'/assets/waves.svg'}
        style={{
          maxWidth: '600px',
          maxHeight: '200px',
          width: 'auto',
          height: 'auto',
        }}
      />
      <FeetContainer>
        <img
          src={'/assets/feet.svg'}
          style={{ width: 'auto', height: 'auto' }}
        />
      </FeetContainer>
    </QuestionBox>
  );
};

export default CalmScene;
