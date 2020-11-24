import queryString from 'query-string';
import React, { useCallback, useState } from 'react';
import { navigate, useLocation } from '@reach/router';
import styled from 'styled-components';

import Question from '@src/components/question';
import SensesScene from '@src/components/sensesScene';
import { max } from '@src/responsive';

const BUTTON_GREY = '#BABABA';
const BUTTON_GLOW = '#F39C4C';

const CarouselWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${max.desktop} {
    flex-direction: column;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${max.desktop} {
    width: 100%;
    position: absolute;
    bottom: 20px;
  }
`;

const BasicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid ${BUTTON_GREY};
  background-color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 100px 0px ${BUTTON_GLOW};
    transition: 0.8s ease;
  }
`;

const ArrowButton = styled(BasicButton)`
  position: absolute;
  width: 50px;
  border-radius: 50%;

  @media ${max.desktop} {
    position: static;
    margin: 10px;
  }
`;

const LeftButton = styled(ArrowButton)`
  left: 200px;
`;

const RightButton = styled(ArrowButton)`
  right: 200px;
`;

const RefreshButton = styled(BasicButton)`
  position: absolute;
  left: 0px;
  width: 55px;
  border-radius: 0 50px 50px 0;
  border-left: 0;
`;

const LastPageButton = styled(BasicButton)`
  position: absolute;
  right: 0px;
  width: 55px;
  border-radius: 50px 0 0 50px;
  border-right: 0;
`;

const BackArrow = styled.img`
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const getNarrativeComponent = (narrativeIndex, data) => {
  const { question } = data;
  switch (narrativeIndex) {
    case 1:
      return <Question question={question} />;
    case 2:
      return 'Reflect';
    case 3:
      return <SensesScene />;
    case 4:
      return 'Imagine';
    case 5:
      return 'Calm';
    case 6:
      return 'Getaway';
    case 7:
      return 'Planet';
    case 8:
      return 'Planet';
    default:
      return 'Please try reloading the page.';
  }
};

const Carousel = ({ data }) => {
  const location = useLocation();
  const { index } = queryString.parse(location.search);
  const intIndex = parseInt(index);
  const indexVal = intIndex > 1 && intIndex <= 7 ? intIndex : 1;
  const [narrativeIndex, setNarrativeIndex] = useState(indexVal);

  const onButtonClick = useCallback(
    (index) => {
      setNarrativeIndex(index);
      navigate(`/?index=${index}`);
    },
    [index]
  );

  return (
    <CarouselWrapper>
      {getNarrativeComponent(narrativeIndex, data)}
      <NavigationWrapper>
        <RefreshButton onClick={() => onButtonClick(1)}>
          <img src={'/assets/refresh.svg'} />
        </RefreshButton>
        <LeftButton
          onClick={() => onButtonClick(Math.max(narrativeIndex - 1, 1))}
        >
          <BackArrow src={'/assets/arrow.svg'} />
        </LeftButton>
        <RightButton
          onClick={() => onButtonClick(Math.min(narrativeIndex + 1, 7))}
        >
          <img src={'/assets/arrow.svg'} />
        </RightButton>
        <LastPageButton onClick={() => onButtonClick(7)}>
          <img src={'/assets/last-page.svg'} />
        </LastPageButton>
      </NavigationWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
