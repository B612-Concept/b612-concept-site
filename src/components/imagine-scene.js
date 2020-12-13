import React from 'react';
import styled from 'styled-components';

import Box from './box';
import { ORANGE_GLOW } from '@src/components/colors';
import { max, min } from '@src/responsive';

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

const LightOrb = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  box-shadow: 10px 0px 0px 0px ${ORANGE_GLOW};
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

const LightbulbImg = styled(SmallImg)`
  &:hover ~ ${LightOrb} {
    box-shadow: 10px 0px 40px 20px ${ORANGE_GLOW};
    transition: 0.8s ease;
  }
`;

const StarLeftImg = styled(SmallImg)`
  left: ${getLeftPx(0)};
  top: calc(var(--highest-top) + 40px);
`;

const LightLeftImg = styled(LightbulbImg)`
  left: ${getLeftPx(1)};
  top: calc(var(--highest-top) + 20px);

  @media ${min.tablet} {
    &:hover ~ ${LightOrb} {
      left: ${getLeftPx(1)};
      top: calc(var(--highest-top) + 120px);
    }
  }

  @media ${max.tablet} {
    &:hover ~ ${LightOrb} {
      left: ${getLeftPx(1)};
      top: calc(var(--highest-top) + 100px);
    }
  }

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

const LightMiddleImg = styled(LightbulbImg)`
  left: ${getLeftPx(3)};
  top: var(--highest-top);

  @media ${min.tablet} {
    &:hover ~ ${LightOrb} {
      left: ${getLeftPx(3)};
      top: calc(var(--highest-top) + 145px);
    }
  }

  @media ${max.tablet} {
    &:hover ~ ${LightOrb} {
      left: ${getLeftPx(3)};
      top: calc(var(--highest-top) + 110px);
    }
  }

  @media ${max.tabletSm} {
    left: ${getLeftPx(2)};

    &:hover ~ ${LightOrb} {
      left: ${getLeftPx(2)};
      top: calc(var(--highest-top) + 110px);
    }
  }
`;

const StarMiddleImg = styled(SmallImg)`
  left: ${getLeftPx(4)};
  top: calc(var(--highest-top) + 40px);

  @media ${max.tabletSm} {
    display: none;
  }
`;

const LightRightImg = styled(LightbulbImg)`
  left: ${getLeftPx(5)};
  top: calc(var(--highest-top) + 40px);

  @media ${min.tablet} {
    &:hover ~ ${LightOrb} {
      left: ${getLeftPx(5)};
      top: calc(var(--highest-top) + 190px);
    }
  }

  @media ${max.tablet} {
    &:hover ~ ${LightOrb} {
      left: ${getLeftPx(5)};
      top: calc(var(--highest-top) + 150px);
    }
  }

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
      <div>
        <LightLeftImg src={'/assets/light-1.svg'} />
        <LightOrb />
      </div>
      <MoonImg src={'/assets/moon-1.svg'} />
      <div>
        <LightMiddleImg src={'/assets/light-2.svg'} />
        <LightOrb />
      </div>
      <StarMiddleImg src={'/assets/star-2.svg'} />
      <div>
        <LightRightImg src={'/assets/light-3.svg'} />
        <LightOrb />
      </div>
      <StarRightImg src={'/assets/star-3.svg'} />
      <PlanetLeftImg src={'/assets/planet-1.svg'} />
      <PlanetRightImg src={'/assets/planet-2.svg'} />
    </ImagineSceneWrapper>
  );
};

export default ImagineScene;
