import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Otavio Portifólio`,
    siteUrl: `https://rgxstore.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",  
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/logo.png"
      }
    }, 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
        ],
        display: "swap",
      },
    }
  ]
};

export default config;
