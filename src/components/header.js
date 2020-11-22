import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  place-items: center;
  margin-top: 36px;
  margin-bottom: 65px;
`;

const Header = () => (
  <StyledHeader>
    <img src="/assets/logo.svg" width="50" />
  </StyledHeader>
);

export default Header;
