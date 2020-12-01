import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: grid;
  place-items: center;
  width: 100%;
  padding-top: 36px;
`;

const Header = ({ sticky }) => {
  return (
    <>
      <StyledHeader>
        <Link to="/">
          <img src="/assets/logo.svg" width="50" />
        </Link>
      </StyledHeader>
    </>
  );
};

export default Header;