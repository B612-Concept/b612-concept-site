import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max, min } from '@src/responsive';

const QuestionBox = styled(Box)`
  position: relative;
`;

const Waves = styled.img`
  max-height: 200px;
  max-width: 600px;
  width: auto;
  height: auto;
`;

const Feet = styled.img`
  width: 100px;

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media all and ${min.tabletSm} {
    bottom: -90px;
  }

  @media all and ${max.tabletSm} {
    width: 80px;
    height: 80px;
    bottom: -35px;
  }
`;

const SensesScene = ({ question }) => {
  return (
    <QuestionBox>
      <Waves src={'/assets/waves.svg'} />
      <Feet src={'/assets/feet.svg'} />
    </QuestionBox>
  );
};

export default SensesScene;
