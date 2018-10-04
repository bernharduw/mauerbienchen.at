import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import './layout.css'

const GlobalStyle = createGlobalStyle`
body, html {
  min-height: 100%;
}

body {
    background-color: #ffe01b;
}

a {
  color:inherit;
}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="de" />
          <link
            href="https://fonts.googleapis.com/css?family=Marck+Script"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
