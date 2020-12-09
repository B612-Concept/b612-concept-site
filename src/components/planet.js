import styled from 'styled-components';

import { ORANGE_GLOW, PLANET_OFF_WHITE } from '@src/components/colors.js';

const Planet = styled.span`
  background: ${PLANET_OFF_WHITE};
  box-shadow: 0px 0px 250px ${ORANGE_GLOW};
  border-radius: 100%;

  width: 500px;
  height: 500px;
`;

export default Planet;
