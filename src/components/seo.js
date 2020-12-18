import React from 'react';
import Helmet from 'react-helmet';

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
    </Helmet>
  );
};

const Description = ({ description }) => {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};

const Image = ({ image }) => {
  return (
    <Helmet>
      <meta property="twitter:image" content={image} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

const SEO = ({ title, description, image }) => {
  return (
    <>
      {title && <Title title={title} />}
      {description && <Description description={description} />}
      {image && <Image image={image} />}

      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://at-b612.netlify.app" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
    </>
  );
};

export default SEO;
