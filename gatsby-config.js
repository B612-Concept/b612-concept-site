const path = require('path');
/**
 * Get path relative to static/ directory
 *
 * @param {array} nodes
 * @returns {string}
 */
function fromStatic(...nodes) {
  return `${__dirname}/static/${nodes.join('/')}`;
}

const SITE_NAME = 'B612';

const prefersDark =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;
const FAVICON = prefersDark ? 'b612-logo.png' : 'b612-logo-white.png';

module.exports = {
  siteMetadata: {
    title: SITE_NAME,
    description: `B612 is the only wellness experience service that provides a habitual way to disconnect and seclude in a private space for the introspective, achievers in Seattle WA who seek a mental getaway from the urban lifestyle in an era of digital exhaustion and hustle culture.`,
    author: `Scout <neuscout411@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-source-name`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: fromStatic('assets'),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': path.resolve(__dirname, './src'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `scenes`,
        path: `content/scenes.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footer`,
        path: `content/footer.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landing`,
        path: `content/landing.md`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: SITE_NAME,
        short_name: SITE_NAME,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: fromStatic('assets', FAVICON),
      },
    },
  ],
};
