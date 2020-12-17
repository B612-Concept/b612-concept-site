import React, { useState } from 'react';
import styled from 'styled-components';

const LoadingBar = styled.div`
  height: 20px;
  width: ${(props) => `${300 * props.fraction}`}px;
  background-color: red;

  transition: width 0.2s ease-in-out;
`;

const Loader = ({ className, fraction }) => {
  return <LoadingBar className={className} fraction={fraction} />;
};

export default Loader;
