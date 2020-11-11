import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Link from '@src/components/link';
import NewsletterForm from '@src/components/newsletter-form';
import { inputMono } from '@src/styles';

const LinksWrapper = styled.div`
  padding: 20px;
  font-family: ${inputMono};
`;

const UnderlineWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const SocialLinksWrapper = styled.div`
  text-align: right;
`;

const ScoutWrapper = styled.p`
  text-align: center;
`;

const Rule = styled.hr`
  margin: 20px 0;
  opacity: 30%;
`;

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
      <LinksWrapper>
        <div>
          {navigation_links.map(({ label, url }) => (
            <Link url={url}>{label}</Link>
          ))}
        </div>
        <Rule />
        <UnderlineWrapper>
          <p>{copyright}</p>
          <ScoutWrapper>Made with ❤️ by Scout</ScoutWrapper>
          <SocialLinksWrapper>
            {social_links.map(({ label, url }) => (
              <Link url={url}>{label}</Link>
            ))}
          </SocialLinksWrapper>
        </UnderlineWrapper>
      </LinksWrapper>
    </footer>
  );
};

export default Footer;
