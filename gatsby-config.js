module.exports = {
  siteMetadata: {
    title: 'mauerbienchen.at',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'mauerbienchen.at',
        short_name: 'mauerbienchen',
        start_url: '/',
        background_color: '#ffdd00',
        theme_color: '#ffdd00',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    'gatsby-plugin-offline',
  ],
}
