import styled from 'styled-components';
import { franklinGothic, inputMono } from '@src/styles.js';

export const TitleH1 = styled.h1`
  font-size: 36px;
  font-weight: 100;
  font-family: ${franklinGothic};

  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

export const H1 = styled.h1`
  font-size: 3em;
`;

export const H2 = styled.h2`
  font-size: 2em;
  line-height: 1.3em;
`;

export const H3 = styled.h3`
  font-size: 1.5em;
`;

export const H4 = styled.h4`
  font-size: 1.17em;
`;

export const P = styled.p`
  font-size: 0.9em;
`;
