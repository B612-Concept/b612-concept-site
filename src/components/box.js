import styled from 'styled-components';

import { BOX_SHADOW_BLACK } from '@src/components/colors.js';
import { max, min } from '@src/responsive';

export const Box = styled.div`
  background-color: #fff;
  font-size: 20px;
  box-shadow: 0px 0px 50px ${BOX_SHADOW_BLACK};

  // Tablet / Desktop should behave the same.
  // This is for the smallest of phones to manipulate the box
  @media all and ${min.tabletSm} {
    max-width: 600px;
    width: 80vw;
    height: 200px;
  }

  @media all and ${max.tabletSm} {
    width: 80vw;
    height: 150px;
  }
`;

export default Box;
