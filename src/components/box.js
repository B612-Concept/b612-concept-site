import styled from 'styled-components';

export const Box = styled.div`
  background-color: #fff;
  font-size: 20px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);

  // Tablet / Desktop should behave the same.
  // This is for the smallest of phones to manipulate the box
  @media all and (min-width: 499px) {
    width: 400px;
    height: 160px;
  }

  @media all and (max-width: 500px) {
    width: 80vw;
    height: 160px;
  }
`;
