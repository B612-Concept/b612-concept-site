import React, { useState } from 'react';
import styled from 'styled-components';
import Question from '@src/components/question';
import SensesScene from '@src/components/sensesScene';
import { max } from '@src/responsive';
import queryString from 'query-string';
import { navigate, useLocation } from '@reach/router';
import { TitleH1 } from '@src/components/fonts';

const CarouselWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${max.tabletLg} {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  @media ${max.tabletLg} {
    position: absolute;
    bottom: 20px;
  }
`;

const CarouselButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid grey;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }

  @media ${max.tabletLg} {
    position: static;
    margin: 10px;
  }
`;

const LeftButton = styled(CarouselButton)`
  position: absolute;
  left: 80px;

  @media ${max.tabletLg} {
    position: static;
  }
`;

const RightButton = styled(CarouselButton)`
  position: absolute;
  right: 80px;

  @media ${max.tabletLg} {
    position: static;
  }
`;

const BackArrow = styled.img`
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const SCENE_INDEX_MAPPINGS = {
  question_scene: 1,
  reflection_scene: 2,
  safe_scene: 3,
  senses_scene: 4,
  imagine_scene: 5,
  calm_scene: 6,
  getaway_scene: 7,
  journey_scene: 8,
};

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

  return (
    <CarouselWrapper>
      {getNarrativeComponent(narrativeIndex, data)}
      <ButtonWrapper>
        <LeftButton
          onClick={() => {
            const prevIndex = Math.max(narrativeIndex - 1, 1);
            setNarrativeIndex(prevIndex);
            navigate(`/?index=${prevIndex}`);
          }}
        >
          <BackArrow src={'/assets/arrow.svg'} />
        </LeftButton>
        <RightButton
          onClick={() => {
            const nextIndex = Math.min(narrativeIndex + 1, 7);
            setNarrativeIndex(nextIndex);
            navigate(`/?index=${nextIndex}`);
          }}
        >
          <img src={'/assets/arrow.svg'} />
        </RightButton>
      </ButtonWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;
