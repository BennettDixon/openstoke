import Link from 'next/link'
import siteConfig from 'site.config'
import styled from 'styled-components'

import { Type } from 'styles'
import { Width } from 'components'

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
`

const Wordmark = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  margin-right: 8px;
  height: 20px;
  width: 20px;
  font-size: ${Type.fontSizes.h3};
`

const Name = styled.span`
  font-weight: ${Type.fontWeights.bold};
`

const NavItems = styled.ul`
  margin-left: auto;
  display: flex;
`

export const A = styled.a`
  text-decoration: none;
  color: ${props => props.theme.text10};

  &:hover {
    color: ${props => props.theme.brand};
  }
`

export const NavItem = styled.li`
  margin-left: 24px;
  list-style-type: none;
`

const Header = props => (
  <Width>
    <Nav>
      <Link href='/' passHref>
        <A>
          <Wordmark>
            <Logo src='/logo.svg' />
            <Name>{siteConfig.author}</Name>
          </Wordmark>
        </A>
      </Link>
      <NavItems>
        <NavItem>
          <Link href='/about' passHref>
            <A>About</A>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/guides' passHref>
            <A>Guide blogs</A>
          </Link>
        </NavItem>
        <NavItem>
          <Link href='/wiki' passHref>
            <A>Wiki</A>
          </Link>
        </NavItem>
      </NavItems>
    </Nav>
  </Width>
)

export default Header
