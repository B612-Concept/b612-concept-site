import React from 'react';
import styled from 'styled-components';

import Link from '@src/components/link';
import { H2 } from '@src/components/fonts';
import HTML from '@src/components/html';

import { max, min } from '@src/responsive';

const AuthorWrapper = styled.div`
  display: flex;

  @media all and ${max.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const Photo = styled.img`
  border-radius: 100%;

  width: 50px;
  height: 50px;

  margin-right: 10px;

  @media all and ${max.tablet} {
    margin-bottom: 20px;
  }
`;

const TextWrapper = styled.div`
  font-size: 24px;
  line-height: 32px;

  @media all and ${max.tablet} {
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled(H2)`
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;

  a {
    color: inherit;
    text-decoration: none;
  }

  margin: 0;
`;

const Description = styled(HTML)`
  margin: 0;
`;

const Author = ({ className, name, description, photo, url }) => {
  return (
    <AuthorWrapper className={className}>
      {photo && <Photo src={photo} />}
      <TextWrapper>
        <Name>
          <Link url={url}>{name}</Link>
        </Name>
        {description && <Description html={description} paragraph />}
      </TextWrapper>
    </AuthorWrapper>
  );
};

export default Author;
