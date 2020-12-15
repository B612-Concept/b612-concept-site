import React from 'react';
import styled from 'styled-components';

import Link from '@src/components/link';

const Author = ({ className, name, description, photo, url }) => {
  return (
    <div className={className}>
      <Link url={url}>
        <h2>{name}</h2>
      </Link>
      <p>{description}</p>
      <img src={photo} />
    </div>
  );
};

export default Author;
