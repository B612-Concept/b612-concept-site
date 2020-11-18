import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { TitleH1 } from '../components/fonts';

import { min } from '@src/responsive';

const QuestionBox = styled(Box)`
  display: flex;
  align-items: flex-end;
`;

const QuestionTitle = styled(TitleH1)`
  margin-bottom: 0px;
`;

const TitleWrapper = styled.div`
  margin: 20px;

  @media ${min.tablet} {
    width: 50%;
  }
`;

const Question = ({ question }) => {
  return (
    <QuestionBox>
      <TitleWrapper>
        <QuestionTitle>{question}</QuestionTitle>
      </TitleWrapper>
    </QuestionBox>
  );
};

export default Question;
