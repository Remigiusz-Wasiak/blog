module.exports = {
  siteMetadata: {
    title: `Remigiusz Wasiak Blog`,
    author: `Remigiusz Wasiak`,
    description: `Blog o programowaniu w JavaScript. Wykorzystanie JavaScript w praktyce. Sposoby na skuteczną naukę programowania.`,
    siteUrl: `https://remigiuszwasiak.pl`,
    social: {
      twitter: `er_wasiak`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 588,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`, // must be before prismjs (common bug)
          {
            resolve: `gatsby-remark-prismjs`,
            oprions: {

            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-131557359-1`,
        head: true,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Remigiusz Wasiak Blog`,
        short_name: `RW Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `content/assets/rw-icon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify`, // must be last in the array (common bug)
      options: {
        headers: {
          "/*.js": [
            'cache-control: public, max-age=31536000, immutable'
          ],
          "/*.css": [
            'cache-control: public, max-age=31536000, immutable'
          ],
          "/sw.js": [
            'cache-control: public, max-age=0, must-revalidate'
          ],
        }
      }
    }
  ],
}
