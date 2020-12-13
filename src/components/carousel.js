import queryString from 'query-string';
import React, { useCallback, useEffect, useState } from 'react';
import { navigate, useLocation } from '@reach/router';
import styled from 'styled-components';

import BasicButton from '@src/components/basic-button';
import CalmScene from '@src/components/calm-scene';
import GetawayScene from '@src/components/getaway-scene';
import ImagineScene from '@src/components/imagine-scene';
import JourneyScene from '@src/components/journey-scene';
import Question from '@src/components/question';
import ReflectionScene from '@src/components/reflection-scene';
import { max } from '@src/responsive';
import SafeScene from '@src/components/safe-scene';
import SensesScene from '@src/components/senses-scene';

const PAGE_COUNT = 8;

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
  transform: rotate(180deg);
`;

const getNarrativeComponent = (narrativeIndex, data) => {
  const { question } = data;
  switch (narrativeIndex) {
    case 1:
      return <Question question={question} />;
    case 2:
      return <ReflectionScene />;
    case 3:
      return <SafeScene />;
    case 4:
      return <SensesScene />;
    case 5:
      return <ImagineScene />;
    case 6:
      return <CalmScene />;
    case 7:
      return <GetawayScene />;
    case 8:
      return <JourneyScene />;
    default:
      return 'Please try reloading the page.';
  }
};

const Carousel = ({ data }) => {
  const location = useLocation();
  const { scene } = queryString.parse(location.search);
  const intIndex = parseInt(scene);
  const indexVal = intIndex > 1 && intIndex <= PAGE_COUNT ? intIndex : 1;
  const [narrativeIndex, setNarrativeIndex] = useState(indexVal);

  useEffect(() => {
    if (narrativeIndex !== indexVal) {
      setNarrativeIndex(indexVal);
    }
  });

  const onButtonClick = useCallback(
    (index) => {
      setNarrativeIndex(index);
      navigate(`?scene=${index}`);
    },
    [setNarrativeIndex]
  );

  return (
    <CarouselWrapper>
      {getNarrativeComponent(narrativeIndex, data)}
      <NavigationWrapper>
        {narrativeIndex !== 1 && (
          <RefreshButton onClick={() => onButtonClick(1)}>
            <img src={'/assets/refresh.svg'} />
          </RefreshButton>
        )}
        {narrativeIndex !== 1 && (
          <LeftButton
            onClick={() => onButtonClick(Math.max(narrativeIndex - 1, 1))}
          >
            <BackArrow src={'/assets/arrow.svg'} />
          </LeftButton>
        )}
        {narrativeIndex !== PAGE_COUNT && (
          <RightButton
            onClick={() =>
              onButtonClick(Math.min(narrativeIndex + 1, PAGE_COUNT))
            }
          >
            <img src={'/assets/arrow.svg'} />
          </RightButton>
        )}
        {narrativeIndex !== PAGE_COUNT && (
          <LastPageButton onClick={() => onButtonClick(PAGE_COUNT)}>
            <img src={'/assets/last-page.svg'} />
          </LastPageButton>
        )}
      </NavigationWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
