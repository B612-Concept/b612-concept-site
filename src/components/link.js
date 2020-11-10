import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ url, children }) => {
  // Check if url is an external link
  if (url.startsWith('http')) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <GatsbyLink to={url}>{children}</GatsbyLink>;
};

export default Link;
