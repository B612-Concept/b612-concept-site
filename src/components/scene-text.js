import styled from 'styled-components';
import { franklinGothic } from '@src/styles';
import { min } from '@src/responsive';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 85px;

  @media all and ${min.tabletSm} {
    padding-top: 170px;
  }
`;

export const SceneText = styled.h1`
  font-family: ${franklinGothic};
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  flex-grow: 0;
  margin-top: 62px;
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;

  @media all and ${min.tabletSm} {
    margin-top: 124px;
  }
`;

export const JourneySceneText = styled.h1`
  font-family: ${franklinGothic};
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 9rem;
  margin-bottom: 3rem;
  width: 250px;

  > span {
    width: 250px;
  }

  @media all and ${min.tabletSm} {
    margin-top: 12rem;
  }

  @media all and ${min.desktop} {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    text-align: left;
    margin-top: 25px;
    margin-left: 25px;
  }
`;
