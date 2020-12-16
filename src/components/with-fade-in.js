import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const withFadeIn = ($component) => {
  const $wrapped = styled($component)`
    animation: ${fadeIn} 0.2s linear;
  `;

  return (props) => <$wrapped {...props} />;
};

export default withFadeIn;
