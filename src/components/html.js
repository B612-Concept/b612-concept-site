import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
`;

const HTML = ({ className, html }) => {
  return (
    <Body className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default HTML;
