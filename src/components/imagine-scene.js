import React from 'react';
import Box from './box';
import styled from 'styled-components';
import { max } from '@src/responsive';

const IMG_PX_GAP = 75;
const FIRST_IMG_LEFT_PX = -30;
const HIGHEST_TOP_PX = -100;

const ImagineSceneWrapper = styled.div`
  position: relative;
`;

const ImagineImg = styled.img`
  position: absolute;
`;

const StarLeftImg = styled(ImagineImg)`
  width: 20px;
  left: ${FIRST_IMG_LEFT_PX}px;
  top: ${HIGHEST_TOP_PX + 40}px;
`;

const LightLeftImg = styled(ImagineImg)`
  width: 20px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP}px;
  top: ${HIGHEST_TOP_PX + 10}px;
`;

const MoonImg = styled(ImagineImg)`
  width: 90px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP * 2}px;
  top: ${HIGHEST_TOP_PX + 60}px;
`;

const LightMiddleImg = styled(ImagineImg)`
  width: 20px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP * 3}px;
  top: ${HIGHEST_TOP_PX}px;
`;

const StarMiddleImg = styled(ImagineImg)`
  width: 20px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP * 4}px;
  top: ${HIGHEST_TOP_PX + 40}px;
`;

const LightRightImg = styled(ImagineImg)`
  width: 20px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP * 5}px;
  top: ${HIGHEST_TOP_PX + 40}px;
`;

const StarRightImg = styled(ImagineImg)`
  width: 20px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP * 6}px;
  top: ${HIGHEST_TOP_PX + 60}px;
`;

const PlanetLeftImg = styled(ImagineImg)`
  width: 50px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP * 7}px;
  top: ${HIGHEST_TOP_PX + 20}px;
`;

const PlanetRightImg = styled(ImagineImg)`
  width: 70px;
  left: ${FIRST_IMG_LEFT_PX + IMG_PX_GAP * 8}px;
  top: ${HIGHEST_TOP_PX}px;
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
