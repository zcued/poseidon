import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

import Header from './header'
import './layout.css'

const NavLink = React.forwardRef((props, ref) =>
  props.href ? (
    <a ref={ref} className="NavLink" {...props} />
  ) : (
    <Link ref={ref} className="NavLink" {...props} />
  )
)
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
            { name: 'keywords', content: 'sample, something' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{ display: 'flex' }}>
          <ul>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/tag">Tag</NavLink>
            </li>
            <li>
              <NavLink to="/panel">Panel</NavLink>
            </li>
            <li>
              <NavLink to="/tooltip">Tooltip</NavLink>
            </li>
            <li>
              <NavLink to="/modal">Modal</NavLink>
            </li>
            <li>
              <NavLink to="/list">List</NavLink>
            </li>
            <li>
              <NavLink to="/flex">Flex</NavLink>
            </li>
            <li>
              <NavLink to="/heading">Heading</NavLink>
            </li>
            <li>
              <NavLink to="/pagination">Pagination</NavLink>
            </li>
            <li>
              <NavLink to="/dropdown">Dropdown</NavLink>
            </li>
            <li>
              <NavLink to="/table">Table</NavLink>
            </li>
            <li>
              <NavLink to="/checkbox">Checkbox</NavLink>
            </li>
          </ul>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              flex: 1,
              paddingTop: 0
            }}
          >
            {children}
          </div>
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
