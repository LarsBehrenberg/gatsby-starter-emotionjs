import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const Container = styled.header`
  margin-bottom: 1.45rem;
  border-bottom: 1px solid #333;
  background: #373b44; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #4286f4,
    #373b44
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #4286f4,
    #373b44
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
  }
`

const Logo = styled.h1`
  margin: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 1rem;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <Menu>
        <Link to="/">Home</Link>
        <Link to="/page-2">Page 2</Link>
      </Menu>
    </Wrapper>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
