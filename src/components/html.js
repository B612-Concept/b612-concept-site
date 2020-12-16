import React from 'react';
import styled from 'styled-components';

const HTML = ({ className, html, paragraph }) => {
  const Body = styled[paragraph ? 'p' : 'div']`
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
  `;

  return (
    <Body className={className} dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default HTML;
