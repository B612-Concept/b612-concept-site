import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Link from '@src/components/link';
import { H2 } from '@src/components/fonts';
import NewsletterForm from '@src/components/newsletter-form';
import { inputMono } from '@src/styles';

const FooterWrapper = styled.footer`
  padding: 20px;
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    width: 50%;
  }
`;

const NewsletterWrapper = styled.div`
  grid-area: b;

  p {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
  }
`;

const LinksWrapper = styled.div`
  font-family: ${inputMono};
  grid-area: c;
`;

const UnderlineWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const NavigationLinksWrapper = styled.div`
  a {
    margin-right: 40px;
  }
`;

const SocialLinksWrapper = styled.div`
  text-align: right;

  a {
    margin-left: 40px;
  }
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
    <FooterWrapper className={className}>
      <CTAWrapper>
        <H2>{headline}</H2>
        <NewsletterWrapper>
          <p dangerouslySetInnerHTML={{ __html: newsletter_description }} />
          <NewsletterForm />
        </NewsletterWrapper>
      </CTAWrapper>
      <LinksWrapper>
        <NavigationLinksWrapper>
          {navigation_links.map(({ label, url }) => (
            <Link url={url}>{label}</Link>
          ))}
        </NavigationLinksWrapper>
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
    </FooterWrapper>
  );
};

export default Footer;
