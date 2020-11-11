import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '@src/components/link';
import NewsletterForm from '@src/components/newsletter-form';

const Footer = ({ className }) => {
  const {
    markdownRemark: {
      frontmatter: {
        headline,
        newsletter_description,
        navigation_links,
        social_links,
        copyright,
      },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(fields: { sourceName: { eq: "footer" } }) {
        frontmatter {
          headline
          newsletter_description
          navigation_links {
            label
            url
          }
          social_links {
            label
            url
          }
          copyright
        }
      }
    }
  `);

  return (
    <footer className={className}>
      <h3>{headline}</h3>
      <p dangerouslySetInnerHTML={{ __html: newsletter_description }} />
      <NewsletterForm />
      <p>{copyright}</p>
      <div>
        {navigation_links.map(({ label, url }) => (
          <Link url={url}>{label}</Link>
        ))}
      </div>
      <div>
        {social_links.map(({ label, url }) => (
          <Link url={url}>{label}</Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
