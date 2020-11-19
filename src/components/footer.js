import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Link from '@src/components/link';
import { H2 } from '@src/components/fonts';
import NewsletterForm from '@src/components/newsletter-form';

import { Responsive, max, min } from '@src/responsive';
import { inputMono } from '@src/styles';

const FooterWrapper = styled.footer`
  padding: 0 20px;
`;

const CTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media all and ${min.tablet} {
    h2 {
      width: 50%;
    }
  }

  @media all and ${max.tablet} {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

const NewsletterWrapper = styled.div`
  p {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  @media all and ${max.tablet} {
    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

const LinksWrapper = styled.div`
  font-family: ${inputMono};
`;

const UnderlineWrapper = styled.div`
  @media all and ${min.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and ${max.tablet} {
    display: flex;
    flex-direction: column;

    p {
      margin: 5px 0;
    }
  }
`;

const NavigationLinksWrapper = styled.div`
  display: flex;

  a {
    margin-right: 40px;
  }

  @media ${max.tablet} {
    flex-direction: column;

    a {
      margin: 5px 0;
    }
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  justify-content: flex-end;

  a {
    margin-left: 40px;
  }
`;

const ScoutWrapper = styled.p`
  @media all and ${min.tablet} {
    text-align: center;
  }
`;

const Rule = styled.hr`
  margin-top: 20px;
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
          {navigation_links.map(({ label, url }, i) => (
            <Link key={i} url={url}>
              {label}
            </Link>
          ))}
        </NavigationLinksWrapper>
        <Rule />
        <UnderlineWrapper>
          <p>{copyright}</p>
          <ScoutWrapper>Made with ❤️ by Scout</ScoutWrapper>
          <Responsive query={min.tablet}>
            <SocialLinksWrapper>
              {social_links.map(({ label, url }, i) => (
                <Link key={i} url={url}>
                  {label}
                </Link>
              ))}
            </SocialLinksWrapper>
          </Responsive>
        </UnderlineWrapper>
      </LinksWrapper>
    </FooterWrapper>
  );
};

export default Footer;
