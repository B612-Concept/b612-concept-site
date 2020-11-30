import React from 'react';
import styled from 'styled-components';

const BUTTON_GREY = '#BABABA';
const DISABLED_BUTTON_GREY = '#EAEBE5';
const BUTTON_GLOW = '#F39C4C';

const BasicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border: 1px solid ${BUTTON_GREY};
  background-color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 100px 0px ${BUTTON_GLOW};
    transition: 0.8s ease;
  }

  &:disabled {
    box-shadow: none;
    cursor: default;
    background-color: ${DISABLED_BUTTON_GREY};
  }
`;

export default BasicButton;
