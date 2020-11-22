import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  width: 100%;

  div {
    display: grid;
    place-items: center;
    width: 100%;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    position: ${(props) => (props.sticky ? 'fixed' : 'relative')};
    padding: ${(props) =>
      props.sticky && props.scrollPosition > 0 ? '16px 0' : '36px 0 16px'};

    ${(props) =>
      props.sticky &&
      props.scrollPosition > 0 &&
      `
        backdrop-filter: saturate(180%) blur(20px);
    `};
  }
`;

const HeaderSpace = styled.div`
  position: relative;
  height: 150px;
`;

const Header = ({ sticky }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <StyledHeader sticky={sticky} scrollPosition={scrollPosition}>
        <div>
          <img src="/assets/logo.svg" width="50" />
        </div>
      </StyledHeader>
      <HeaderSpace />
    </>
  );
};

export default Header;
