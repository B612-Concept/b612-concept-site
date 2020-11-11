import React from 'react';

const NewsletterForm = ({ className }) => {
  return (
    <form className={className}>
      <input placeholder="Email address" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
