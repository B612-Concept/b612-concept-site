import styled from 'styled-components';

import {
  BUTTON_GREY,
  DISABLED_BUTTON_GREY,
  ORANGE_GLOW,
} from '@src/components/colors';

const BasicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid ${BUTTON_GREY};
  background-color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 100px 0px ${ORANGE_GLOW};
    transition: 0.8s ease;
  }

  &:disabled {
    box-shadow: none;
    cursor: default;
    background-color: ${DISABLED_BUTTON_GREY};
  }
`;

export default BasicButton;
