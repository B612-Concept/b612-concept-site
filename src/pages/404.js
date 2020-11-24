import React from 'react';
import Link from '@src/components/link';

const NotFound = () => (
  <section>
    <h1>
      We can’t find what you’re looking for. Try our{' '}
      <Link url="/">home page</Link> instead?
    </h1>
    <img src="/assets/404-planet.svg" />
  </section>
);

export default NotFound;
