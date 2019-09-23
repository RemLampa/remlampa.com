module.exports = {
  siteMetadata: {
    title: 'Rem Lampa',
    subTitle: 'On Web Development, Startups & Film Photography',
    author: 'Rem Lampa',
    description: 'Rem Lampa is an engineer turned web developer.',
    siteUrl: 'https://www.remlampa.com',
    image: {
      src: 'https://www.remlampa.com/profile-pic.jpg',
      height: '513',
      width: '513',
      alt: 'Rem Lampa',
    },
    facebook: {
      appId: '475047029994711',
    },
    social: {
      twitter: 'remlampa',
      facebook: 'remlampa',
      medium: 'remlampa',
      linkedin: 'remlampa',
      github: 'remlampa',
      twitch: 'remlampa',
      youtube: 'remlampa',
      photography: 'http://www.lansangan.com',
      email: 'rem@remlampa.com',
      instagram: 'remlampa',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        exclude: [],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 500,
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: { inlineCodeMarker: '>', showLineNumbers: true },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-135110858-1',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'RemLampa.com',
        short_name: 'RemLampa',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
        include_favicon: false,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    'gatsby-plugin-resolve-src',
  ],
};
