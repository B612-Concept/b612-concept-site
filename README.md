# B612

[![Netlify Status](https://api.netlify.com/api/v1/badges/c2355e71-d761-4963-a3f8-63160b319895/deploy-status)](https://app.netlify.com/sites/at-b612/deploys)

## :rocket: Getting Started

1. **Install packages.**

   Navigate into the directory and install with `npm`.

   ```shell
   cd b612-site
   npm i
   ```

1. **Start developing.**

   ```shell
   npm start
   ```

1. **View the site**

   Your local site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## :evergreen_tree: Forestry

The B612 concept website uses [Forestry](https://forestry.io/) as its Content Management System (CMS). Content lives in this repository, and Forestry is a git-based CMS that directly updates files in this repository.

Forestry documentation: https://forestry.io/docs/welcome/

Sourcing from Forestry in Gatsby: https://www.gatsbyjs.com/docs/sourcing-from-forestry.

## :file_folder: File Structure

- `.forestry`: Configuration for Forestry
- `.github`: Pull request template
- `content`: Site content, sourced by Gatsby and updated by Forestry
- `src`: Source code files
  - `components`: React components
  - `pages`: Gatsby routes
  - `templates`: Gatsby templates
  - `utils`: utility functions
- `static`: Static asset files including fonts and images
- `.eslintrc`: ES Lint configuration
- `.prettierrc`: prettier configuration
- `.prettierignore`: prettier ignore files

## :gear: Technologies

The website is built on [Gatsby](https://www.gatsbyjs.com/), and [styled-components](https://styled-components.com/)
