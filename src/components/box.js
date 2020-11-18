import styled from 'styled-components';

import { max, min } from '@src/responsive';

export const Box = styled.div`
  background-color: #fff;
  font-size: 20px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);

  // Tablet / Desktop should behave the same.
  // This is for the smallest of phones to manipulate the box
  @media all and ${min.tabletSm} {
    max-width: 600px;
    width: 80vw;
    height: 200px;
  }

  @media all and ${max.tabletSm} {
    width: 80vw;
    height: 200px;
  }
`;

export default Box;
