import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max } from '@src/responsive';

const getLeftPx = (index) =>
  `calc(var(--first-img-left) + var(--img-gap) * ${index});`;

const ImagineSceneWrapper = styled.div`
  position: relative;
  --img-gap: 70px;
  --first-img-left: -10px;
  --highest-top: -120px;

  @media ${max.tablet} {
    --img-gap: 12%;
    --highest-top: -70px;
  }

  @media ${max.tabletSm} {
    --img-gap: 16%;
    --first-img-left: 10px;
    --highest-top: -90px;
  }
`;

const ImagineImg = styled.img`
  position: absolute;
`;

// Star and Lightbulb Images
const SmallImg = styled(ImagineImg)`
  width: 20px;

  @media ${max.tablet} {
    width: 15px;
  }
`;

const StarLeftImg = styled(SmallImg)`
  left: ${getLeftPx(0)};
  top: calc(var(--highest-top) + 40px);
`;

const LightLeftImg = styled(SmallImg)`
  left: ${getLeftPx(1)};
  top: calc(var(--highest-top) + 20px);

  @media ${max.tabletSm} {
    display: none;
  }
`;

const MoonImg = styled(ImagineImg)`
  width: 90px;
  left: ${getLeftPx(2)};
  top: calc(var(--highest-top) + 60px);

  @media ${max.tablet} {
    width: 80px;
  }

  @media ${max.tabletSm} {
    left: ${getLeftPx(1)};
  }
`;

const LightMiddleImg = styled(SmallImg)`
  left: ${getLeftPx(3)};
  top: var(--highest-top);

  @media ${max.tabletSm} {
    left: ${getLeftPx(2)};
  }
`;

const StarMiddleImg = styled(SmallImg)`
  left: ${getLeftPx(4)};
  top: calc(var(--highest-top) + 40px);

  @media ${max.tabletSm} {
    display: none;
  }
`;

const LightRightImg = styled(SmallImg)`
  left: ${getLeftPx(5)};
  top: calc(var(--highest-top) + 40px);

  @media ${max.tabletSm} {
    display: none;
  }
`;

const StarRightImg = styled(SmallImg)`
  left: ${getLeftPx(6)};
  top: calc(var(--highest-top) + 60px);

  @media ${max.tabletSm} {
    left: ${getLeftPx(3)};
  }
`;

const PlanetLeftImg = styled(ImagineImg)`
  width: 50px;
  left: ${getLeftPx(7)};
  top: calc(var(--highest-top) + 20px);

  @media ${max.tablet} {
    width: 40px;
  }

  @media ${max.tabletSm} {
    left: ${getLeftPx(4)};
  }
`;

const PlanetRightImg = styled(ImagineImg)`
  width: 70px;
  left: ${getLeftPx(8)};
  top: var(--highest-top);

  @media ${max.tablet} {
    width: 60px;
  }

  @media ${max.tabletSm} {
    left: ${getLeftPx(5)};
  }
`;

const ImagineScene = () => {
  return (
    <ImagineSceneWrapper>
      <Box />
      <StarLeftImg src={'/assets/star-1.svg'} />
      <LightLeftImg src={'/assets/light-1.svg'} />
      <MoonImg src={'/assets/moon-1.svg'} />
      <LightMiddleImg src={'/assets/light-2.svg'} />
      <StarMiddleImg src={'/assets/star-2.svg'} />
      <LightRightImg src={'/assets/light-3.svg'} />
      <StarRightImg src={'/assets/star-3.svg'} />
      <PlanetLeftImg src={'/assets/planet-1.svg'} />
      <PlanetRightImg src={'/assets/planet-2.svg'} />
    </ImagineSceneWrapper>
  );
};

export default ImagineScene;
